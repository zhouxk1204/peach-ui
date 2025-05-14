/**
 * 颜色明暗调节函数，用于调整颜色的亮度。
 * @param color 需要调整的颜色 (hex 格式)
 * @param percent 调整的百分比，正值变亮，负值变暗
 * @returns 返回调整后的颜色
 */
export function shadeColor(color: string, percent: number): string {
  const R = parseInt(color.substring(1, 3), 16);
  const G = parseInt(color.substring(3, 5), 16);
  const B = parseInt(color.substring(5, 7), 16);

  const t = percent < 0 ? 0 : 255;
  const p = percent < 0 ? percent * -1 : percent;
  const Rnew = Math.round((t - R) * p + R);
  const Gnew = Math.round((t - G) * p + G);
  const Bnew = Math.round((t - B) * p + B);

  return `#${(1 << 24) | (Rnew << 16) | (Gnew << 8) | Bnew}`.toString().slice(1);
}
