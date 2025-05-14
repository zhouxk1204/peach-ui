import { DEFAULT_COLORS } from './constants';
import { shadeColor } from './utils';

/**
 * 更新主题的函数，通过修改 CSS 变量实现动态主题。
 * @param config 自定义的主题配置
 */
export function updateTheme(config: ThemeConfig) {
  // 提取配置
  const {
    primaryColor = DEFAULT_COLORS.primaryColor, 
    successColor = DEFAULT_COLORS.successColor,
    infoColor = DEFAULT_COLORS.infoColor,
    warningColor = DEFAULT_COLORS.warningColor,
    dangerColor = DEFAULT_COLORS.dangerColor,
    textColor = DEFAULT_COLORS.textColor,
    backgroundColor = DEFAULT_COLORS.backgroundColor,
    mutedBackgroundColor = DEFAULT_COLORS.mutedBackgroundColor,
    borderRadius = DEFAULT_COLORS.borderRadius,
    borderColor = DEFAULT_COLORS.borderColor,
    disabledBackgroundColor = DEFAULT_COLORS.disabledBackgroundColor,
    disabledTextColor = DEFAULT_COLORS.disabledTextColor,
  } = config;

  // 生成主色的 hover 和 active 状态
  const primaryHover = shadeColor(primaryColor, -10);
  const primaryActive = shadeColor(primaryColor, -20);

  // 生成其他颜色的 hover 和 active 状态
  const successHover = shadeColor(successColor, -10);
  const successActive = shadeColor(successColor, -20);

  const infoHover = shadeColor(infoColor, -10);
  const infoActive = shadeColor(infoColor, -20);

  const warningHover = shadeColor(warningColor, -10);
  const warningActive = shadeColor(warningColor, -20);

  const dangerHover = shadeColor(dangerColor, -10);
  const dangerActive = shadeColor(dangerColor, -20);

  // 更新 CSS 变量
  document.documentElement.style.setProperty('--peach-primary', primaryColor);
  document.documentElement.style.setProperty('--peach-primary-hover', primaryHover);
  document.documentElement.style.setProperty('--peach-primary-active', primaryActive);

  document.documentElement.style.setProperty('--peach-success', successColor);
  document.documentElement.style.setProperty('--peach-success-hover', successHover);
  document.documentElement.style.setProperty('--peach-success-active', successActive);

  document.documentElement.style.setProperty('--peach-info', infoColor);
  document.documentElement.style.setProperty('--peach-info-hover', infoHover);
  document.documentElement.style.setProperty('--peach-info-active', infoActive);

  document.documentElement.style.setProperty('--peach-warning', warningColor);
  document.documentElement.style.setProperty('--peach-warning-hover', warningHover);
  document.documentElement.style.setProperty('--peach-warning-active', warningActive);

  document.documentElement.style.setProperty('--peach-danger', dangerColor);
  document.documentElement.style.setProperty('--peach-danger-hover', dangerHover);
  document.documentElement.style.setProperty('--peach-danger-active', dangerActive);

  // 更新其他状态色
  document.documentElement.style.setProperty('--peach-text', textColor);
  document.documentElement.style.setProperty('--peach-bg', backgroundColor);
  document.documentElement.style.setProperty('--peach-bg-muted', mutedBackgroundColor);

  // 更新禁用状态颜色
  document.documentElement.style.setProperty('--peach-disabled-bg', disabledBackgroundColor);
  document.documentElement.style.setProperty('--peach-disabled-text', disabledTextColor);

  // 更新边框、圆角等
  document.documentElement.style.setProperty('--peach-border-radius', borderRadius);
  document.documentElement.style.setProperty('--peach-border', borderColor);
}
