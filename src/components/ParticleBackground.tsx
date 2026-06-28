import { useEffect, useRef, FC } from 'react';

interface Dot {
  x: number;
  y: number;
  origX: number;
  origY: number;
  vx: number;
  vy: number;
  size: number;
}

/**
 * ParticleBackground
 * Renders a subtle dot-grid on a canvas.
 * Dots scatter away from the cursor and spring back to their home positions.
 */
const ParticleBackground: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SPACING     = 26;   // grid gap (px)
    const BASE_SIZE   = 1.6;  // resting dot radius
    const REPEL_R     = 110;  // mouse influence radius
    const REPEL_FORCE = 6;    // push strength
    const SPRING      = 0.06; // return-to-home spring stiffness
    const DAMPING     = 0.72; // velocity damping (lower = snappier return)

    let dots: Dot[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let rafId: number;

    // ── Build dot grid ───────────────────────────────────────────────────────
    const buildGrid = () => {
      dots = [];
      const cols = Math.ceil(canvas.width  / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          dots.push({
            x, y,
            origX: x,
            origY: y,
            vx: 0,
            vy: 0,
            size: BASE_SIZE + Math.random() * 0.4,
          });
        }
      }
    };

    // ── Resize handler ────────────────────────────────────────────────────────
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      buildGrid();
    };

    // ── Main animation loop ───────────────────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of dots) {
        const dx   = mouseX - d.x;
        const dy   = mouseY - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Repel from cursor
        if (dist < REPEL_R && dist > 0) {
          const force = ((REPEL_R - dist) / REPEL_R) ** 1.5 * REPEL_FORCE;
          d.vx -= (dx / dist) * force;
          d.vy -= (dy / dist) * force;
        }

        // Spring back home
        d.vx += (d.origX - d.x) * SPRING;
        d.vy += (d.origY - d.y) * SPRING;

        // Damping
        d.vx *= DAMPING;
        d.vy *= DAMPING;

        d.x += d.vx;
        d.y += d.vy;

        // How displaced is this dot? (0 = at home, 1 = max displaced)
        const displacement = Math.min(
          Math.sqrt((d.x - d.origX) ** 2 + (d.y - d.origY) ** 2) / 20,
          1
        );

        // Base colour: light slate. Near cursor: shifts to indigo/violet
        const alpha = 0.35 + displacement * 0.45;
        const r = Math.round(203 - displacement * 104); // 203→99  (slate→indigo)
        const g = Math.round(213 - displacement * 111); // 213→102
        const b = Math.round(225 - displacement * 84);  // 225→141
        const drawSize = d.size + displacement * 1.8;

        ctx.beginPath();
        ctx.arc(d.x, d.y, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    // ── Mouse tracking via parent section ────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    // Attach listeners to the parent section element
    const section = canvas.parentElement;
    section?.addEventListener('mousemove', onMouseMove);
    section?.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);

    resize();
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      section?.removeEventListener('mousemove', onMouseMove);
      section?.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default ParticleBackground;
