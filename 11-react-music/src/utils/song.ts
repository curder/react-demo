export const getSongPlayUrl = (id: number) => {
  if (id === undefined) return ''
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

export interface ILyric {
  time: number
  content: string
}

// 解析歌词
export const parseLyric = (lyricString: string) => {
  const lineStrings = lyricString.split('\n')
  const timeRegExp = /\[\d*:\d*((\.|\:)\d*)*\]/g
  const lyricInfos: ILyric[] = []
  for (const line of lineStrings) {
    const timeResult = line.match(timeRegExp)
    if (!timeResult) continue
    const time = timeResult[0]
    const content = line.replace(time, '').trim()
    // 提取分钟、秒和毫秒
    const minutes = time.match(/\[\d*/i)?.[0].slice(1)
    const seconds =
      time.match(/\:\d*\./i)?.[0].slice(1, -1) ||
      time.match(/\:\d*/i)?.[0].slice(1)
    const milliseconds = time.match(/\.\d*/i)?.[0].slice(1) || '0'

    // 转换为毫秒时间戳
    const timeStamp =
      Number(minutes) * 60 * 1000 +
      Number(seconds) * 1000 +
      Number(milliseconds.padEnd(3, '0'))
    lyricInfos.push({ time: timeStamp, content })
  }
  return lyricInfos
}
