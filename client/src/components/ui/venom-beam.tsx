"use client";

import { useRef, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

interface VenomBeamProps {
  children?: ReactNode;
  className?: string;
}

export default function VenomBeam({ children, className }: VenomBeamProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const nodes = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  class Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    originalX: number;
    originalY: number;
    size: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.originalX = x;
      this.originalY = y;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 2;
    }

    update(mouseX: number, mouseY: number) {
      // Attraction to mouse
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        const force = (150 - distance) / 150 * 0.02;
        this.vx += (dx / distance) * force;
        this.vy += (dy / distance) * force;
      }

      // Spring back to original position
      const springX = (this.originalX - this.x) * 0.01;
      const springY = (this.originalY - this.y) * 0.01;
      
      this.vx += springX;
      this.vy += springY;

      // Apply velocity with friction
      this.x += this.vx;
      this.y += this.vy;
      this.vx *= 0.95;
      this.vy *= 0.95;
    }

    draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
      const nodeColor = isDark ? "#0070F3" : "#0070F3"; // Brand blue
      const glowColor = isDark ? "rgba(0, 112, 243, 0.6)" : "rgba(0, 112, 243, 0.4)";
      
      // Draw glow
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 10;
      ctx.fillStyle = nodeColor;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  const getActualTheme = () => {
    if (theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return theme;
  };

  const getColors = () => {
    const actualTheme = getActualTheme();
    const isDark = actualTheme === "dark";
    return {
      nodeColor: "#0070F3", // Brand blue
      lineColor: isDark ? "rgba(0, 112, 243, 0.3)" : "rgba(0, 112, 243, 0.2)",
      backgroundColor: isDark 
        ? "radial-gradient(circle at center, #0a0a0a 0%, #000000 100%)" 
        : "radial-gradient(circle at center, #fafafa 0%, #f5f5f5 100%)"
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Recreate nodes for new canvas size
      nodes.current = [];
      const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.current.push(
          new Node(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight
          )
        );
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Initialize
    resizeCanvas();
    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      const colors = getColors();
      const actualTheme = getActualTheme();
      const isDark = actualTheme === "dark";
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update nodes
      nodes.current.forEach(node => {
        node.update(mouseRef.current.x, mouseRef.current.y);
      });

      // Draw connections
      ctx.strokeStyle = colors.lineColor;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.current.length; i++) {
        for (let j = i + 1; j < nodes.current.length; j++) {
          const nodeA = nodes.current[i];
          const nodeB = nodes.current[j];
          const distance = Math.sqrt(
            Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2)
          );
          
          if (distance < 120) {
            const opacity = 1 - distance / 120;
            ctx.globalAlpha = opacity * 0.6;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw nodes
      ctx.globalAlpha = 1;
      nodes.current.forEach(node => {
        node.draw(ctx, isDark);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [theme]);

  const colors = getColors();
  
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div 
        className="absolute inset-0"
        style={{ background: colors.backgroundColor }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}