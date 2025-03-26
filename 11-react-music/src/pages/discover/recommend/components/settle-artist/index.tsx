import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SettleArtistWrapper } from './style'
import RightSectionHeader from '../right-section-header'
import { appShallowEqual, useAppSelector } from '@/store'
import { formatImageSize } from '@/utils/format'
import { Link } from 'react-router-dom'

export interface Artist {
  id: number
  img1v1Url: string
  name: string
  alias?: []
}

interface SettleArtistProps {
  children?: ReactNode
}

const SettleArtist: FC<SettleArtistProps> = (props) => {
  const artists = useAppSelector(
    (state) => state.recommend.artistList,
    appShallowEqual
  )

  return (
    <SettleArtistWrapper>
      <RightSectionHeader
        title="入驻歌手"
        morePath="/discover/artist/signed/"
      />
      <div className="artist-list">
        {artists.map((artist) => {
          return (
            <a href="/singer" key={artist.id} className="item">
              <img src={formatImageSize(artist.img1v1Url, 62)} alt="" />
              <div className="info">
                <div className="singer">{artist.name}</div>
                <div className="desc">
                  {artist.alias?.join('') || artist.name}
                </div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="apply-for">
        <Link to="/recruit">申请成为合伙人</Link>
      </div>
    </SettleArtistWrapper>
  )
}

export default memo(SettleArtist)
