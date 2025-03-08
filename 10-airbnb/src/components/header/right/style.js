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
        position: relative;
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

        ${props => props.theme.mixin.boxShadow}

        .panel {
            position: absolute;
            right: 0;
            top: 60px;
            width: 240px;
            background-color: #fff;
            border-radius: 8px;
            color: #666;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
            
            .top, .bottom {
                padding: 10px 0;

                .item {
                    height: 40px;
                    line-height: 40px;
                    padding: 0 16px;
                    &:hover {
                        background-color: #f5f5f5;
                    }
                }
            }

            .top {
                border-bottom: 1px solid #ddd;
            }
        }


    }
`