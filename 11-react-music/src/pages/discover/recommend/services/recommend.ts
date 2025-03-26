import Request from '@/services'

// 轮播图
export function getBanners() {
  return Request.get({
    url: '/banner'
  })
}

// 热门推荐
export function getHotRecommends(limit: number = 8) {
  return Request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 新碟上架
export function getNewAlbums() {
  return Request.get({
    url: '/album/newest'
  })
}

// 榜单
export function getToplist(id: number) {
  return Request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

// 入驻歌手
export function getArtistList(limit: number = 5) {
  return Request.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
