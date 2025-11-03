import { useEffect, useRef } from "react";

interface VoiceOrbProps {
  mode: "listening" | "speaking" | "idle" | "inactive";
  audioLevel?: number; // 0.0 to 1.0
}

export const VoiceOrb = ({ mode, audioLevel = 0 }: VoiceOrbProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const audioLevelRef = useRef<number>(audioLevel);

  // Sync audioLevel prop to ref without restarting animation
  useEffect(() => {
    audioLevelRef.current = audioLevel;
  }, [audioLevel]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const baseRadius = 80;

    let time = 0;
    let targetScale = 1;
    let currentScale = 1;

    const drawOrb = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.01;
      
      // Smooth scale transition
      currentScale += (targetScale - currentScale) * 0.1;

      let points = 64;
      let audioScale = 0;
      let colorIntensity = 0;

      if (mode === "listening") {
        // Scale is audio reactive, but waves are constant
        audioScale = audioLevelRef.current * 0.8;
        targetScale = 1 + audioScale;
        // Constant color intensity
        colorIntensity = 0.5;
        points = 64;
      } else if (mode === "speaking") {
        // Scale is audio reactive, but waves are constant
        audioScale = audioLevelRef.current * 0.6;
        targetScale = 1 + audioScale + Math.sin(time * 8) * 0.08;
        colorIntensity = 0.7;
        points = 80;
      } else if (mode === "inactive") {
        // Inactive animation - very subtle, gray
        targetScale = 1;
        colorIntensity = 0.05;
        points = 64;
      } else {
        // Idle animation - perfect static circle
        targetScale = 1;
        colorIntensity = 0.2;
        points = 64;
      }

      // Draw main orb with organic shape
      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        
        let noise = 0;
        if (mode === "listening") {
          // Constant wave animation for organic look
          noise = Math.sin(angle * 4 + time * 4) * 5;
        } else if (mode === "speaking") {
          // Constant wave with more frequency for speaking
          noise = Math.sin(angle * 5 + time * 8) * 5;
        }
        // Idle and inactive have no noise (noise = 0) for perfect circle
        
        const radius = baseRadius * currentScale + noise;
        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();

      // Dynamic color based on mode and intensity
      let baseColor, midColor, endColor;
      
      if (mode === "listening") {
        // Blue dominant colors
        baseColor = {
          r: 34 + colorIntensity * 30,
          g: 180 - colorIntensity * 80,
          b: 255
        };
        midColor = {
          r: 59 + colorIntensity * 50,
          g: 130 - colorIntensity * 30,
          b: 246
        };
        endColor = {
          r: 100 + colorIntensity * 30,
          g: 51 + colorIntensity * 40,
          b: 240
        };
      } else if (mode === "speaking") {
        // Light purple dominant colors
        baseColor = {
          r: 180 + colorIntensity * 50,
          g: 140 - colorIntensity * 40,
          b: 255
        };
        midColor = {
          r: 200 + colorIntensity * 40,
          g: 130 - colorIntensity * 30,
          b: 246
        };
        endColor = {
          r: 220 + colorIntensity * 30,
          g: 160 + colorIntensity * 40,
          b: 250
        };
      } else {
        // Default gradient (idle/inactive)
        baseColor = {
          r: 34 + colorIntensity * 50,
          g: 211 - colorIntensity * 100,
          b: 238 - colorIntensity * 50
        };
        midColor = {
          r: 59 + colorIntensity * 80,
          g: 130 - colorIntensity * 30,
          b: 246 - colorIntensity * 80
        };
        endColor = {
          r: 147 + colorIntensity * 50,
          g: 51 + colorIntensity * 40,
          b: 234 - colorIntensity * 50
        };
      }

      // Main gradient fill - linear with animated angle
      const gradientAngle = time * 0.5;
      const mainGradient = ctx.createLinearGradient(
        centerX + Math.cos(gradientAngle) * baseRadius * currentScale,
        centerY + Math.sin(gradientAngle) * baseRadius * currentScale,
        centerX - Math.cos(gradientAngle) * baseRadius * currentScale,
        centerY - Math.sin(gradientAngle) * baseRadius * currentScale
      );
      mainGradient.addColorStop(0, `rgba(${baseColor.r}, ${baseColor.g}, ${baseColor.b}, 1)`);
      mainGradient.addColorStop(0.5, `rgba(${midColor.r}, ${midColor.g}, ${midColor.b}, 1)`);
      mainGradient.addColorStop(1, `rgba(${endColor.r}, ${endColor.g}, ${endColor.b}, 1)`);

      ctx.fillStyle = mainGradient;
      ctx.fill();

      animationRef.current = requestAnimationFrame(drawOrb);
    };

    drawOrb();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mode]); // Only mode as dependency - audioLevel changes don't restart animation

  return (
    <div className="relative flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
      />
    </div>
  );
};
