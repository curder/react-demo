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

// 格式化时间
export function formatTime(time: number) {
  // 毫秒转秒
  time = Math.floor(time / 1000)
  const m = Math.floor(time / 60) // 分
  const s = time - m * 60 // 秒

  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}
