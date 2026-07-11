export const catppuccin = {
  crust: '#11111b',
  mantle: '#181825',
  base: '#1e1e2e',
  surface0: '#313244',
  surface1: '#45475a',
  surface2: '#585b70',
  overlay0: '#6c7086',
  overlay1: '#7f849c',
  overlay2: '#9399b2',
  subtext0: '#a6adc8',
  subtext1: '#bac2de',
  text: '#cdd6f4',
  lavender: '#b4befe',
  blue: '#89b4fa',
  sapphire: '#74c7ec',
  sky: '#89dceb',
  teal: '#94e2d5',
  green: '#a6e3a1',
  yellow: '#f9e2af',
  peach: '#fab387',
  maroon: '#eba0ac',
  red: '#f38ba8',
  mauve: '#cba6f7',
  pink: '#f5c2e7',
  flamingo: '#f2cdcd',
  rosewater: '#f5e0dc',
} as const;

export type CatppuccinToken = keyof typeof catppuccin;

export const cardAccents = {
  about: catppuccin.mauve,
  formations: catppuccin.peach,
  experiences: catppuccin.blue,
  contact: catppuccin.teal,
  projects: catppuccin.pink,
} as const;

export const sceneColors = {
  backgroundGradient: [
    catppuccin.crust,
    catppuccin.mantle,
    catppuccin.base,
  ] as const,
  fog: catppuccin.crust,
  starField: [
    catppuccin.mauve,
    catppuccin.pink,
    catppuccin.peach,
    catppuccin.lavender,
    catppuccin.teal,
  ] as const,
  mushroomCaps: [
    catppuccin.pink,
    catppuccin.maroon,
    catppuccin.flamingo,
  ] as const,
  crystal: catppuccin.mauve,
  vine: catppuccin.teal,
  spiderWeb: catppuccin.overlay1,
  moonPhases: catppuccin.peach,
  constellationStar: catppuccin.text,
  cardLabel: catppuccin.text,
  cardEdge: catppuccin.mantle,
  ambientLight: catppuccin.peach,
  warmLightA: catppuccin.peach,
  warmLightB: catppuccin.yellow,
  accentLight: catppuccin.mauve,
  backTextureRadialTint: '#211f30',
} as const;

export const cardBackgroundGradients: Record<
  string,
  readonly [string, string, string]
> = {
  about: ['#1f1b2e', '#15131e', '#0e0c14'],
  formations: ['#241c16', '#18130e', '#100d09'],
  experiences: ['#141a26', '#0f131c', '#0a0d13'],
  contact: ['#132420', '#0e1815', '#090f0d'],
  projects: ['#241726', '#17101a', '#0f0a11'],
} as const;

export const LESBIAN_GRADIENT = [
  '#d52d00',
  '#ef7627',
  '#ff9a56',
  '#ffffff',
  '#d162a4',
  '#b55690',
  '#a50062',
] as const;

export const cssVars: Record<string, string> = {
  '--magic-purple': catppuccin.mauve,
  '--candle-glow': catppuccin.peach,
  '--amber-warm': catppuccin.yellow,
  '--moon-silver': catppuccin.subtext0,
  '--parchment': catppuccin.text,
  '--cream': catppuccin.text,
  '--black-forest': catppuccin.crust,
  '--moss-green': catppuccin.surface1,
  '--sage': catppuccin.teal,
  '--stone-gray': catppuccin.surface2,
};

export function injectTheme(): void {
  const root = document.documentElement.style;
  for (const [name, value] of Object.entries(cssVars)) {
    root.setProperty(name, value);
  }
}
