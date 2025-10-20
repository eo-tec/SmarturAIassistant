import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type AssistantState = 'idle' | 'listening' | 'thinking' | 'speaking';

interface OrbitalSystemProps {
  state: AssistantState;
}

const OrbitalSystem = ({ state }: OrbitalSystemProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<AssistantState>(state);

  // Actualizar la ref cada vez que cambie el prop state
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

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
    // let transitionProgress = 0; // Variable reservada para futuras animaciones de transición

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

    // Función helper para easing sine-in-out
    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

    // Función de animación principal
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.016; // ~60fps

      // Sincronizar con el prop state usando la ref
      if (currentState !== stateRef.current) {
        currentState = stateRef.current;
        // transitionProgress = 0; // Reset para futuras animaciones
      }

      // ===== ESTADO: IDLE =====
      if (currentState === 'idle') {
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
        // Pulso reactivo simulado
        const pulse = 1 + Math.sin(time * 3) * 0.06;
        sphere.scale.setScalar(pulse);

        // Rotación moderada
        sphere.rotation.y += 0.003;

        // Color blanco brillante
        sphereMaterial.color.setHex(0xffffff);

        // Halo con ripples centrípetos
        const ripple = Math.sin(time * 6) * 0.15;
        halo.scale.setScalar(1.2 - Math.abs(ripple));
        haloMaterial.opacity = 0.3 + Math.abs(ripple) * 0.2;

        // Partículas en órbitas bajas (4-8 visibles)
        particles.forEach((p, i) => {
          if (i < 8) {
            p.mesh.visible = true;
            p.angle += p.speed * 2;
            const convergence = Math.sin(time * 2) * 0.3;
            p.mesh.position.set(
              Math.cos(p.angle) * (p.radius * 0.8 - convergence),
              p.height * 0.5,
              Math.sin(p.angle) * (p.radius * 0.8 - convergence)
            );
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.6;
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
        // Micro-pulsos rápidos simulados
        const rapidPulse = 1 + Math.sin(time * 8) * 0.05;
        sphere.scale.setScalar(rapidPulse);

        // Rotación lenta
        sphere.rotation.y += 0.002;

        // Blanco brillante para speaking
        sphereMaterial.color.setHex(0xffffff);

        // Halo que se expande/contrae
        const expansion = 1 + Math.sin(time * 4) * 0.06;
        halo.scale.setScalar(expansion);
        haloMaterial.opacity = 0.35;

        // Partículas reactivas al pulso (8 visibles)
        // Las partículas se alejan cuando la esfera crece y se acercan cuando se encoge
        const pulseValue = Math.sin(time * 8) * 0.05; // mismo valor que rapidPulse
        const radiusMultiplier = 1 + pulseValue * 0.8; // Movimiento más sutil

        particles.forEach((p, i) => {
          if (i < 8) {
            p.mesh.visible = true;
            // Posición fija sin rotación, sincronizada con el pulso
            p.mesh.position.set(
              Math.cos(p.angle) * p.radius * radiusMultiplier,
              p.height,
              Math.sin(p.angle) * p.radius * radiusMultiplier
            );
            (p.mesh.material as THREE.MeshBasicMaterial).opacity = 0.4;
          } else {
            p.mesh.visible = false;
          }
        });

        // Waveform visible y ondulante
        waveMaterial.opacity = 0.6;
        const positions = waveGeometry.attributes.position;
        for (let i = 0; i < positions.count; i++) {
          const x = positions.getX(i);
          const wave = Math.sin(x * 2 + time * 4) * 0.3 * Math.abs(Math.sin(time * 8));
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

  return <div ref={mountRef} />;
};

export default OrbitalSystem;
