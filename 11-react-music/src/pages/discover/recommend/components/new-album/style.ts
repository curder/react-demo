import styled from 'styled-components'
export const NewAlbumWrapper = styled.div`
  margin-top: 50px;

  > .album-content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 11px 37px 0;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }

    .albums {
      width: 640px;
      height: 150px;

      .ant-carousel .slick-slide {
        height: 150px;
        overflow: hidden;
      }

      .album-items {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
