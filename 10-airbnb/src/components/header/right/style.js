import styled from "styled-components";

export const RightContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.textColor.primary};

    .buttons {
        display: flex;
        align-items: center;

        .btn {
            height: 18px;
            line-height: 18px;
            padding: 12px 15px;
            cursor: pointer;
            border-radius: 22px;

            &:hover {
                background: #f5f5f5;
            }
        }
    }

    .profile {
        display: flex;
        width: 77px;
        height: 42px;
        margin-right: 24px;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 25px;
        background-color: #fff;
        cursor: pointer;
    }
`