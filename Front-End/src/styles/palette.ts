/**
 * Single source of truth for the product's color system.
 *
 * Both the Ant Design theme (src/app/theme.ts) and the project's CSS
 * variables (applied at startup by applyCssVariables, consumed as
 * var(--color-*) in component stylesheets) are derived from this file so
 * the two never drift apart.
 *
 * Direction: warm white surfaces, navy text, deep blood-red for primary
 * actions, muted rose for secondary accents, teal reserved for
 * success/positive states only. No gradients, restrained shadows.
 */

export const palette = {
  bg: "#FAF7F5",
  surface: "#FFFFFF",
  surfaceAlt: "#F6EFEC",
  surfaceSunken: "#F1E9E6",
  border: "#E6DCD8",
  borderStrong: "#D7C9C4",

  textPrimary: "#16233A",
  textSecondary: "#45536B",
  textMuted: "#74829A",
  textOnPrimary: "#FFFFFF",

  primary: "#A31F2E",
  primaryHover: "#8A1926",
  primaryActive: "#711420",
  primaryBg: "#FBEAEA",
  primaryBorder: "#E7B9BD",

  accent: "#B9636E",
  accentBg: "#F6E6E8",
  accentBorder: "#E7C3C8",

  success: "#0F766E",
  successBg: "#E3F5F1",
  successBorder: "#A9DED4",

  warning: "#A15C07",
  warningBg: "#FBF0DC",
  warningBorder: "#EBC98A",

  error: "#9C1C2E",
  errorBg: "#FBEAEA",
  errorBorder: "#E7B9BD",

  info: "#2C4A6E",
  infoBg: "#E9F0F6",
  infoBorder: "#C3D6E6",

  neutral: "#5B6472",
  neutralBg: "#EFECEA",
  neutralBorder: "#DAD3CF",

  link: "#7A1420",
} as const;

export const shadows = {
  sm: "0 1px 2px rgba(22, 35, 58, 0.06)",
  md: "0 2px 10px rgba(22, 35, 58, 0.08)",
  lg: "0 10px 28px rgba(22, 35, 58, 0.12)",
} as const;

export const radii = {
  sm: 6,
  md: 10,
  lg: 16,
} as const;

export const fontFamily =
  '"Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Roboto, "Noto Sans", Arial, sans-serif';

export type Palette = typeof palette;
