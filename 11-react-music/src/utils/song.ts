export const getSongPlayUrl = (id: number) => {
  if (id === undefined) return ''
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
