import styled from "styled-components";

export const TitleWithIconContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme.color["yellow-dark"]};
    font-size: 1.3rem;
  }

  h2 {
    ${(props) => props.theme.FontText.mediumRegular}
    color: ${(props) => props.theme.color.subtitle};
  }

  p {
    ${(props) => props.theme.FontText.small}
    color: ${(props) => props.theme.color.text};
  }
`;
