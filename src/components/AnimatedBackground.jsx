import React, { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create golden network nodes
    const nodeCount = Math.min(Math.floor(window.innerWidth / 30), 45);
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.35 + 0.15,
      pulse: Math.random() * Math.PI * 2
    }));

    // Mouse position for subtle interaction
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const maxDistance = 135;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(212, 175, 55, ' + lineAlpha + ')';
            ctx.lineWidth = 0.75;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce on boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse gentle push
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 120 && mDist > 0) {
          const force = (120 - mDist) / 120;
          node.x += (mdx / mDist) * force * 1.2;
          node.y += (mdy / mDist) * force * 1.2;
        }

        // Pulse alpha
        node.pulse += 0.02;
        const currentAlpha = node.alpha + Math.sin(node.pulse) * 0.12;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(245, 215, 127, ' + Math.max(0.1, currentAlpha) + ')';
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = 6;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08080C]">
      {/* 1. Looping Video Background Animation */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-28 filter brightness-90 contrast-120"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        <source src="/bu_logoyu_animasyonlu_yap.mp4" type="video/mp4" />
      </video>

      {/* 2. Ambient Contrast Vignette & Dark Overlay (Guarantees all text on all pages is 100% readable) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#08080C]/85 via-[#08080C]/65 to-[#08080C]/90 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,_transparent_0%,_rgba(8,8,12,0.85)_80%)]" />

      {/* 3. Soft Ambient Glowing Auroras at the edges */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/12 via-yellow-600/5 to-transparent rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '9s' }} />
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-gradient-to-bl from-amber-600/10 via-amber-400/5 to-transparent rounded-full blur-[160px] animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute -bottom-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-amber-700/5 to-transparent rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '15s' }} />

      {/* 4. Elegant Interactive Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-45" />
    </div>
  );
}
