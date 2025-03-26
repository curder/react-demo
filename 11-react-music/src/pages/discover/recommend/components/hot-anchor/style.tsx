import styled from 'styled-components'

export const HotAnchorWrapper = styled.div`
  margin-top: 30px;

  .anchor-list {
    margin-top: 20px;
    padding: 20px;

    .anchor {
      display: flex;
      margin-bottom: 10px;
      width: 210px;
      .image {
        img {
          width: 40px;
          height: 40px;
        }
      }

      .info {
        width: 160px;
        margin-left: 8px;
        line-height: 21px;
        .name {
          color: #000;
          margin-top: 3px;
        }

        .position {
          color: #666;
        }
      }
    }
  }
`
