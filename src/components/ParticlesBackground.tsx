import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle constructor helper
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      growSpeed: number;
      life: number;
      maxLife: number;
    }

    const particles: Particle[] = [];
    const maxParticles = 65;

    function createParticle(isInitial = false): Particle {
      const size = Math.random() * 2.5 + 0.5;
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : height + 10,
        size,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -(Math.random() * 0.8 + 0.3),
        opacity: Math.random() * 0.5 + 0.1,
        growSpeed: (Math.random() - 0.5) * 0.01,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      };
    }

    // Populate initially
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render custom atmospheric background layers to avoid visual flashes
      ctx.fillStyle = "rgba(3, 3, 5, 0.15)";
      ctx.fillRect(0, 0, width, height);

      // Render subtle horizontal scanner or laser grid beams
      ctx.strokeStyle = "rgba(0, 243, 255, 0.012)";
      ctx.lineWidth = 1;
      for (let i = 0; i < height; i += 80) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
      }

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life++;
        p.x += p.speedX;
        p.y += p.speedY;
        
        // fade in/out
        let currentOpacity = p.opacity;
        if (p.life < 50) {
          currentOpacity = (p.life / 50) * p.opacity;
        } else if (p.life > p.maxLife - 50) {
          currentOpacity = ((p.maxLife - p.life) / 50) * p.opacity;
        }

        // Draw particle with glowing aura
        ctx.beginPath();
        const glowRadius = p.size * 3;
        const gradient = ctx.createRadialGradient(
          p.x, p.y, p.size * 0.2,
          p.x, p.y, glowRadius
        );
        gradient.addColorStop(0, `rgba(0, 243, 255, ${currentOpacity})`);
        gradient.addColorStop(0.3, `rgba(0, 136, 204, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Respawn if dead
        if (p.life >= p.maxLife || p.y < -20 || p.x < -20 || p.x > width + 20) {
          particles[i] = createParticle(false);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      id="particles-bg-canvas"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen"
    />
  );
}
