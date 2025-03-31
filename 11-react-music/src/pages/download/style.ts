import styled from 'styled-components'
export const DownloadWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

  .qrcode {
    position: fixed;
    top: 395px;
    right: 25px;
    z-index: 10;
    padding: 16px 18px 9px;
    font-size: 12px;
    color: #333;
    text-align: center;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 50%);

    .qrcode-img {
      width: 100px;
      height: 100px;
    }

    .text {
      margin-top: 10px;
    }
  }

  .content {
    position: relative;
    padding-top: 80px;
    background-color: #222;

    .main {
      position: relative;
      width: 1100px;
      margin: 0 auto;

      .download-qrcode {
        position: absolute;
        top: 152px;
        right: 0;
        bottom: 0;
        left: 731px;
        width: 164px;
        height: 195px;

        .qrcode-img {
          width: 164px;
          height: 164px;
        }
      }

      .download-pc {
        left: -578px;
      }

      .download-qrcode::before {
        position: absolute;
        bottom: -18px;
        left: 50%;
        width: 0;
        height: 0;
        border: 10px solid;
        content: '';
        transform: translateX(-50%);
        border-color: #fff transparent transparent;
      }

      .main-pc,
      .main-mobile {
        display: inline-block;
        vertical-align: middle;

        .title {
          margin-bottom: 23px;
          font-size: 22px;
          color: #fff;
          text-align: center;
          opacity: 0.8;
        }

        .type {
          margin: 20px auto;
          text-align: center;

          .info {
            font-size: 16px;
            color: #eee;
            text-align: center;
          }

          .icon {
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 5px;
            vertical-align: middle;
          }

          .text {
            display: inline-block;
            vertical-align: middle;
          }

          .mac {
            background: url('@/assets/image/download/icon-mac.png') no-repeat;
            background-size: contain;
          }

          .windows {
            margin-left: 30px;
            background: url('@/assets/image/download/icon-windows.png')
              no-repeat;
            background-size: contain;
          }

          .iphone {
            background: url('@/assets/image/download/icon-iphone.png') no-repeat;
            background-size: contain;
          }

          .android {
            margin-left: 30px;
            background: url('@/assets/image/download/icon-android.png')
              no-repeat;
            background-size: contain;
          }
        }

        .download-btn {
          width: 300px;
          height: 65px;
          margin: 0 auto 130px;
          font-size: 22px;
          line-height: 65px;
          color: #d10000;
          text-align: center;
          cursor: pointer;
          background-color: #fff;
          border-radius: 65px;
          box-sizing: content-box;

          .icon {
            display: inline-block;
            width: 21px;
            height: 21px;
            margin-right: 3px;
            vertical-align: middle;
            background: url('@/assets/image/download/small-qrcode.png')
              no-repeat;
            background-size: 100% 100%;
          }

          .text {
            display: inline-block;
            vertical-align: middle;
          }
        }

        .download-btn:hover {
          opacity: 0.7;
        }
      }

      .main-pc {
        .img {
          width: 464px;
          height: 273px;
        }
      }

      .main-mobile {
        margin-left: 280px;

        .img {
          width: 246px;
          height: 273px;
        }
      }
    }
  }

  .group {
    background-color: #fff;
    border-bottom: 1px solid #e3e3e3;

    .group-container {
      width: 1000px;
      margin: 0 auto;
    }
  }

  .quku,
  .star,
  .social-contact,
  .real-time,
  .distinguish {
    padding: 122px 0;

    .content {
      display: inline-block;
      width: 50%;
      vertical-align: middle;
      background-color: #fff;

      .title {
        font-size: 40px;
        font-weight: normal;
        text-align: left;
      }

      .text {
        margin-top: 5px;
        font-size: 16px;
        color: #666;
        text-align: left;

        .attract {
          color: #c00;
        }
      }
    }

    .img {
      display: inline-block;
      width: 50%;
      vertical-align: middle;
    }
  }

  .quku,
  .social-contact,
  .distinguish {
    padding-right: 150px;
    padding-left: 150px;
  }

  .star,
  .real-time {
    padding-right: 130px;
    padding-left: 130px;
    background-color: #f8f8f8;

    .content {
      background-color: #f8f8f8;

      .title,
      .text {
        padding-left: 40px;
      }
    }
  }
`
