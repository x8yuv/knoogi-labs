"use client";

import { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface VenomBeamProps {
  children?: ReactNode;
  className?: string;
}

export default function VenomBeam({ children, className }: VenomBeamProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particles = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    color: string;
    trail: { x: number; y: number; life: number }[];

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.life = 1;
      this.maxLife = Math.random() * 100 + 50;
      this.size = Math.random() * 3 + 1;
      this.color = this.getRandomColor();
      this.trail = [];
    }

    getRandomColor() {
      const colors = [
        "rgba(0, 255, 150, 0.8)",
        "rgba(50, 255, 100, 0.6)",
        "rgba(100, 255, 50, 0.4)",
        "rgba(150, 255, 0, 0.5)",
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    update(mouseX: number, mouseY: number) {
      // Add current position to trail
      this.trail.push({ x: this.x, y: this.y, life: 1 });
      if (this.trail.length > 10) {
        this.trail.shift();
      }

      // Update trail life
      this.trail.forEach((point) => {
        point.life -= 0.1;
      });

      // Attraction to mouse
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150;
        this.vx += (dx / distance) * force * 0.3;
        this.vy += (dy / distance) * force * 0.3;
      }

      // Apply velocity
      this.x += this.vx;
      this.y += this.vy;

      // Add some friction
      this.vx *= 0.98;
      this.vy *= 0.98;

      // Update life
      this.life -= 1 / this.maxLife;

      // Wrap around edges
      if (this.x < 0) this.x = window.innerWidth;
      if (this.x > window.innerWidth) this.x = 0;
      if (this.y < 0) this.y = window.innerHeight;
      if (this.y > window.innerHeight) this.y = 0;
    }

    draw(ctx: CanvasRenderingContext2D) {
      // Draw trail
      this.trail.forEach((point, index) => {
        if (point.life > 0) {
          ctx.globalAlpha = point.life * this.life * 0.5;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, this.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Draw particle
      ctx.globalAlpha = this.life;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Add glow effect
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    isDead() {
      return this.life <= 0;
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Initialize
    resizeCanvas();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Create initial particles
    for (let i = 0; i < 50; i++) {
      particles.current.push(
        new Particle(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        )
      );
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter((particle) => {
        particle.update(mouseRef.current.x, mouseRef.current.y);
        particle.draw(ctx);
        return !particle.isDead();
      });

      // Add new particles occasionally
      if (Math.random() < 0.3 && particles.current.length < 100) {
        particles.current.push(
          new Particle(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
          )
        );
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)" }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}