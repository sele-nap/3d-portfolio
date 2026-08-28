import { catppuccin } from '@/tokens/theme';

export function drawOuterRing(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  color: string,
  outerR: number,
  innerR?: number,
) {
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 28;
  ctx.strokeStyle = `${color}aa`;
  ctx.lineWidth = 2.2;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  if (innerR !== undefined) {
    ctx.strokeStyle = `${color}66`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
    ctx.stroke();
  }
}

export function drawConstellationDots(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  color: string,
  radius: number,
  stepDivisor: number,
  baseAlpha: number,
  alphaVariance: number,
  sinFreq: number,
  dotRadius: number,
) {
  for (let a = 0; a < Math.PI * 2; a += Math.PI / stepDivisor) {
    const dx = cx + Math.cos(a) * radius;
    const dy = cy + Math.sin(a) * radius;
    ctx.fillStyle = color;
    ctx.globalAlpha = baseAlpha + Math.sin(a * sinFreq) * alphaVariance;
    ctx.beginPath();
    ctx.arc(dx, dy, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

export function drawLeafShape(ctx: CanvasRenderingContext2D, size: number) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(
    -size * 0.38,
    -size * 0.28,
    -size * 0.32,
    -size * 0.78,
    0,
    -size,
  );
  ctx.bezierCurveTo(size * 0.32, -size * 0.78, size * 0.38, -size * 0.28, 0, 0);
  ctx.fill();
}

export function drawHVine(
  ctx: CanvasRenderingContext2D,
  x1: number,
  x2: number,
  y: number,
  color: string,
  inward: number,
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.82;
  ctx.beginPath();
  ctx.moveTo(x1, y);
  const steps = Math.ceil((x2 - x1) / 10);
  for (let i = 0; i <= steps; i++) {
    const x = x1 + ((x2 - x1) * i) / steps;
    ctx.lineTo(x, y + Math.sin(i * 0.85) * 2.8);
  }
  ctx.stroke();
  for (let x = x1 + 7; x < x2 - 7; x += 20) {
    const wave = Math.sin((x - x1) * 0.047) * 2.8;
    const side = Math.floor((x - x1) / 20) % 2 === 0 ? inward : -inward;
    ctx.save();
    ctx.translate(x, y + wave);
    ctx.rotate(side * 0.7);
    drawLeafShape(ctx, 11);
    ctx.restore();
    if (Math.floor((x - x1) / 20) % 3 === 0) {
      ctx.beginPath();
      ctx.arc(x + side * 7, y + wave - 3, 2.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

export function drawVVine(
  ctx: CanvasRenderingContext2D,
  x: number,
  y1: number,
  y2: number,
  color: string,
  inward: number,
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.82;
  ctx.beginPath();
  ctx.moveTo(x, y1);
  const steps = Math.ceil((y2 - y1) / 10);
  for (let i = 0; i <= steps; i++) {
    const y = y1 + ((y2 - y1) * i) / steps;
    ctx.lineTo(x + Math.sin(i * 0.85) * 2.8, y);
  }
  ctx.stroke();
  for (let y = y1 + 7; y < y2 - 7; y += 20) {
    const wave = Math.sin((y - y1) * 0.047) * 2.8;
    const side = Math.floor((y - y1) / 20) % 2 === 0 ? inward : -inward;
    ctx.save();
    ctx.translate(x + wave, y);
    ctx.rotate(side * 0.7 + Math.PI / 2);
    drawLeafShape(ctx, 11);
    ctx.restore();
    if (Math.floor((y - y1) / 20) % 3 === 0) {
      ctx.beginPath();
      ctx.arc(x + wave - 3, y + side * 7, 2.8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

export function drawVineBorder(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  margin: number,
  color: string,
) {
  drawHVine(ctx, margin, W - margin, margin, color, 1);
  drawHVine(ctx, margin, W - margin, H - margin, color, -1);
  drawVVine(ctx, margin, margin, H - margin, color, 1);
  drawVVine(ctx, W - margin, margin, H - margin, color, -1);
}

export function drawMushroom(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  sz: number,
  capColor: string,
) {
  ctx.save();
  ctx.fillStyle = catppuccin.rosewater;
  ctx.globalAlpha = 0.85;
  ctx.beginPath();
  ctx.moveTo(x - sz * 0.22, y);
  ctx.lineTo(x - sz * 0.18, y - sz * 0.42);
  ctx.lineTo(x + sz * 0.18, y - sz * 0.42);
  ctx.lineTo(x + sz * 0.22, y);
  ctx.fill();
  ctx.fillStyle = capColor;
  ctx.globalAlpha = 0.95;
  ctx.beginPath();
  ctx.arc(x, y - sz * 0.42, sz * 0.48, Math.PI, 0);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,0.45)';
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(x - sz * 0.14, y - sz * 0.54, sz * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x + sz * 0.13, y - sz * 0.49, sz * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(x, y - sz * 0.66, sz * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function drawCrystalCluster(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  sz = 1,
) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.9;
  ctx.globalAlpha = 0.88;
  const shards = [
    { dx: 0, h: 34 * sz, w: 8 * sz, a: 0 },
    { dx: -11 * sz, h: 25 * sz, w: 6 * sz, a: -0.22 },
    { dx: 11 * sz, h: 28 * sz, w: 6 * sz, a: 0.18 },
    { dx: -19 * sz, h: 18 * sz, w: 5 * sz, a: -0.38 },
    { dx: 20 * sz, h: 20 * sz, w: 5 * sz, a: 0.32 },
    { dx: -6 * sz, h: 15 * sz, w: 4 * sz, a: -0.1 },
  ];
  shards.forEach((s) => {
    ctx.save();
    ctx.translate(x + s.dx, y);
    ctx.rotate(s.a);
    ctx.beginPath();
    ctx.moveTo(0, -s.h);
    ctx.lineTo(-s.w, 0);
    ctx.lineTo(0, s.h * 0.18);
    ctx.lineTo(s.w, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  });
  ctx.fillStyle = 'rgba(255,255,255,0.3)';
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.arc(x - 3 * sz, y - 28 * sz, 3 * sz, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function drawLeafArc(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number,
  color: string,
  count = 6,
  leafSize = 11,
) {
  ctx.save();
  ctx.fillStyle = color;
  for (let i = 0; i < count; i++) {
    const t = count === 1 ? 0.5 : i / (count - 1);
    const angle = startAngle + t * (endAngle - startAngle);
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    const sz = leafSize * (0.75 + (i % 2) * 0.25);
    ctx.save();
    ctx.globalAlpha = 0.52 + Math.sin(i * 1.8) * 0.15;
    ctx.translate(x, y);
    ctx.rotate(angle + Math.PI / 2 + (i % 2 === 0 ? 0.45 : -0.45));
    drawLeafShape(ctx, sz);
    ctx.restore();
    if (i % 3 === 1) {
      const bx = cx + Math.cos(angle) * (radius + 4);
      const by = cy + Math.sin(angle) * (radius + 4);
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.arc(bx, by, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }
  ctx.restore();
}

export function drawVial(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  sz = 1,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2 * sz;
  ctx.globalAlpha = 0.85;
  ctx.beginPath();
  ctx.moveTo(-8 * sz, -12 * sz);
  ctx.bezierCurveTo(-10 * sz, -8 * sz, -10 * sz, 16 * sz, -6 * sz, 22 * sz);
  ctx.bezierCurveTo(-3 * sz, 26 * sz, 3 * sz, 26 * sz, 6 * sz, 22 * sz);
  ctx.bezierCurveTo(10 * sz, 16 * sz, 10 * sz, -8 * sz, 8 * sz, -12 * sz);
  ctx.closePath();
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.2;
  ctx.beginPath();
  ctx.moveTo(-9 * sz, 4 * sz);
  ctx.bezierCurveTo(-10 * sz, 16 * sz, -6 * sz, 22 * sz, -6 * sz, 22 * sz);
  ctx.bezierCurveTo(-3 * sz, 26 * sz, 3 * sz, 26 * sz, 6 * sz, 22 * sz);
  ctx.bezierCurveTo(6 * sz, 22 * sz, 10 * sz, 16 * sz, 9 * sz, 4 * sz);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 0.85;
  ctx.beginPath();
  ctx.moveTo(-5 * sz, -12 * sz);
  ctx.lineTo(-5 * sz, -22 * sz);
  ctx.lineTo(5 * sz, -22 * sz);
  ctx.lineTo(5 * sz, -12 * sz);
  ctx.stroke();
  ctx.fillStyle = catppuccin.rosewater;
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.moveTo(-5 * sz, -22 * sz);
  ctx.lineTo(-4 * sz, -28 * sz);
  ctx.lineTo(4 * sz, -28 * sz);
  ctx.lineTo(5 * sz, -22 * sz);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.35)';
  ctx.lineWidth = 0.8 * sz;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.moveTo(-6 * sz, -6 * sz);
  ctx.lineTo(-6 * sz, 8 * sz);
  ctx.stroke();

  ctx.restore();
}

export function drawSpiderWeb(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  color: string,
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.68;
  const spokes = 8;
  for (let i = 0; i < spokes; i++) {
    const a = (i / spokes) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    ctx.stroke();
  }
  for (let ring = 1; ring <= 6; ring++) {
    const rr = (r * ring) / 6;
    ctx.beginPath();
    for (let i = 0; i <= spokes; i++) {
      const a = (i / spokes) * Math.PI * 2;
      const x = cx + Math.cos(a) * rr;
      const y = cy + Math.sin(a) * rr;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
  }
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.82;
  ctx.beginPath();
  ctx.arc(cx + r * 0.42, cy + r * 0.28, r * 0.065, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export function drawPentagram(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  color: string,
) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.globalAlpha = 0.78;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 0.68;
  const pts = Array.from({ length: 5 }, (_, i) => ({
    x: cx + Math.cos((i * 4 * Math.PI) / 5 - Math.PI / 2) * r * 0.82,
    y: cy + Math.sin((i * 4 * Math.PI) / 5 - Math.PI / 2) * r * 0.82,
  }));
  ctx.beginPath();
  pts.forEach((p, i) =>
    i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y),
  );
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}

export function drawScatteredStars(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  color: string,
  count = 80,
  margin = 50,
) {
  for (let i = 0; i < count; i++) {
    const x = margin + (Math.sin(i * 2.39) * 0.5 + 0.5) * (W - margin * 2);
    const y = margin + (Math.cos(i * 1.73) * 0.5 + 0.5) * (H - margin * 2);
    const alpha = 0.22 + (Math.sin(i * 3.14) * 0.5 + 0.5) * 0.42;
    const size = 0.8 + (Math.cos(i * 2.71) * 0.5 + 0.5) * 1.8;
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.beginPath();
    ctx.arc(x, y, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
    if (i % 7 === 0) {
      ctx.font = `${size * 5}px serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('✦', x, y);
    }
  }
  ctx.globalAlpha = 1;
}

export function drawMoonPhases(
  ctx: CanvasRenderingContext2D,
  cx: number,
  y: number,
  color: string,
  r = 8,
) {
  const bg = catppuccin.crust;
  const phases = [
    (x: number) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = 0.72;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();
    },
    (x: number) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.82;
      ctx.beginPath();
      ctx.arc(x, y, r, Math.PI / 2, Math.PI * 1.5);
      ctx.fill();
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.arc(x + r * 0.4, y, r * 0.88, 0, Math.PI * 2);
      ctx.fill();
    },
    (x: number) => {
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 14;
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.9;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    },
    (x: number) => {
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.82;
      ctx.beginPath();
      ctx.arc(x, y, r, -Math.PI / 2, Math.PI / 2);
      ctx.fill();
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.arc(x - r * 0.4, y, r * 0.88, 0, Math.PI * 2);
      ctx.fill();
    },
    (x: number) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;
      ctx.globalAlpha = 0.72;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();
    },
  ];
  const sp = r * 3.5;
  const startX = cx - ((phases.length - 1) * sp) / 2;
  phases.forEach((draw, i) => {
    ctx.save();
    draw(startX + i * sp);
    ctx.restore();
  });
}

export function drawSprig(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  angle: number,
  color: string,
  scale = 1,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = 1 * scale;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -44 * scale);
  ctx.stroke();
  const leaves = [
    { y: -10, a: -0.55, s: 9 },
    { y: -19, a: 0.55, s: 10 },
    { y: -28, a: -0.5, s: 9 },
    { y: -37, a: 0.5, s: 8 },
    { y: -42, a: -0.2, s: 6 },
  ];
  leaves.forEach((l) => {
    [-1, 1].forEach((side) => {
      ctx.save();
      ctx.translate(0, l.y * scale);
      ctx.rotate(l.a * side);
      drawLeafShape(ctx, l.s * scale);
      ctx.restore();
    });
  });
  ctx.restore();
}

export function drawOrnamentalCorner(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  sx: number,
  sy: number,
  color: string,
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(sx, sy);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.8;
  ctx.globalAlpha = 0.88;
  ctx.beginPath();
  ctx.moveTo(0, 22);
  ctx.quadraticCurveTo(0, 0, 22, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, 38);
  ctx.quadraticCurveTo(0, 0, 38, 0);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.globalAlpha = 1.0;
  ctx.font = '15px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('✦', 8, 8);
  ctx.restore();
}
