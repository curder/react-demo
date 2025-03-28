import styled from 'styled-components'
export const MyWrapper = styled.div`
  height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f5f5f5;

  .my-login {
    width: 980px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-width: 0 1px;
    border: 1px solid #d3d3d3;

    .login-content {
      position: relative;
      width: 807px;
      height: 268px;
      padding-top: 104px;
      margin: 0 auto;
      background: url(${require('@/assets/images/my/mymusic.png')}) no-repeat;
      background-position: 0 104px;
      background-size: contain;

      .login-btn {
        position: absolute;
        top: 306px;
        left: 482px;
        width: 167px;
        height: 45px;
        text-indent: -9999px;
        cursor: pointer;
        background: url(${require('@/assets/images/my/mymusic.png')}) no-repeat;
        background-position: 0 9999px;
        border: none;
        outline: none;
        /* background-size: contain; */
        &:hover {
          background-position: 0 -278px;
        }
      }
    }
  }
`
