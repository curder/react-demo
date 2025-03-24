import styled from 'styled-components'
export const BannerWrapper = styled.div`
  .banner {
    height: 285px;

    display: flex;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    .image {
      width: 100%;
      height: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(${require('@/assets/images/banner_sprite.png')})
          3px -343px;
        cursor: pointer;

        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: '/download',
  target: '_blank'
})`
  position: absolute;
  z-index: 20;
  right: -1px;
  width: 254px;
  height: 285px;
  background: url(${require('@/assets/images/download.png')});
`
export const BannerControl = styled.div`
  position: absolute;
  display: block;
  left: 0;
  right: 0;
  margin-top: -31px;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/images/banner_sprite.png')});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`
