'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktops)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let posX = -100;
    let posY = -100;
    let isHovering = false;
    let animationFrameId;

    const handlePointerMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, select, textarea, [data-interactive], .belt-node')) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    const render = () => {
      posX += (mouseX - posX) * 0.18;
      posY += (mouseY - posY) * 0.18;
      cursor.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%) scale(${isHovering ? 1.6 : 1})`;
      cursor.style.borderColor = isHovering ? 'rgba(192, 57, 43, 0.9)' : 'rgba(212, 181, 119, 0.6)';
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: '1px solid rgba(212, 181, 119, 0.6)',
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'border-color 0.2s ease, width 0.2s ease, height 0.2s ease',
        willChange: 'transform',
      }}
    />
  );
}
