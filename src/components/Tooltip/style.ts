import styled from "styled-components";

export const TooltipContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: ${(props) => props.theme.color["purple-dark"]};
  padding: 1rem 2rem;
  border-radius: 6px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;

    color: ${(props) => props.theme.color["purple-light"]};
  }

  p {
    color: ${(props) => props.theme.color["purple-light"]};
    ${(props) => props.theme.FontText.mediumBold}
  }
`;
