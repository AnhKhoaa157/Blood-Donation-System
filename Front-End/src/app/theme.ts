import type { ThemeConfig } from "antd";
import { palette, radii } from "../styles/palette";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: palette.primary,
    colorLink: palette.link,
    colorLinkHover: palette.primaryHover,
    colorSuccess: palette.success,
    colorWarning: palette.warning,
    colorError: palette.error,
    colorInfo: palette.info,
    colorTextBase: palette.textPrimary,
    colorTextSecondary: palette.textSecondary,
    colorTextTertiary: palette.textMuted,
    colorBgBase: palette.surface,
    colorBgLayout: palette.bg,
    colorBgContainer: palette.surface,
    colorBgElevated: palette.surface,
    colorBorder: palette.border,
    colorBorderSecondary: palette.borderStrong,
    fontFamily:
      '"Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Roboto, "Noto Sans", Arial, sans-serif',
    borderRadius: radii.md,
    borderRadiusLG: radii.lg,
    borderRadiusSM: radii.sm,
    controlHeight: 40,
    boxShadow:
      "0 2px 10px rgba(22, 35, 58, 0.08)",
    boxShadowSecondary:
      "0 1px 2px rgba(22, 35, 58, 0.06)",
    wireframe: false,
  },
  components: {
    Layout: {
      headerBg: palette.surface,
      bodyBg: palette.bg,
      footerBg: palette.textPrimary,
      siderBg: palette.textPrimary,
    },
    Menu: {
      darkItemBg: palette.textPrimary,
      darkItemSelectedBg: palette.primary,
      darkItemHoverBg: "rgba(255,255,255,0.08)",
    },
    Button: {
      primaryShadow: "none",
      dangerShadow: "none",
      defaultShadow: "none",
    },
    Card: {
      boxShadowTertiary: "0 1px 2px rgba(22, 35, 58, 0.06)",
    },
    Table: {
      headerBg: palette.surfaceAlt,
      headerColor: palette.textPrimary,
      rowHoverBg: palette.surfaceAlt,
    },
    Tag: {
      defaultBg: palette.neutralBg,
      defaultColor: palette.neutral,
    },
  },
};
