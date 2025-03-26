import Request from '@/services'

export function getBanners() {
  return Request.get({
    url: '/banner'
  })
}
export function getHotRecommends(limit: number = 8) {
  return Request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbums() {
  return Request.get({
    url: '/album/newest'
  })
}

export function getToplist(id: number) {
  return Request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}