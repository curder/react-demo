import styled from "styled-components";

export const AppWrapper = styled.div`
    .section {
        border: 1px solid red;

        .title {
            font-size: 20px;
            font-weight: bold;
            color: blue;

            &:hover {
                color: red;
                background-color: beige;
            }
        }

        .content {
            font-size: 16px;
        }
    }
    .footer {
        border: 1px solid green;
    }
`