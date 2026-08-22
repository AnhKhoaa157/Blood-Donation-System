import { fontFamily, palette, radii, shadows } from "./palette";

function toKebabCase(key: string): string {
  return key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

/**
 * Writes the design system palette onto :root as CSS custom properties.
 * Called once at application startup, before the first render, so every
 * scoped stylesheet can rely on var(--color-*) being present.
 */
export function applyCssVariables(): void {
  const root = document.documentElement.style;

  for (const [key, value] of Object.entries(palette)) {
    root.setProperty(`--color-${toKebabCase(key)}`, value);
  }
  for (const [key, value] of Object.entries(shadows)) {
    root.setProperty(`--shadow-${key}`, value);
  }
  for (const [key, value] of Object.entries(radii)) {
    root.setProperty(`--radius-${key}`, `${value}px`);
  }
  root.setProperty("--font-sans", fontFamily);
}
