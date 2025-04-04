import styled from "styled-components";

export const RoomItemContainer = styled.div`
    width: 25%;
    padding: 8px;
    box-sizing: border-box;

    .inner {
        width: 100%;
    }

    .cover {
        position: relative;
        box-sizing: border-box;
        padding: 66.66% 8px 0;
        border-radius: 3px;
        overflow: hidden;

        img {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .description {
        margin: 10px 0 5px;
        font-size: 12px;
        font-weight: 700;
        color: #39576a;
    }

    .title {
        font-size: 16px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .price {
        margin: 8px 0;
    }

    .bottom {
        display: flex;
        align-items: center;
        font-size: 12px;
        font-weight: 600;
        color: ${state => state.theme.textColor.primary};

        .count {
            margin: 0 2px 0 4px;
        }

        .MuiRating-decimal {
            margin-right: -3px;

        }
    }
`;

export default RoomItemContainer;