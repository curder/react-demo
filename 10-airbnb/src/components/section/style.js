import styled from "styled-components";

export const SectionContainer = styled.section`
    color: #222;

    .title {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 16px;
    }

    .sub-title {
        font-size: 16px;
        margin-bottom: 20px;
        color:${state => state.theme.textColor.primary};
    }
`;