"use client";

import React, { useEffect, useRef } from "react";
import "./starBackground.css";

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Star properties
    const stars: {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: number;
      alpha: number;
      direction: number;
    }[] = [];

    // Create stars
    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 5000);

      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5;
        const color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
        const velocity = Math.random() * 0.05;
        const alpha = Math.random();
        const direction = Math.random() > 0.5 ? 1 : -1;

        stars.push({ x, y, radius, color, velocity, alpha, direction });
      }
    };

    createStars();

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update stars
      stars.forEach((star) => {
        // Update star alpha for twinkling effect
        star.alpha += star.velocity * star.direction;

        if (star.alpha <= 0.2 || star.alpha >= 1) {
          star.direction *= -1;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // Occasional shooting star
        if (Math.random() < 0.0001) {
          drawShootingStar(ctx, star.x, star.y);
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Draw shooting star
    const drawShootingStar = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number
    ) => {
      const length = Math.random() * 100 + 50;
      const angle = Math.random() * Math.PI * 2;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      const gradient = ctx.createLinearGradient(x, y, endX, endY);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="star-background" />;
};

export default StarBackground;
