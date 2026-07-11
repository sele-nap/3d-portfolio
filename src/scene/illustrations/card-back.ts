import { CARD_CANVAS_H, CARD_CANVAS_W } from '@/scene/cards/card-configs';
import { catppuccin, sceneColors } from '@/tokens/theme';
import * as THREE from 'three';
import {
  drawCrystalCluster,
  drawMoonPhases,
  drawMushroom,
  drawOrnamentalCorner,
  drawScatteredStars,
  drawVineBorder,
} from './drawing-utils';

function createBackTexture(): THREE.CanvasTexture {
  const W = CARD_CANVAS_W;
  const H = CARD_CANVAS_H;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');

  const bg = ctx.createRadialGradient(W / 2, H * 0.42, 55, W / 2, H / 2, 460);
  bg.addColorStop(0, sceneColors.backTextureRadialTint);
  bg.addColorStop(0.4, catppuccin.mantle);
  bg.addColorStop(0.8, catppuccin.crust);
  bg.addColorStop(1, catppuccin.crust);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  ctx.save();
  ctx.strokeStyle = 'rgba(203,166,247,0.07)';
  ctx.lineWidth = 0.8;
  for (let i = -H; i < W + H; i += 30) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + H, H);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(i + H, 0);
    ctx.lineTo(i, H);
    ctx.stroke();
  }
  ctx.restore();

  drawScatteredStars(ctx, W, H, catppuccin.peach, 120, 45);

  ctx.strokeStyle = catppuccin.mauve;
  ctx.lineWidth = 5;
  ctx.strokeRect(10, 10, W - 20, H - 20);
  ctx.strokeStyle = catppuccin.peach;
  ctx.lineWidth = 2;
  ctx.strokeRect(42, 42, W - 84, H - 84);
  ctx.strokeStyle = 'rgba(203,166,247,0.4)';
  ctx.lineWidth = 1;
  ctx.strokeRect(52, 52, W - 104, H - 104);

  drawVineBorder(ctx, W, H, 26, catppuccin.teal);

  const cPos = [
    [52, 52, 1, 1],
    [W - 52, 52, -1, 1],
    [W - 52, H - 52, -1, -1],
    [52, H - 52, 1, -1],
  ] as [number, number, number, number][];
  cPos.forEach(([x, y, sx, sy]) =>
    drawOrnamentalCorner(ctx, x, y, sx, sy, catppuccin.peach),
  );

  ctx.save();
  ctx.globalAlpha = 0.82;
  drawMushroom(ctx, 78, H / 2 - 40, 22, catppuccin.pink);
  drawMushroom(ctx, 65, H / 2 + 10, 18, catppuccin.maroon);
  drawMushroom(ctx, W - 78, H / 2 - 40, 22, catppuccin.pink);
  drawMushroom(ctx, W - 65, H / 2 + 10, 18, catppuccin.maroon);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.92;
  drawCrystalCluster(ctx, 78, 105, catppuccin.mauve, 0.85);
  drawCrystalCluster(ctx, W - 78, 105, catppuccin.mauve, 0.85);
  ctx.restore();

  drawMoonPhases(ctx, W / 2, 72, catppuccin.peach, 9);
  drawMoonPhases(ctx, W / 2, H - 72, catppuccin.peach, 9);

  ctx.strokeStyle = 'rgba(250,179,135,0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(58, 108);
  ctx.lineTo(W - 58, 108);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(58, H - 108);
  ctx.lineTo(W - 58, H - 108);
  ctx.stroke();

  const mcx = W / 2,
    mcy = H / 2;
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 13) {
    const dx = mcx + Math.cos(a) * 130,
      dy = mcy + Math.sin(a) * 130;
    ctx.fillStyle = 'rgba(250,179,135,0.3)';
    ctx.beginPath();
    ctx.arc(dx, dy, 2.5, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.save();
  ctx.shadowColor = catppuccin.peach;
  ctx.shadowBlur = 24;
  ctx.strokeStyle = 'rgba(250,179,135,0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(mcx, mcy, 118, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
  ctx.strokeStyle = 'rgba(203,166,247,0.4)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(mcx, mcy, 105, 0, Math.PI * 2);
  ctx.stroke();
  ctx.save();
  ctx.shadowColor = catppuccin.peach;
  ctx.shadowBlur = 45;
  ctx.fillStyle = catppuccin.peach;
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(mcx, mcy, 76, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  ctx.fillStyle = catppuccin.mantle;
  ctx.beginPath();
  ctx.arc(mcx + 30, mcy - 13, 68, 0, Math.PI * 2);
  ctx.fill();
  [
    { x: mcx + 58, y: mcy - 78, s: 10 },
    { x: mcx - 44, y: mcy - 88, s: 8 },
    { x: mcx + 82, y: mcy + 24, s: 9 },
    { x: mcx - 60, y: mcy + 40, s: 7 },
    { x: mcx + 38, y: mcy + 82, s: 8 },
  ].forEach((st) => {
    ctx.fillStyle = catppuccin.peach;
    ctx.globalAlpha = 0.44;
    ctx.font = `${st.s}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✦', st.x, st.y);
    ctx.globalAlpha = 1;
  });

  for (let y2 = 125; y2 < H - 125; y2 += 52) {
    ctx.fillStyle = 'rgba(203,166,247,0.3)';
    ctx.beginPath();
    ctx.arc(58, y2, 1.8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(W - 58, y2, 1.8, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = catppuccin.teal;
  ctx.globalAlpha = 0.68;
  ctx.font = '18px serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('✦  ✧  ✦', W / 2, H - 60);
  ctx.globalAlpha = 1;

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

let _sharedBackTexture: THREE.CanvasTexture | null = null;
export const getSharedBackTexture = (): THREE.CanvasTexture =>
  (_sharedBackTexture ??= createBackTexture());
