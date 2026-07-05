"use client";

import { useRef, useEffect, useState, useCallback } from "react";

// ─── Experiment frame ─────────────────────────────────────────────────────────

function ExperimentFrame({
  name,
  tech,
  children,
}: {
  name: string;
  tech: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-[rgba(45,212,191,0.1)] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(45,212,191,0.06)]">
        <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[#94a3b8] opacity-60">
          {name}
        </span>
        <span className="text-[0.65rem] px-2 py-0.5 rounded bg-[rgba(45,212,191,0.08)] text-[#94a3b8]">
          {tech}
        </span>
      </div>
      <div className="p-8 min-h-[180px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

// ─── Experiment 1: 3D Tilt Cards ──────────────────────────────────────────────

const TILT_CARDS = [
  { icon: "⚡", label: "Speed" },
  { icon: "🎨", label: "Design" },
  { icon: "📊", label: "Data" },
  { icon: "🔐", label: "Security" },
  { icon: "🌐", label: "Infra" },
  { icon: "🤖", label: "AI" },
];

function TiltCard({ icon, label }: { icon: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(600px)");

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(600px) rotateY(${x * 22}deg) rotateX(${-y * 22}deg) scale(1.06)`);
  }, []);

  const onMouseLeave = useCallback(() => {
    setTransform("perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)");
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="aspect-square rounded-xl border border-[rgba(45,212,191,0.1)] flex flex-col items-center justify-center gap-2 cursor-pointer hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-[rgba(45,212,191,0.25)]"
      style={{
        transform,
        transformStyle: "preserve-3d",
        willChange: "transform",
        transition: "box-shadow 0.2s, border-color 0.2s",
      }}
    >
      <span className="text-3xl">{icon}</span>
      <span className="text-[0.7rem] font-semibold text-[#94a3b8] opacity-70 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

// ─── Experiment 2: Particle Web ───────────────────────────────────────────────

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; alpha: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 700;
    const H = 200;
    canvas.width = W;
    canvas.height = H;

    particlesRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) * (W / rect.width),
        y: (e.clientY - rect.top) * (H / rect.height),
      };
    };
    canvas.addEventListener("mousemove", onMouseMove);

    const drawFrame = () => {
      ctx.clearRect(0, 0, W, H);
      const ps = particlesRef.current;
      const { x: mx, y: my } = mouseRef.current;

      for (const p of ps) {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 80) {
          const force = (80 - dist) / 80;
          p.vx += (dx / dist) * force * 0.3;
          p.vy += (dy / dist) * force * 0.3;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45,212,191,${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `rgba(45,212,191,${(1 - d / 90) * 0.2})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    return () => {
      canvas.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="block w-full rounded-lg bg-[#0d1b36]" />;
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function LabClient() {
  return (
    <div className="flex flex-col gap-8">
      <ExperimentFrame name="3D Tilt Cards" tech="React mouse events · CSS perspective">
        <div className="grid grid-cols-3 gap-4 w-full">
          {TILT_CARDS.map((card) => (
            <TiltCard key={card.label} {...card} />
          ))}
        </div>
      </ExperimentFrame>

      <ExperimentFrame name="Particle Web" tech="Canvas 2D · requestAnimationFrame">
        <ParticleCanvas />
      </ExperimentFrame>
    </div>
  );
}
