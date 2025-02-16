import styled from "styled-components";
import * as variables from "./style/variables";

export const AppWrapper = styled.div`
.footer {
    border: 1px solid green;
}
`

export const SectionWrapper = styled.div.attrs(props => ({
    $titleSize: props.$titleSize || 20
}))`
    border: 1px solid red;

    .title {
        font-size: ${props => props.$titleSize}px;
        font-weight: bold;
        color: ${variables.primaryColor};

        &:hover {
            color: ${variables.secondaryColor};
            background-color: beige;
        }
    }

    .content {
        font-size: ${props => props.theme.titleSize}px;
    }
`

export const Button = styled.button`
  background-color: ${props => props.$backgroundColor};
  color: ${props => props.color};
  font-size: ${props => props.size || 16}px;
  padding: 10px;
`
export const PrimaryButton = styled(Button)`
  border-radius: 5px;
`