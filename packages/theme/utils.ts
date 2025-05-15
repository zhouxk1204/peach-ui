/**
 * 调节颜色明暗，percent 范围 -1 ~ 1，负数变暗，正数变亮
 * @param color 形如 #RRGGBB 的颜色字符串
 * @param percent 调整比例，-1 到 1
 * @returns 调整后的颜色字符串 #RRGGBB
 */
export function shadeColor(color: string, percent: number): string {
  // 校验 color 格式
  if (!/^#([0-9a-fA-F]{6})$/.test(color)) {
    throw new Error('颜色格式错误，应为 #RRGGBB');
  }

  // 限制 percent 范围
  if (percent < -1) percent = -1;
  if (percent > 1) percent = 1;

  const R = parseInt(color.substring(1, 3), 16);
  const G = parseInt(color.substring(3, 5), 16);
  const B = parseInt(color.substring(5, 7), 16);

  const t = percent < 0 ? 0 : 255;
  const p = Math.abs(percent);

  const Rnew = Math.round((t - R) * p + R);
  const Gnew = Math.round((t - G) * p + G);
  const Bnew = Math.round((t - B) * p + B);

  // 拼成 6 位十六进制，补齐0
  const newColor = (Rnew << 16) | (Gnew << 8) | Bnew;
  return `#${newColor.toString(16).padStart(6, '0')}`;
}
