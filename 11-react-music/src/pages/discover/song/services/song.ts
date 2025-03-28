import Request from '@/services'

// 获取歌曲详情
export function getSongDetail(ids: number) {
  return Request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 获取歌曲歌词
export function getSongLyric(id: number) {
  return Request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}