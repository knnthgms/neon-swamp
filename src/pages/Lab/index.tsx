import React, { useRef, useEffect, useState, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";
import { Fade } from "react-awesome-reveal";

// ─── Page shell ──────────────────────────────────────────────────────────────

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heading};
  margin-bottom: 0.25rem;
`;

const PageSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 3rem;
  font-size: 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const ExperimentCard = styled.div`
  border: 1px solid rgba(190, 252, 174, 0.12);
  border-radius: 12px;
  overflow: hidden;
`;

const CardLabel = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(190, 252, 174, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExperimentName = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.heading};
  opacity: 0.6;
`;

const TechBadge = styled.span`
  font-size: 0.65rem;
  padding: 2px 8px;
  border-radius: 4px;
  background: rgba(190, 252, 174, 0.1);
  color: ${({ theme }) => theme.colors.heading};
`;

const CardBody = styled.div`
  padding: 2rem;
  min-height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ─── 1. Glitch Text ──────────────────────────────────────────────────────────

const glitch1 = keyframes`
  0%, 100% { clip-path: inset(0 0 95% 0); transform: translate(-4px, 0); }
  20%       { clip-path: inset(30% 0 50% 0); transform: translate(4px, 0); }
  40%       { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0); }
  60%       { clip-path: inset(80% 0 5% 0);  transform: translate(3px, 0); }
  80%       { clip-path: inset(10% 0 70% 0); transform: translate(-3px, 0); }
`;

const glitch2 = keyframes`
  0%, 100% { clip-path: inset(80% 0 0 0); transform: translate(4px, 0); }
  20%       { clip-path: inset(10% 0 60% 0); transform: translate(-4px, 0); }
  40%       { clip-path: inset(50% 0 30% 0); transform: translate(2px, 0); }
  60%       { clip-path: inset(5% 0 80% 0);  transform: translate(-2px, 0); }
  80%       { clip-path: inset(65% 0 15% 0); transform: translate(4px, 0); }
`;

const GlitchWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: default;
  user-select: none;

  &:hover > span::before {
    animation: ${glitch1} 0.4s steps(1) infinite;
  }
  &:hover > span::after {
    animation: ${glitch2} 0.4s steps(1) infinite;
  }
`;

const GlitchText = styled.span`
  font-size: 3rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.heading};
  position: relative;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::before {
    color: #ff605c;
    animation: none;
  }

  &::after {
    color: #4fc6d8;
    animation: none;
  }
`;

const GlitchHint = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0.4;
  margin-top: 0.75rem;
  text-align: center;
`;

function GlitchDemo() {
  return (
    <div style={{ textAlign: "center" }}>
      <GlitchWrapper>
        <GlitchText data-text="GLITCH">GLITCH</GlitchText>
      </GlitchWrapper>
      <GlitchHint>hover to activate</GlitchHint>
    </div>
  );
}

// ─── 2. Infinite Marquee ─────────────────────────────────────────────────────

const scroll = keyframes`
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
`;

const MarqueeOuter = styled.div`
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
`;

const MarqueeInner = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 18s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const MarqueeItem = styled.span`
  padding: 0 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  white-space: nowrap;
  opacity: 0.7;

  &::after {
    content: "·";
    padding-left: 1.5rem;
    opacity: 0.3;
  }
`;

const items = [
  "React", "TypeScript", "Next.js", "React Native", "Styled Components",
  "Tailwind", "Node.js", "GraphQL", "Figma", "Design Systems",
  "A/B Testing", "Analytics", "CleverTap", "Nx Monorepo", "Docker",
];

function MarqueeDemo() {
  const doubled = [...items, ...items];
  return (
    <MarqueeOuter>
      <MarqueeInner>
        {doubled.map((item, i) => (
          <MarqueeItem key={i}>{item}</MarqueeItem>
        ))}
      </MarqueeInner>
    </MarqueeOuter>
  );
}

// ─── 3. 3D Tilt Cards ────────────────────────────────────────────────────────

const TiltGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const TiltCardEl = styled.div<{ transform: string }>`
  aspect-ratio: 1;
  border-radius: 10px;
  border: 1px solid rgba(190, 252, 174, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: transform 0.05s ease-out, box-shadow 0.2s;
  transform: ${({ transform }) => transform};
  transform-style: preserve-3d;
  will-change: transform;

  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    border-color: rgba(190, 252, 174, 0.35);
  }
`;

const CardIcon = styled.span`
  font-size: 1.75rem;
`;

const CardText = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.heading};
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const tiltCards = [
  { icon: "⚡", label: "Speed" },
  { icon: "🎨", label: "Design" },
  { icon: "📊", label: "Data" },
  { icon: "🔐", label: "Security" },
  { icon: "🌐", label: "Infra" },
  { icon: "🤖", label: "AI" },
];

function TiltCard({ icon, label }: { icon: string; label: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("perspective(600px)");

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(600px) rotateY(${x * 22}deg) rotateX(${-y * 22}deg) scale(1.06)`
    );
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTransform("perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)");
  }, []);

  return (
    <TiltCardEl
      ref={cardRef}
      transform={transform}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <CardIcon>{icon}</CardIcon>
      <CardText>{label}</CardText>
    </TiltCardEl>
  );
}

function TiltCardsDemo() {
  return (
    <TiltGrid>
      {tiltCards.map((c) => (
        <TiltCard key={c.label} icon={c.icon} label={c.label} />
      ))}
    </TiltGrid>
  );
}

// ─── 4. Aurora Blobs ─────────────────────────────────────────────────────────

const blob1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(30px, -20px) scale(1.08); }
  66%       { transform: translate(-20px, 15px) scale(0.94); }
`;

const blob2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(-25px, 20px) scale(1.05); }
  66%       { transform: translate(20px, -15px) scale(0.97); }
`;

const blob3 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%       { transform: translate(15px, 25px) scale(0.92); }
  66%       { transform: translate(-30px, -10px) scale(1.1); }
`;

const AuroraContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  background: #0d1a1b;
`;

const Blob = styled.div<{ $anim: ReturnType<typeof keyframes>; color: string; size: number; top: number; left: number; dur: number }>`
  position: absolute;
  top: ${({ top }) => top}%;
  left: ${({ left }) => left}%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ color }) => color};
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.55;
  animation: ${({ $anim }) => css`${$anim} ${({ dur }: any) => dur}s ease-in-out infinite`};
  animation-duration: ${({ dur }) => dur}s;
`;

function AuroraDemo() {
  return (
    <AuroraContainer>
      <Blob $anim={blob1} color="#befcae" size={200} top={-20} left={-10} dur={7} />
      <Blob $anim={blob2} color="#4fc6d8" size={180} top={10} left={40} dur={9} />
      <Blob $anim={blob3} color="#8c52ab" size={160} top={20} left={65} dur={11} />
    </AuroraContainer>
  );
}

// ─── 5. Particle Canvas ──────────────────────────────────────────────────────

const Canvas = styled.canvas`
  display: block;
  width: 100%;
  border-radius: 8px;
  background: #0d1a1b;
`;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
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

    const N = 60;
    const COLOR = "rgba(190, 252, 174,";

    particlesRef.current = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = W / rect.width;
      const scaleY = H / rect.height;
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    };
    canvas.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const ps = particlesRef.current;
      const { x: mx, y: my } = mouseRef.current;

      for (const p of ps) {
        // Gentle mouse repulsion
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
        ctx.fillStyle = `${COLOR}${p.alpha})`;
        ctx.fill();
      }

      // Draw lines between close particles
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = `${COLOR}${(1 - d / 90) * 0.2})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      canvas.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <Canvas ref={canvasRef} />;
}

// ─── Page ────────────────────────────────────────────────────────────────────

const experiments = [
  {
    name: "Glitch Text",
    tech: "CSS keyframes · clip-path",
    component: <GlitchDemo />,
  },
  {
    name: "Infinite Marquee",
    tech: "CSS animation · overflow hidden",
    component: <MarqueeDemo />,
  },
  {
    name: "3D Tilt Cards",
    tech: "React mouse events · CSS perspective",
    component: <TiltCardsDemo />,
  },
  {
    name: "Aurora Blobs",
    tech: "CSS keyframes · filter blur",
    component: <AuroraDemo />,
  },
  {
    name: "Particle Web",
    tech: "Canvas 2D · requestAnimationFrame",
    component: <ParticleCanvas />,
  },
];

function Lab() {
  return (
    <Fade triggerOnce cascade damping={0.1}>
      <PageTitle>Lab</PageTitle>
      <PageSubtitle>
        Frontend experiments — animations, layouts, and effects. All built with
        vanilla CSS or lightweight React hooks, no external animation libraries.
      </PageSubtitle>
      <Grid>
        {experiments.map((exp) => (
          <ExperimentCard key={exp.name}>
            <CardLabel>
              <ExperimentName>{exp.name}</ExperimentName>
              <TechBadge>{exp.tech}</TechBadge>
            </CardLabel>
            <CardBody>{exp.component}</CardBody>
          </ExperimentCard>
        ))}
      </Grid>
    </Fade>
  );
}

export default Lab;
