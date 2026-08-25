import {
  CARD_CANVAS_H,
  CARD_CANVAS_W,
  CardDef,
} from '@/scene/cards/card-configs';
import { cardBackgroundGradients, catppuccin } from '@/tokens/theme';
import * as THREE from 'three';
import {
  drawConstellationDots,
  drawCrystalCluster,
  drawMoonPhases,
  drawMushroom,
  drawOrnamentalCorner,
  drawOuterRing,
  drawPentagram,
  drawScatteredStars,
  drawSpiderWeb,
  drawSprig,
  drawVineBorder,
} from './drawing-utils';

type IllustrationDrawer = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  card: CardDef,
) => void;

function drawAboutIllustration(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  card: CardDef,
) {
  drawOuterRing(ctx, cx, cy, card.accentColor, 132, 118);
  drawConstellationDots(
    ctx,
    cx,
    cy,
    card.accentColor,
    142,
    10,
    0.2,
    0.1,
    4,
    2.5,
  );
  ctx.save();
  ctx.shadowColor = card.accentColor;
  ctx.shadowBlur = 55;
  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 0.22;
  ctx.beginPath();
  ctx.arc(cx, cy, 82, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  ctx.fillStyle = catppuccin.crust;
  ctx.beginPath();
  ctx.arc(cx, cy, 82, 0, Math.PI * 2);
  ctx.fill();
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, 82, 0, Math.PI * 2);
  ctx.clip();
  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 0.88;
  ctx.beginPath();
  ctx.arc(cx, cy, 82, 0, Math.PI * 2);
  ctx.moveTo(cx + 36 + 82, cy - 16);
  ctx.arc(cx + 36, cy - 16, 82, 0, Math.PI * 2);
  ctx.fill('evenodd');
  ctx.restore();
  ctx.save();
  ctx.strokeStyle = `${card.accentColor}60`;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.moveTo(cx - 30, cy - 8);
  ctx.bezierCurveTo(cx - 24, cy - 12, cx - 18, cy - 12, cx - 12, cy - 8);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx - 22, cy + 8, 10, 0.1, Math.PI - 0.1);
  ctx.stroke();
  ctx.restore();
  const cStars = [
    { x: cx + 60, y: cy - 82 },
    { x: cx - 50, y: cy - 96 },
    { x: cx + 90, y: cy - 28 },
    { x: cx - 80, y: cy + 42 },
    { x: cx + 45, y: cy + 96 },
    { x: cx - 35, y: cy + 108 },
  ];
  ctx.strokeStyle = `${card.accentColor}25`;
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  cStars.forEach((s, i) =>
    i === 0 ? ctx.moveTo(s.x, s.y) : ctx.lineTo(s.x, s.y),
  );
  ctx.stroke();
  cStars.forEach((s) => {
    ctx.save();
    ctx.shadowColor = catppuccin.text;
    ctx.shadowBlur = 10;
    ctx.fillStyle = catppuccin.text;
    ctx.globalAlpha = 0.65;
    ctx.beginPath();
    ctx.arc(s.x, s.y, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
  ctx.save();
  ctx.globalAlpha = 0.88;
  drawMushroom(ctx, cx, cy + 148, 40, catppuccin.pink);
  drawMushroom(ctx, cx - 52, cy + 160, 28, catppuccin.maroon);
  drawMushroom(ctx, cx + 50, cy + 162, 26, catppuccin.flamingo);
  drawMushroom(ctx, cx - 26, cy + 170, 18, catppuccin.rosewater);
  drawMushroom(ctx, cx + 28, cy + 156, 20, catppuccin.maroon);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.62;
  drawSprig(ctx, cx - 152, cy + 20, 0.3, card.accentColor, 1.2);
  drawSprig(ctx, cx + 152, cy + 20, Math.PI - 0.3, card.accentColor, 1.2);
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = 0.88;
  drawCrystalCluster(ctx, cx - 138, cy - 88, card.accentColor, 0.72);
  drawCrystalCluster(ctx, cx + 138, cy - 88, card.accentColor, 0.72);
  ctx.restore();
}

function drawFormationsIllustration(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  card: CardDef,
) {
  drawOuterRing(ctx, cx, cy, card.accentColor, 135, 120);
  drawConstellationDots(
    ctx,
    cx,
    cy,
    card.accentColor,
    128,
    14,
    0.14,
    0.07,
    3,
    2,
  );

  const hgHalfH = 86,
    hgHalfW = 56,
    hgWaist = 9;
  const hgTop = cy - hgHalfH,
    hgBot = cy + hgHalfH;
  const pathHourglass = () => {
    ctx.beginPath();
    ctx.moveTo(cx - hgHalfW, hgTop);
    ctx.lineTo(cx + hgHalfW, hgTop);
    ctx.bezierCurveTo(
      cx + hgHalfW,
      hgTop + 28,
      cx + hgWaist,
      cy - 12,
      cx + hgWaist,
      cy,
    );
    ctx.bezierCurveTo(
      cx + hgWaist,
      cy + 12,
      cx + hgHalfW,
      hgBot - 28,
      cx + hgHalfW,
      hgBot,
    );
    ctx.lineTo(cx - hgHalfW, hgBot);
    ctx.bezierCurveTo(
      cx - hgHalfW,
      hgBot - 28,
      cx - hgWaist,
      cy + 12,
      cx - hgWaist,
      cy,
    );
    ctx.bezierCurveTo(
      cx - hgWaist,
      cy - 12,
      cx - hgHalfW,
      hgTop + 28,
      cx - hgHalfW,
      hgTop,
    );
    ctx.closePath();
  };

  ctx.save();
  pathHourglass();
  ctx.fillStyle = 'rgba(17, 17, 27, 0.9)';
  ctx.fill();
  ctx.restore();

  ctx.save();
  ctx.shadowColor = card.accentColor;
  ctx.shadowBlur = 14;
  ctx.strokeStyle = card.accentColor;
  ctx.lineWidth = 2.2;
  ctx.globalAlpha = 0.92;
  pathHourglass();
  ctx.stroke();
  ctx.restore();

  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 0.88;
  ctx.fillRect(cx - hgHalfW - 3, hgTop - 10, hgHalfW * 2 + 6, 10);
  ctx.fillRect(cx - hgHalfW - 3, hgBot, hgHalfW * 2 + 6, 10);
  ctx.globalAlpha = 1;

  for (let i = 0; i < 32; i++) {
    const px =
      cx + Math.sin(i * 2.39) * (hgHalfW * 0.72 * (1 - (i / 32) * 0.45));
    const py = hgTop + 18 + (i / 32) * (hgHalfH - 26);
    ctx.fillStyle = card.accentColor;
    ctx.globalAlpha = 0.35 + Math.sin(i * 3.1) * 0.25;
    ctx.beginPath();
    ctx.arc(px, py, 0.9 + Math.cos(i * 1.7) * 0.5, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = catppuccin.yellow;
    ctx.globalAlpha = 0.7 - i * 0.15;
    ctx.beginPath();
    ctx.arc(
      cx + (i % 2 === 0 ? 1.5 : -1.5),
      cy - 8 + i * 5,
      1.4,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  }

  for (let i = 0; i < 16; i++) {
    const spread = hgHalfW * (0.38 + (i / 16) * 0.32);
    const px = cx + Math.sin(i * 1.87) * spread;
    const py = hgBot - 16 - (i / 16) * (hgHalfH * 0.55);
    ctx.fillStyle = card.accentColor;
    ctx.globalAlpha = 0.55 + Math.sin(i * 2.8) * 0.2;
    ctx.beginPath();
    ctx.arc(px, py, 0.9 + Math.cos(i * 2.1) * 0.4, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.save();
  ctx.shadowColor = card.accentColor;
  ctx.shadowBlur = 22;
  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 0.18;
  ctx.beginPath();
  ctx.arc(cx, cy, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const cStars = [
    { x: cx + 78, y: cy - 96 },
    { x: cx - 82, y: cy - 82 },
    { x: cx + 112, y: cy + 12 },
    { x: cx - 108, y: cy + 26 },
    { x: cx + 62, y: cy + 106 },
    { x: cx - 56, y: cy + 114 },
  ];
  ctx.strokeStyle = `${card.accentColor}28`;
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  cStars
    .slice(0, 3)
    .forEach((s, i) => (i === 0 ? ctx.moveTo(s.x, s.y) : ctx.lineTo(s.x, s.y)));
  ctx.stroke();
  ctx.beginPath();
  cStars
    .slice(3)
    .forEach((s, i) => (i === 0 ? ctx.moveTo(s.x, s.y) : ctx.lineTo(s.x, s.y)));
  ctx.stroke();
  cStars.forEach((s) => {
    ctx.save();
    ctx.shadowColor = catppuccin.text;
    ctx.shadowBlur = 8;
    ctx.fillStyle = catppuccin.text;
    ctx.globalAlpha = 0.72;
    ctx.beginPath();
    ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
  [
    { x: cx + 52, y: cy - 118 },
    { x: cx - 48, y: cy - 110 },
    { x: cx + 90, y: cy - 58 },
    { x: cx - 86, y: cy - 46 },
    { x: cx + 94, y: cy + 56 },
    { x: cx - 90, y: cy + 68 },
  ].forEach((s, i) => {
    ctx.fillStyle = card.accentColor;
    ctx.globalAlpha = 0.65 + (i % 3) * 0.1;
    ctx.font = `${8 + (i % 3) * 3}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(i % 2 ? '✧' : '✦', s.x, s.y);
    ctx.globalAlpha = 1;
  });

  ctx.save();
  ctx.globalAlpha = 0.78;
  drawCrystalCluster(ctx, cx - 126, cy - 44, card.accentColor, 0.68);
  drawCrystalCluster(ctx, cx + 126, cy - 44, card.accentColor, 0.68);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.55;
  drawSprig(ctx, cx + 140, cy + 18, Math.PI - 0.25, card.accentColor, 1.05);
  drawSprig(ctx, cx - 140, cy + 18, 0.25, card.accentColor, 1.05);
  ctx.restore();
}

function drawContactIllustration(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  card: CardDef,
) {
  drawOuterRing(ctx, cx, cy, card.accentColor, 132);

  ctx.save();
  ctx.globalAlpha = 1.0;
  drawSpiderWeb(ctx, cx + 108, cy - 98, 72, card.accentColor);
  ctx.restore();

  for (let a = 0; a < Math.PI * 2; a += Math.PI / 10) {
    const lx = cx + Math.cos(a) * 112,
      ly = cy + Math.sin(a) * 112;
    ctx.save();
    ctx.translate(lx, ly);
    ctx.rotate(a + Math.PI / 2);
    ctx.fillStyle = card.accentColor;
    ctx.globalAlpha = 0.55 + Math.sin(a * 2) * 0.15;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-6, -4.5, -5, -12, 0, -15);
    ctx.bezierCurveTo(5, -12, 6, -4.5, 0, 0);
    ctx.fill();
    ctx.restore();
  }
  for (let a = Math.PI / 20; a < Math.PI * 2; a += Math.PI / 10) {
    const lx = cx + Math.cos(a) * 118,
      ly = cy + Math.sin(a) * 118;
    ctx.save();
    ctx.translate(lx, ly);
    ctx.rotate(a + Math.PI / 2);
    ctx.fillStyle = card.accentColor;
    ctx.globalAlpha = 0.38;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-4, -3, -3.5, -9, 0, -11);
    ctx.bezierCurveTo(3.5, -9, 4, -3, 0, 0);
    ctx.fill();
    ctx.restore();
  }

  ctx.save();
  ctx.shadowColor = card.accentColor;
  ctx.shadowBlur = 40;
  ctx.fillStyle = catppuccin.crust;
  ctx.globalAlpha = 0.95;
  ctx.beginPath();
  ctx.arc(cx, cy, 80, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = card.accentColor;
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(cx, cy, 80, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = `${card.accentColor}55`;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, 68, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  drawPentagram(ctx, cx, cy, 55, card.accentColor);

  for (let a = 0; a < Math.PI * 2; a += Math.PI / 9) {
    const ix = cx + Math.cos(a) * 42,
      iy = cy + Math.sin(a) * 42;
    const ox = cx + Math.cos(a) * 64,
      oy = cy + Math.sin(a) * 64;
    ctx.strokeStyle = card.accentColor;
    ctx.lineWidth = 0.7;
    ctx.globalAlpha = 0.28;
    ctx.beginPath();
    ctx.moveTo(ix, iy);
    ctx.lineTo(ox, oy);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  ctx.save();
  ctx.strokeStyle = card.accentColor;
  ctx.fillStyle = card.accentColor;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.55;
  const qx = cx - 110,
    qy = cy - 90;
  ctx.save();
  ctx.translate(qx, qy);
  ctx.rotate(0.6);
  ctx.beginPath();
  ctx.moveTo(0, -38);
  ctx.bezierCurveTo(12, -28, 14, -10, 8, 0);
  ctx.bezierCurveTo(4, 8, -4, 8, -8, 0);
  ctx.bezierCurveTo(-14, -10, -12, -28, 0, -38);
  ctx.fill();
  ctx.fillStyle = catppuccin.surface0;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.moveTo(0, -38);
  ctx.lineTo(0, 8);
  ctx.bezierCurveTo(-6, 2, -10, -6, -8, 0);
  ctx.fill();
  ctx.fillStyle = catppuccin.surface1;
  ctx.globalAlpha = 0.8;
  ctx.beginPath();
  ctx.moveTo(0, 8);
  ctx.lineTo(-3, 22);
  ctx.lineTo(0, 20);
  ctx.lineTo(3, 22);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.65;
  drawSprig(ctx, cx - 150, cy + 18, 0.42, card.accentColor, 1.2);
  drawSprig(ctx, cx + 150, cy + 18, Math.PI - 0.42, card.accentColor, 1.2);
  drawSprig(ctx, cx - 125, cy - 75, 0.2, card.accentColor, 0.85);
  drawSprig(ctx, cx + 125, cy - 75, Math.PI - 0.2, card.accentColor, 0.85);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.85;
  drawMushroom(ctx, cx - 105, cy + 148, 22, catppuccin.teal);
  drawMushroom(ctx, cx - 88, cy + 142, 16, catppuccin.sky);
  drawMushroom(ctx, cx + 105, cy + 148, 22, catppuccin.teal);
  drawMushroom(ctx, cx + 88, cy + 142, 16, catppuccin.sky);
  ctx.restore();
}

function drawExperiencesIllustration(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  card: CardDef,
) {
  drawOuterRing(ctx, cx, cy, card.accentColor, 132, 118);
  drawConstellationDots(
    ctx,
    cx,
    cy,
    card.accentColor,
    126,
    12,
    0.15,
    0.08,
    4,
    2,
  );

  ctx.fillStyle = 'rgba(17, 17, 27, 0.85)';
  ctx.beginPath();
  ctx.arc(cx, cy, 78, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = `${card.accentColor}70`;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, 78, 0, Math.PI * 2);
  ctx.stroke();
  [(-Math.PI * 3) / 4, -Math.PI / 4, Math.PI / 4, (Math.PI * 3) / 4].forEach(
    (angle) => {
      ctx.strokeStyle = `${card.accentColor}55`;
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.55;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * 50, cy + Math.sin(angle) * 50);
      ctx.stroke();
      ctx.globalAlpha = 1;
    },
  );
  [
    [-Math.PI / 2, 72],
    [Math.PI / 2, 72],
    [0, 66],
    [Math.PI, 66],
  ].forEach(([angle, len]) => {
    ctx.save();
    ctx.shadowColor = card.accentColor;
    ctx.shadowBlur = 10;
    ctx.strokeStyle = card.accentColor;
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.88;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * len, cy + Math.sin(angle) * len);
    ctx.stroke();
    ctx.restore();
  });

  const drawDiamond = (dx: number, dy: number, size: number) => {
    ctx.save();
    ctx.shadowColor = card.accentColor;
    ctx.shadowBlur = 16;
    ctx.fillStyle = card.accentColor;
    ctx.globalAlpha = 0.95;
    ctx.beginPath();
    ctx.moveTo(dx, dy - size);
    ctx.lineTo(dx + size * 0.38, dy);
    ctx.lineTo(dx, dy + size * 0.6);
    ctx.lineTo(dx - size * 0.38, dy);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };
  drawDiamond(cx, cy - 72, 14);
  drawDiamond(cx, cy + 72, 14);
  drawDiamond(cx + 66, cy, 12);
  drawDiamond(cx - 66, cy, 12);

  ctx.save();
  ctx.shadowColor = '#ffffff';
  ctx.shadowBlur = 22;
  ctx.fillStyle = '#ffffff';
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(cx, cy, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  const cStars = [
    { x: cx + 72, y: cy - 92 },
    { x: cx - 68, y: cy - 96 },
    { x: cx + 110, y: cy + 16 },
    { x: cx - 106, y: cy + 28 },
    { x: cx + 58, y: cy + 110 },
    { x: cx - 52, y: cy + 114 },
  ];
  ctx.strokeStyle = `${card.accentColor}28`;
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  cStars
    .slice(0, 3)
    .forEach((s, i) => (i === 0 ? ctx.moveTo(s.x, s.y) : ctx.lineTo(s.x, s.y)));
  ctx.stroke();
  ctx.beginPath();
  cStars
    .slice(3)
    .forEach((s, i) => (i === 0 ? ctx.moveTo(s.x, s.y) : ctx.lineTo(s.x, s.y)));
  ctx.stroke();
  cStars.forEach((s) => {
    ctx.save();
    ctx.shadowColor = catppuccin.text;
    ctx.shadowBlur = 8;
    ctx.fillStyle = catppuccin.text;
    ctx.globalAlpha = 0.72;
    ctx.beginPath();
    ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });
  [
    { x: cx + 50, y: cy - 118 },
    { x: cx - 46, y: cy - 112 },
    { x: cx + 90, y: cy - 58 },
    { x: cx - 86, y: cy - 48 },
    { x: cx + 94, y: cy + 58 },
    { x: cx - 90, y: cy + 72 },
  ].forEach((s, i) => {
    ctx.fillStyle = card.accentColor;
    ctx.globalAlpha = 0.65 + (i % 3) * 0.1;
    ctx.font = `${8 + (i % 3) * 3}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(i % 2 ? '✧' : '✦', s.x, s.y);
    ctx.globalAlpha = 1;
  });

  ctx.save();
  ctx.globalAlpha = 0.72;
  drawCrystalCluster(ctx, cx - 128, cy - 44, card.accentColor, 0.68);
  drawCrystalCluster(ctx, cx + 128, cy - 44, card.accentColor, 0.68);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.55;
  drawSprig(ctx, cx + 142, cy + 20, Math.PI - 0.28, card.accentColor, 1.05);
  drawSprig(ctx, cx - 142, cy + 20, 0.28, card.accentColor, 1.05);
  ctx.restore();
}

function drawProjectsIllustration(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  card: CardDef,
) {
  const drawHex = (hx: number, hy: number, r: number) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (i * Math.PI) / 3 - Math.PI / 6;
      const x = hx + r * Math.cos(a);
      const y = hy + r * Math.sin(a);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
  };

  drawOuterRing(ctx, cx, cy, card.accentColor, 132);

  ctx.save();
  ctx.shadowColor = card.accentColor;
  ctx.shadowBlur = 18;
  ctx.strokeStyle = card.accentColor;
  ctx.lineWidth = 2.5;
  ctx.globalAlpha = 0.92;
  drawHex(cx, cy, 90);
  ctx.stroke();
  ctx.restore();

  ctx.strokeStyle = `${card.accentColor}66`;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.75;
  drawHex(cx, cy, 62);
  ctx.stroke();

  ctx.fillStyle = 'rgba(17, 17, 27, 0.9)';
  ctx.globalAlpha = 0.9;
  drawHex(cx, cy, 44);
  ctx.fill();

  ctx.save();
  ctx.shadowColor = card.accentColor;
  ctx.shadowBlur = 22;
  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 0.95;
  ctx.font = 'bold 52px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('⬡', cx, cy);
  ctx.restore();

  const hexRing = [0, 60, 120, 180, 240, 300];
  hexRing.forEach((deg, i) => {
    const a = (deg * Math.PI) / 180;
    const hx2 = cx + Math.cos(a) * 108;
    const hy2 = cy + Math.sin(a) * 108;
    ctx.save();
    ctx.strokeStyle = card.accentColor;
    ctx.lineWidth = 1.2;
    ctx.globalAlpha = 0.45 + (i % 2) * 0.2;
    drawHex(hx2, hy2, 20);
    ctx.stroke();
    ctx.restore();
  });

  [30, 90, 150, 210, 270, 330].forEach((deg, i) => {
    const a = (deg * Math.PI) / 180;
    const hx2 = cx + Math.cos(a) * 128;
    const hy2 = cy + Math.sin(a) * 128;
    ctx.save();
    ctx.strokeStyle = card.accentColor;
    ctx.lineWidth = 0.9;
    ctx.globalAlpha = 0.25 + (i % 3) * 0.1;
    drawHex(hx2, hy2, 11);
    ctx.stroke();
    ctx.restore();
  });

  ctx.save();
  ctx.strokeStyle = `${card.accentColor}22`;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.6;
  for (let gx = cx - 160; gx <= cx + 160; gx += 32) {
    ctx.beginPath();
    ctx.moveTo(gx, cy - 140);
    ctx.lineTo(gx, cy + 140);
    ctx.stroke();
  }
  for (let gy = cy - 140; gy <= cy + 140; gy += 32) {
    ctx.beginPath();
    ctx.moveTo(cx - 160, gy);
    ctx.lineTo(cx + 160, gy);
    ctx.stroke();
  }
  ctx.restore();

  const cStars = [
    { x: cx + 70, y: cy - 100 },
    { x: cx - 68, y: cy - 94 },
    { x: cx + 112, y: cy + 14 },
    { x: cx - 108, y: cy + 22 },
    { x: cx + 60, y: cy + 108 },
    { x: cx - 54, y: cy + 112 },
  ];
  cStars.forEach((s) => {
    ctx.save();
    ctx.shadowColor = catppuccin.text;
    ctx.shadowBlur = 8;
    ctx.fillStyle = catppuccin.text;
    ctx.globalAlpha = 0.65;
    ctx.beginPath();
    ctx.arc(s.x, s.y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  });

  ctx.save();
  ctx.globalAlpha = 0.58;
  drawCrystalCluster(ctx, cx - 130, cy - 46, card.accentColor, 0.65);
  drawCrystalCluster(ctx, cx + 130, cy - 46, card.accentColor, 0.65);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.52;
  drawSprig(ctx, cx + 142, cy + 18, Math.PI - 0.28, card.accentColor, 1.0);
  drawSprig(ctx, cx - 142, cy + 18, 0.28, card.accentColor, 1.0);
  ctx.restore();
}

const ILLUSTRATION_DRAWERS: Record<string, IllustrationDrawer> = {
  about: drawAboutIllustration,
  formations: drawFormationsIllustration,
  contact: drawContactIllustration,
  experiences: drawExperiencesIllustration,
  projects: drawProjectsIllustration,
};

function drawCardIllustration(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  card: CardDef,
) {
  const cx = W / 2;
  const cy = H * 0.375;
  ILLUSTRATION_DRAWERS[card.id]?.(ctx, cx, cy, card);
}

export function createFrontTexture(card: CardDef): THREE.CanvasTexture {
  const W = CARD_CANVAS_W;
  const H = CARD_CANVAS_H;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');

  const bg = ctx.createLinearGradient(0, 0, 0, H);
  const stops =
    cardBackgroundGradients[card.id] ?? cardBackgroundGradients.projects;
  bg.addColorStop(0, stops[0]);
  bg.addColorStop(0.55, stops[1]);
  bg.addColorStop(1, stops[2]);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  const sg = ctx.createLinearGradient(0, 0, W, 0);
  sg.addColorStop(0, `${card.accentColor}22`);
  sg.addColorStop(0.5, 'transparent');
  sg.addColorStop(1, `${card.accentColor}22`);
  ctx.fillStyle = sg;
  ctx.fillRect(0, 0, W, H);

  drawScatteredStars(ctx, W, H, card.accentColor, 90, 55);

  ctx.strokeStyle = card.accentColor;
  ctx.lineWidth = 5;
  ctx.strokeRect(10, 10, W - 20, H - 20);
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 1;
  ctx.strokeRect(22, 22, W - 44, H - 44);
  ctx.strokeStyle = card.accentColor;
  ctx.lineWidth = 2;
  ctx.strokeRect(42, 42, W - 84, H - 84);
  ctx.strokeStyle = `${card.accentColor}33`;
  ctx.lineWidth = 1;
  ctx.strokeRect(52, 52, W - 104, H - 104);

  drawVineBorder(ctx, W, H, 32, card.accentColor);

  drawOrnamentalCorner(ctx, 52, 52, 1, 1, card.accentColor);
  drawOrnamentalCorner(ctx, W - 52, 52, -1, 1, card.accentColor);
  drawOrnamentalCorner(ctx, W - 52, H - 52, -1, -1, card.accentColor);
  drawOrnamentalCorner(ctx, 52, H - 52, 1, -1, card.accentColor);

  ctx.save();
  ctx.globalAlpha = 0.5;
  if (card.id === 'about') {
    drawMushroom(ctx, 72, H - 170, 20, catppuccin.pink);
    drawMushroom(ctx, 58, H - 154, 15, catppuccin.maroon);
    drawMushroom(ctx, W - 72, H - 170, 20, catppuccin.pink);
    drawMushroom(ctx, W - 58, H - 154, 15, catppuccin.maroon);
  }
  ctx.restore();

  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 1.0;
  ctx.font = '700 17px monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(card.roman, W / 2, 56);
  ctx.globalAlpha = 1;

  drawMoonPhases(ctx, W / 2, 78, card.accentColor, 6);

  ctx.strokeStyle = card.accentColor;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.85;
  ctx.beginPath();
  ctx.moveTo(60, 102);
  ctx.lineTo(W / 2 - 22, 102);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(W / 2 + 22, 102);
  ctx.lineTo(W - 60, 102);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = card.accentColor;
  ctx.font = '14px serif';
  ctx.textAlign = 'center';
  ctx.fillText('◆', W / 2, 102);

  ctx.save();
  ctx.shadowColor = card.accentColor;
  ctx.shadowBlur = 65;
  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 0.08;
  ctx.font = 'bold 240px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(card.symbol, W / 2, H * 0.375);
  ctx.restore();

  drawCardIllustration(ctx, W, H, card);

  ctx.strokeStyle = card.accentColor;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.88;
  ctx.beginPath();
  ctx.moveTo(60, H * 0.635);
  ctx.lineTo(W - 60, H * 0.635);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = card.accentColor;
  ctx.font = '15px serif';
  ctx.textAlign = 'center';
  ctx.fillText('· ✦ ·', W / 2, H * 0.635);

  ctx.save();
  ctx.fillStyle = 'rgba(17, 17, 27, 0.82)';
  ctx.fillRect(62, H * 0.64, W - 124, H * 0.185);
  ctx.restore();

  ctx.save();
  ctx.fillStyle = catppuccin.text;
  ctx.font = '700 50px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(card.label.toUpperCase(), W / 2, H * 0.726);
  ctx.restore();

  ctx.save();
  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 0.9;
  ctx.font = 'italic 18px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(card.subtitle, W / 2, H * 0.776);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.65;
  drawSprig(ctx, 54, H * 0.743, -0.12, card.accentColor, 0.85);
  drawSprig(ctx, W - 54, H * 0.743, Math.PI + 0.12, card.accentColor, 0.85);
  ctx.restore();

  ctx.strokeStyle = card.accentColor;
  ctx.lineWidth = 1.2;
  ctx.globalAlpha = 0.75;
  ctx.beginPath();
  ctx.moveTo(60, H * 0.825);
  ctx.lineTo(W - 60, H * 0.825);
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.fillStyle = card.accentColor;
  ctx.globalAlpha = 1.0;
  ctx.font = '22px serif';
  ctx.textAlign = 'center';
  ctx.fillText('· · ·', W / 2, H - 54);
  ctx.font = '14px serif';
  ctx.fillText('✧', 60, 58);
  ctx.fillText('✧', W - 60, 58);
  ctx.fillText('✧', 60, H - 54);
  ctx.fillText('✧', W - 60, H - 54);
  ctx.globalAlpha = 1;

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}
