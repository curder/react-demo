import styled from 'styled-components'
export const AlbumItemWrapper = styled.div`
  .album-cover {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    /* margin-top: 15px; */

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 12px;
    width: 100px;

    .album-name {
      color: #000;
    }

    .album-artist {
      color: #666;
    }
  }
`
