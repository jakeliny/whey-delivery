import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 6rem 0 2rem;

  > p {
    ${(props) => props.theme.FontText.xSmall}
    color: ${(props) => props.theme.color.text};

    a {
      text-decoration: underline;
      color: ${(props) => props.theme.color.yellow};
      &:hover {
        color: ${(props) => props.theme.color["yellow-dark"]};
      }
    }
  }
`;
