import styled from "styled-components";

export const FooterContainer = styled.footer`
    border-top: 1px solid #ddd;
    padding: 40px 0;
    margin-top: 40px;

    .content {
        width: 1032px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
   
        h2 {
            margin-bottom: 20px;
            color: ${state => state.theme.textColor.secondary};
        }

        li.item {
            list-style: none;
            color: ${state => state.theme.textColor.primary};
            margin-top: 10px;
        }
    }
`;