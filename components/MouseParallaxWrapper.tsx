'use client';
import { useEffect, useRef } from 'react';

export default function MouseElasticTrailWrapper({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>([]);

  const TRAIL_LENGTH = 20;
  const SPRING = 0.2;   // how fast it moves toward the target
  const DAMPING = 0.6;  // bounce damping

  // Function to resize canvas properly
  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    
    resizeCanvas(); // initial sizing

    // Initialize trail points at center
    trailRef.current = [];
    for (let i = 0; i < TRAIL_LENGTH; i++) {
      trailRef.current.push({ x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0 });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update first point directly toward cursor
      const first = trailRef.current[0];
      const dx = mouseRef.current.x - first.x;
      const dy = mouseRef.current.y - first.y;

      first.vx += dx * SPRING;
      first.vy += dy * SPRING;

      first.vx *= DAMPING;
      first.vy *= DAMPING;

      first.x += first.vx;
      first.y += first.vy;

      // Update the rest of the points
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const prev = trailRef.current[i - 1];
        const point = trailRef.current[i];

        const dx = prev.x - point.x;
        const dy = prev.y - point.y;

        point.vx += dx * SPRING;
        point.vy += dy * SPRING;

        point.vx *= DAMPING;
        point.vy *= DAMPING;

        point.x += point.vx;
        point.y += point.vy;
      }

      // Draw line trail
      ctx.beginPath();
      ctx.moveTo(trailRef.current[0].x, trailRef.current[0].y);
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        ctx.lineTo(trailRef.current[i].x, trailRef.current[i].y);
      }
      ctx.strokeStyle = 'rgba(128,0,128,0.8)';
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed top-0 left-0 z-50"
        style={{ width: '100%', height: '100%' }}
      />
      {children}
    </div>
  );
}
