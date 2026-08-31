import React, { useEffect, useRef } from 'react';

export default function AudioWaveVisualizer({ isPlaying = true, height = 180, className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let phase = 0;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : 600;
      canvas.height = height;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle nodes on the audio mesh
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }, (_, i) => ({
      x: (i / particleCount) * (canvas.width || 600),
      speed: 0.4 + Math.random() * 0.6,
      size: 1.5 + Math.random() * 2,
      offset: Math.random() * Math.PI * 2
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;
      const centerY = h / 2;

      // Draw subtle background glowing grid/mesh
      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.08)';
      ctx.lineWidth = 1;
      for (let y = 20; y < h; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
      ctx.restore();

      // Render 3 overlapping harmonic gold waveform layers
      const waves = [
        { amp: isPlaying ? 38 : 10, freq: 0.008, speed: 0.035, color: 'rgba(212, 175, 55, 0.75)', width: 2.5, glow: 18 },
        { amp: isPlaying ? 24 : 6, freq: 0.014, speed: -0.025, color: 'rgba(245, 215, 127, 0.9)', width: 2, glow: 12 },
        { amp: isPlaying ? 16 : 4, freq: 0.022, speed: 0.045, color: 'rgba(255, 240, 202, 0.5)', width: 1.5, glow: 8 },
        { amp: isPlaying ? 45 : 12, freq: 0.005, speed: 0.02, color: 'rgba(184, 134, 11, 0.35)', width: 3, glow: 22 }
      ];

      waves.forEach((wave) => {
        ctx.save();
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = wave.glow;
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = wave.width;
        ctx.beginPath();

        for (let x = 0; x <= w; x += 3) {
          // Add center emphasis envelope (stronger in middle, tapering at sides)
          const envelope = Math.sin((x / w) * Math.PI);
          const y = centerY + Math.sin(x * wave.freq + phase * (wave.speed * 20)) * wave.amp * envelope * (1 + 0.2 * Math.sin(phase * 2 + x * 0.01));
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
        ctx.restore();
      });

      // Render floating audio node particles
      particles.forEach((p, index) => {
        const envelope = Math.sin((p.x / w) * Math.PI);
        const y = centerY + Math.sin(p.x * 0.01 + phase + p.offset) * 32 * envelope;
        
        ctx.save();
        ctx.fillStyle = index % 2 === 0 ? '#F5D77F' : '#D4AF37';
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(p.x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x = (p.x + p.speed) % w;
      });

      // Equalizer bars under the wave (Center decorative)
      const barCount = 36;
      const barWidth = 3;
      const barSpacing = 7;
      const startX = (w - (barCount * (barWidth + barSpacing))) / 2;

      for (let i = 0; i < barCount; i++) {
        const barX = startX + i * (barWidth + barSpacing);
        const distFromCenter = Math.abs(i - barCount / 2) / (barCount / 2);
        const barHeight = isPlaying 
          ? (Math.sin(phase * 4 + i * 0.5) * 0.5 + 0.5) * 38 * (1 - distFromCenter * 0.6) + 4
          : 4;

        ctx.save();
        const grad = ctx.createLinearGradient(barX, centerY - barHeight, barX, centerY + barHeight);
        grad.addColorStop(0, 'rgba(245, 215, 127, 0.85)');
        grad.addColorStop(0.5, 'rgba(212, 175, 55, 0.4)');
        grad.addColorStop(1, 'rgba(184, 134, 11, 0.1)');
        
        ctx.fillStyle = grad;
        ctx.fillRect(barX, centerY - barHeight / 2, barWidth, barHeight);
        ctx.restore();
      }

      phase += 0.02;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, height]);

  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-[#08080c]/60 border border-amber-500/20 backdrop-blur-md ${className}`}>
      <canvas ref={canvasRef} className="w-full block" />
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient" />
    </div>
  );
}

