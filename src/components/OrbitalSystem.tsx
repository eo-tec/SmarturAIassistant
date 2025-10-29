import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type AssistantState = 'inactive' | 'idle' | 'listening' | 'thinking' | 'speaking';

interface OrbitalSystemProps {
  state: AssistantState;
  audioLevel?: number; // Nivel de audio (0.0 - 1.0)
  onClick?: () => void; // Handler para clicks en la esfera
}

const OrbitalSystem = ({ state, audioLevel = 0, onClick }: OrbitalSystemProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<AssistantState>(state);
  const audioLevelRef = useRef<number>(audioLevel);

  // Actualizar la ref cada vez que cambie el prop state
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  // Actualizar la ref cada vez que cambie el prop audioLevel
  useEffect(() => {
    audioLevelRef.current = audioLevel;
  }, [audioLevel]);

  useEffect(() => {
    if (!mountRef.current) return;

    // Configurar escena, cámara y renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000); // Fondo negro

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Variables de tiempo y animación
    let time = 0;
    let currentState = stateRef.current;
    let smoothedAudioLevel = 0; // Nivel de audio suavizado para transiciones fluidas
    // let transitionProgress = 0; // Variable reservada para futuras animaciones de transición

    // Función helper para suavizado (linear interpolation)
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // NÚCLEO CENTRAL (esfera)
    const sphereGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // HALO (anillo)
    const haloGeometry = new THREE.RingGeometry(2, 2.3, 64);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    halo.rotation.x = Math.PI / 2;
    scene.add(halo);

    // PARTÍCULAS
    const particleCount = 12;
    const particleGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const particleMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6
    });

    const particles: Array<{
      mesh: THREE.Mesh;
      angle: number;
      radius: number;
      speed: number;
      height: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(particleGeometry, particleMaterial.clone());
      scene.add(particle);
      particles.push({
        mesh: particle,
        angle: (Math.PI * 2 * i) / particleCount,
        radius: 3 + Math.random() * 0.5,
        speed: 0.001 + Math.random() * 0.002,
        height: (Math.random() - 0.5) * 0.5
      });
    }

    // FORMA DE ONDA (para estado "speaking")
    const waveGeometry = new THREE.PlaneGeometry(3, 0.6, 32, 4);
    const waveMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const waveform = new THREE.Mesh(waveGeometry, waveMaterial);
    waveform.position.z = 2.5;
    scene.add(waveform);

    // ILUMINACIÓN
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Posicionar cámara
    camera.position.z = 8;

    // Handler simple para clicks
    const handleClick = () => {
      console.log('🖱️ Click detected on canvas');
      if (!onClick) {
        console.log('⚠️ onClick is undefined, ignoring click');
        return;
      }
      console.log('✅ Calling onClick handler');
      onClick();
    };

    // Agregar event listener para clicks
    if (onClick) {
      console.log('🎯 Adding click event listener to canvas');
      renderer.domElement.addEventListener('click', handleClick);
      renderer.domElement.style.cursor = 'pointer';
    } else {
      console.log('⏸️ onClick not provided, click listener not added');
    }

    // Función helper para easing sine-in-out
    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

    // Función de animación principal
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.016; // ~60fps

      // Suavizar el nivel de audio para transiciones fluidas
      // Factor de 0.15 = transiciones suaves sin lag perceptible
      const targetAudioLevel = audioLevelRef.current || 0;
      smoothedAudioLevel = lerp(smoothedAudioLevel, targetAudioLevel, 0.15);

      // Sincronizar con el prop state usando la ref
      if (currentState !== stateRef.current) {
        currentState = stateRef.current;
        // transitionProgress = 0; // Reset para futuras animaciones
      }

      // ===== ESTADO: INACTIVE =====
      if (currentState === 'inactive') {
        // Respiración muy sutil y lenta (8-10 segundos)
        const breathe = 0.995 + 0.005 * easeInOutSine((Math.sin(time * 0.15) + 1) / 2);
        sphere.scale.setScalar(breathe);

        // Sin rotación
        sphere.rotation.y = 0;
        sphere.rotation.x = 0;

        // Color gris claro
        sphereMaterial.color.setHex(0xd3d3d3);

        // Halo casi invisible o completamente oculto
        haloMaterial.opacity = 0.05;
        halo.scale.setScalar(1);

        // Todas las partículas ocultas
        particles.forEach((p) => {
          p.mesh.visible = false;
        });

        // Waveform oculta
        waveMaterial.opacity = 0;
      }

      // ===== ESTADO: IDLE =====
      else if (currentState === 'idle') {
        // Respiración lenta (4-6 segundos)
        const breathe = 0.98 + 0.02 * easeInOutSine((Math.sin(time * 0.3) + 1) / 2);
        sphere.scale.setScalar(breathe);

        // Rotación muy lenta
        sphere.rotation.y += 0.002;
        sphere.rotation.x += 0.001;

        // Color gris medio
        sphereMaterial.color.setHex(0xcccccc);

        // Halo sutil
        haloMaterial.opacity = 0.18 + Math.sin(time * 0.5) * 0.02;
        halo.scale.setScalar(1 + Math.sin(time * 0.4) * 0.01);

        // Partículas casi inmóviles (3-6 visibles)
        particles.forEach((p, i) => {
          if (i < 6) {
            p.mesh.visible = true;
            p.angle += p.speed * 0.3;
            const noise = Math.sin(time * 0.3 + i) * 0.05;
            p.mesh.position.set(
              Math.cos(p.angle) * p.radius + noise,
              p.height + Math.sin(time * 0.2 + i) * 0.1,
              Math.sin(p.angle) * p.radius + noise
            );
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.3;
          } else {
            p.mesh.visible = false;
          }
        });

        // Waveform oculta
        waveMaterial.opacity = 0;
      }

      // ===== ESTADO: LISTENING =====
      else if (currentState === 'listening') {
        // Pulso reactivo al nivel de audio del micrófono (suavizado)
        const audioIntensity = smoothedAudioLevel;
        const basePulse = 1 + Math.sin(time * 3) * 0.02; // Pulso base sutil
        const audioPulse = audioIntensity * 0.15; // Reactividad al audio
        sphere.scale.setScalar(basePulse + audioPulse);

        // Rotación moderada (más rápida con audio)
        sphere.rotation.y += 0.003 + audioIntensity * 0.005;

        // Color blanco brillante
        sphereMaterial.color.setHex(0xffffff);

        // Halo con ripples centrípetos reactivos al audio
        const rippleSpeed = 6 + audioIntensity * 4;
        const rippleIntensity = 0.15 + audioIntensity * 0.1;
        const ripple = Math.sin(time * rippleSpeed) * rippleIntensity;
        halo.scale.setScalar(1.2 - Math.abs(ripple));
        haloMaterial.opacity = 0.3 + Math.abs(ripple) * 0.2 + audioIntensity * 0.15;

        // Partículas en órbitas (velocidad reactiva al audio)
        particles.forEach((p, i) => {
          if (i < 8) {
            p.mesh.visible = true;
            p.angle += p.speed * (2 + audioIntensity * 3);
            const convergence = Math.sin(time * 2) * (0.3 + audioIntensity * 0.2);
            p.mesh.position.set(
              Math.cos(p.angle) * (p.radius * 0.8 - convergence),
              p.height * 0.5,
              Math.sin(p.angle) * (p.radius * 0.8 - convergence)
            );
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.6 + audioIntensity * 0.2;
          } else {
            p.mesh.visible = false;
          }
        });

        // Waveform oculta
        waveMaterial.opacity = 0;
      }

      // ===== ESTADO: THINKING =====
      else if (currentState === 'thinking') {
        // Micro-deformación simulada con variación de emisividad
        const deform = 1 + Math.sin(time * 2) * 0.02;
        sphere.scale.setScalar(deform);

        // Rotación constante
        sphere.rotation.y += 0.004;
        sphere.rotation.x += 0.002;

        // Escala de grises: transición entre gris oscuro y gris claro
        const colorMix = (Math.sin(time * 0.5) + 1) / 2;
        const darkGray = new THREE.Color(0x666666);
        const lightGray = new THREE.Color(0xdddddd);
        sphereMaterial.color.lerpColors(darkGray, lightGray, colorMix);

        // Halo como arco de progreso
        const progress = (time * 0.4) % (Math.PI * 2);
        haloMaterial.opacity = 0.25;
        halo.rotation.z = progress;
        halo.scale.setScalar(1.1);

        // Partículas con movimientos verticales (6-12 visibles)
        particles.forEach((p, i) => {
          p.mesh.visible = true;
          p.angle += p.speed;
          const verticalMove = Math.sin(time * 0.8 + i * 0.5) * 0.8;

          // Alineaciones ocasionales
          const align = i % 2 === 0 ? Math.sin(time * 1.2) * 0.1 : 0;

          p.mesh.position.set(
            Math.cos(p.angle) * (p.radius + align),
            verticalMove,
            Math.sin(p.angle) * (p.radius + align)
          );
          (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.5;
        });

        // Waveform oculta
        waveMaterial.opacity = 0;
      }

      // ===== ESTADO: SPEAKING =====
      else if (currentState === 'speaking') {
        // Pulso reactivo al audio de salida del asistente (suavizado)
        const audioIntensity = smoothedAudioLevel;
        const basePulse = 1 + Math.sin(time * 8) * 0.02; // Pulso base sutil
        const audioPulse = audioIntensity * 0.12; // Reactividad al audio
        sphere.scale.setScalar(basePulse + audioPulse);

        // Rotación lenta
        sphere.rotation.y += 0.002;

        // Blanco brillante para speaking
        sphereMaterial.color.setHex(0xffffff);

        // Halo que se expande/contrae (reactivo al audio)
        const expansionBase = 1 + Math.sin(time * 4) * 0.03;
        const expansionAudio = audioIntensity * 0.08;
        halo.scale.setScalar(expansionBase + expansionAudio);
        haloMaterial.opacity = 0.35 + audioIntensity * 0.15;

        // Partículas reactivas al audio (8 visibles)
        const radiusMultiplier = 1 + audioPulse * 1.2;

        particles.forEach((p, i) => {
          if (i < 8) {
            p.mesh.visible = true;
            // Posición sincronizada con el pulso de audio
            p.mesh.position.set(
              Math.cos(p.angle) * p.radius * radiusMultiplier,
              p.height,
              Math.sin(p.angle) * p.radius * radiusMultiplier
            );
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.4 + audioIntensity * 0.3;
          } else {
            p.mesh.visible = false;
          }
        });

        // Waveform reactiva al audio de salida
        const waveOpacity = 0.4 + audioIntensity * 0.4;
        waveMaterial.opacity = waveOpacity;
        const positions = waveGeometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          // Amplitud de onda basada en el nivel de audio
          const waveAmplitude = 0.3 * audioIntensity + 0.05;
          const wave = Math.sin(x * 2 + time * 4) * waveAmplitude;
          positions.setY(i, wave);
        }
        positions.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Manejar redimensionamiento de ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
      if (onClick) {
        renderer.domElement.removeEventListener('click', handleClick);
      }
      mountRef.current?.removeChild(renderer.domElement);

      // Limpiar geometrías
      sphereGeometry.dispose();
      haloGeometry.dispose();
      particleGeometry.dispose();
      waveGeometry.dispose();

      // Limpiar materiales
      sphereMaterial.dispose();
      haloMaterial.dispose();
      particleMaterial.dispose();
      waveMaterial.dispose();

      // Limpiar materiales clonados de partículas
      particles.forEach(p => {
        (p.mesh.material as THREE.Material).dispose();
      });

      renderer.dispose();
    };
  }, []); // Solo se ejecuta una vez al montar, stateRef se actualiza automáticamente

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0
      }}
    />
  );
};

export default OrbitalSystem;
