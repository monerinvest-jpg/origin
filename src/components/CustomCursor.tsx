import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const posRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let lastTrailTime = 0;
    const TRAIL_INTERVAL = 30; // ms between trail particles

    const moveCursor = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };

      // Update cursor position
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Create trail particle
      const now = Date.now();
      if (now - lastTrailTime > TRAIL_INTERVAL) {
        lastTrailTime = now;
        spawnTrail(e.clientX, e.clientY);
      }

      // Check hovered element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isClickable =
        el?.closest('a, button, [role="button"], input, textarea, select, label, .btn-cyber') !== null;

      if (isClickable) {
        cursor.classList.add('hovering');
      } else {
        cursor.classList.remove('hovering');
      }
    };

    const spawnTrail = (x: number, y: number) => {
      const trail = document.createElement('div');
      trail.classList.add('cursor-trail');

      // Randomize: weld spark colors
      const colors = ['#00FFFF', '#FFD700', '#FF00FF', '#ffffff'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 4 + 2;
      const offsetX = (Math.random() - 0.5) * 8;
      const offsetY = (Math.random() - 0.5) * 8;

      trail.style.cssText = `
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
      `;

      document.body.appendChild(trail);
      trailsRef.current.push(trail);

      setTimeout(() => {
        trail.remove();
        trailsRef.current = trailsRef.current.filter(t => t !== trail);
      }, 600);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div id="cursor" ref={cursorRef}>
      <div id="cursor-crosshair" />
    </div>
  );
}
