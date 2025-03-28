import styled from 'styled-components'
export const PlayerBarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .player-bar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const PlayerBarControl = styled.div<{ $isPlaying: boolean }>`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    /* background-position: 0 -165px; // '-204px' */
    background-position: 0
      ${(props) => (props.$isPlaying ? '-165px' : '-204px')};
    &:hover {
      /* background-position: -40px -165px; */
      background-position: -40px
        ${(props) => (props.$isPlaying ? '-165px' : '-204px')};
    }
  }

  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const PlayerBarInfo = styled.div`
  display: flex;
  width: 620px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .artist {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: 0;
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/images/progress_bar.png')}) right
            0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/images/progress_bar.png')})
            left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -4px;
          background: url(${require('@/assets/images/sprite_icon.png')})
            0 -250px;

          &::after {
            display: none;
          }
          &::before {
            display: none;
          }
          &:hover {
            background-position: 0 -280px;
          }
        }
      }

      .time {
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

export const PlayerBarOperator = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 30px;
    height: 25px;
    cursor: pointer;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${require('@/assets/images/pip.png')}) no-repeat;
    &:hover {
      background-position: 0 -25px;
    }
  }

  .favor {
    background-position: -88px -163px;
    &:hover {
      background-position: -88px -189px;
    }
  }

  .share {
    background-position: -114px -163px;
    &:hover {
      background-position: -114px -189px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    width: 162px;
    padding-left: 4px;
    background-position: -147px -248px;

    .btn {
      margin-left: 5px;
    }

    .volume {
      background-position: -4px -248px;
      &:hover {
        background-position: -33px -248px;
      }
    }

    .loop {
      background-position: -67px -248px;
      &:hover {
        background-position: -94px -248px;
      }
    }

    .playlist {
      padding-left: 22px;
      text-align: center;
      color: #666;
      line-height: 27px;
      width: 90px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
    }

    .audio-quality-hover {
      margin-left: 4px;
      width: 70px;
      margin-top: -5px;
      background: url(${require('@/assets/images/audio-quality.png')}) 0 0;
      background-size: 45px 30px;
      &:hover {
        background-image: url(${require('@/assets/images/audio-quality-hover.png')});
      }
    }
  }
`
