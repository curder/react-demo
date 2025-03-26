// 格式化播放量
export function formatCount(count: number) {
  if (count > 100_000) {
    return Math.floor(count / 10_000) + '万'
  } else {
    return count
  }
}

// 格式化图片尺寸
export function formatImageSize(
  url: string,
  width: number,
  height: number = width
) {
  return url + `?param=${width}x${height}`
}
