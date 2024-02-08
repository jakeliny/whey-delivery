import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

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

export function Footer() {
  return (
    <FooterContainer>
      <p>
        Developed by <a href="https://jakeliny.com"> Jakeliny Gracielly</a>
      </p>
    </FooterContainer>
  );
}
