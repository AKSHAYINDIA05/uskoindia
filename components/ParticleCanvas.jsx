'use client';

import { useEffect, useRef } from 'react';
import { dojoAudio } from '../lib/audio';

export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let particles = [];
    let slashes = [];
    let shockwaves = [];
    const mouse = { x: -1000, y: -1000, prevX: -1000, prevY: -1000, speed: 0 };
    let running = true;
    let animId;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize, { passive: true });

    const createEmber = (randomY = false) => {
      const isChampagne = Math.random() > 0.35;
      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : height + 15,
        size: Math.random() * 1.8 + 0.6,
        speedY: -(Math.random() * 0.7 + 0.25),
        speedX: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.45 + 0.15,
        fadeRate: Math.random() * 0.0018 + 0.0006,
        color: isChampagne ? '212, 181, 119' : '192, 57, 43',
        wobbleSpeed: Math.random() * 0.015 + 0.006,
        wobbleOffset: Math.random() * Math.PI * 2,
      };
    };

    const count = window.innerWidth < 768 ? 20 : 40;
    for (let i = 0; i < count; i++) {
      particles.push(createEmber(true));
    }

    const handlePointerMove = (e) => {
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      mouse.speed = Math.hypot(dx, dy);

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (mouse.speed > 22 && slashes.length < 4) {
        slashes.push({
          x1: mouse.prevX,
          y1: mouse.prevY,
          x2: mouse.x,
          y2: mouse.y,
          life: 0.7,
          width: Math.min(mouse.speed * 0.08, 2.5),
        });
      }
    };

    const handlePointerDown = (e) => {
      if (shockwaves.length < 3) {
        shockwaves.push({
          x: e.clientX,
          y: e.clientY,
          radius: 4,
          maxRadius: Math.min(window.innerWidth * 0.16, 95),
          alpha: 0.45,
          speed: 4,
        });
      }
      dojoAudio.playStrike();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });

    const handleVisibility = () => {
      running = !document.hidden;
      if (running) loop();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const update = () => {
      const maxCount = window.innerWidth < 768 ? 20 : 40;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.wobbleOffset) * 0.25;
        p.wobbleOffset += p.wobbleSpeed;
        p.alpha -= p.fadeRate;

        if (p.alpha <= 0 || p.y < -15 || p.x < -15 || p.x > width + 15) {
          particles.splice(i, 1);
          if (particles.length < maxCount) {
            particles.push(createEmber(false));
          }
        }
      }

      for (let i = slashes.length - 1; i >= 0; i--) {
        const s = slashes[i];
        s.life -= 0.06;
        if (s.life <= 0) slashes.splice(i, 1);
      }

      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha = 0.45 * (1 - sw.radius / sw.maxRadius);
        if (sw.radius >= sw.maxRadius || sw.alpha <= 0) {
          shockwaves.splice(i, 1);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Dual-concentric alpha path drawing (90% lighter than shadowBlur)
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 0.25})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < slashes.length; i++) {
        const s = slashes[i];
        ctx.beginPath();
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x2, s.y2);
        ctx.strokeStyle = `rgba(212, 181, 119, ${s.life * 0.4})`;
        ctx.lineWidth = s.width * 2;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(s.x1, s.y1);
        ctx.lineTo(s.x2, s.y2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${s.life * 0.7})`;
        ctx.lineWidth = s.width;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      for (let i = 0; i < shockwaves.length; i++) {
        const sw = shockwaves[i];
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(192, 57, 43, ${sw.alpha * 0.3})`;
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(212, 181, 119, ${sw.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const loop = () => {
      if (!running) return;
      update();
      draw();
      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="combat-canvas" ref={canvasRef} aria-hidden="true" />;
}
