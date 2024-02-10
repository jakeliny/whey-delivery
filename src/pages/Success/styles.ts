import styled from "styled-components";

export const SuccessContainer = styled.div`
  h1 {
    ${(props) => props.theme.FontTitle.large}
    color: ${(props) => props.theme.color["yellow-dark"]};
  }

  > p {
    ${(props) => props.theme.FontText.largeRegular}
    color: ${(props) => props.theme.color.subtitle};
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 60px;
  }

  .informationsBorder {
    background: rgb(219, 172, 44);
    background: linear-gradient(
      90deg,
      rgba(219, 172, 44, 1) 0%,
      rgba(128, 71, 248, 1) 100%
    );
    border-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    padding: 1px;

    min-width: 40%;

    .informations {
      background-color: ${(props) => props.theme.color.background};
      border-radius: 6px;
      border-top-right-radius: 36px;
      border-bottom-left-radius: 36px;
      padding: 40px;

      display: flex;
      flex-direction: column;
      gap: 32px;

      > div {
        display: flex;
        align-items: center;
        gap: 12px;

        > p {
          ${(props) => props.theme.FontText.mediumRegular}
          color: ${(props) => props.theme.color.text};
          b {
            ${(props) => props.theme.FontText.mediumBold}
          }
        }

        svg {
          background-color: ${(props) => props.theme.color.purple};
          color: ${(props) => props.theme.color.background};
          border-radius: 50%;
          padding: 8px;
          font-size: 2rem;
        }
      }
    }
  }
`;
