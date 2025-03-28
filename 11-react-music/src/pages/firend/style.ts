import styled from 'styled-components'
export const FriendWrapper = styled.div`
  width: 100%;
  background-color: #f5f5f5;

  .friend-login {
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;

    .login-content {
      position: relative;
      width: 902px;
      height: 414px;
      padding-top: 104px;
      margin: 0 auto;
      background: url(${require('@/assets/images/friend/notlogin.jpg')})
        no-repeat;
      background-position: 0 104px;

      .login-btn {
        position: absolute;
        top: 364px;
        left: 535px;
        width: 167px;
        height: 49px;
        text-indent: -9999px;
        cursor: pointer;
        background: url(${require('@/assets/images/friend/notlogin.jpg')})
          no-repeat;
        border: none;
        outline: none;
        background-position: 0 9999px;
      }

      .login-btn:hover {
        background-position: 0 -430px;
      }
    }
  }
`
