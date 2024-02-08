import styled from "styled-components";

export const ProductCardContainer = styled.div`
  background-color: ${(props) => props.theme.color.card};
  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  padding: 2rem;
  width: 25%;
  max-width: calc(25% - 2rem);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .image {
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      color: transparent;
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
    }
  }

  .content {
    > h2 {
      ${(props) => props.theme.FontTitle.small}
      color: ${(props) => props.theme.color.subtitle};
      text-align: center;
    }
    > p {
      text-align: center;
      color: ${(props) => props.theme.color.label};
      ${(props) => props.theme.FontText.small}
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 1rem;

      > p {
        ${(props) => props.theme.FontTitle.medium}
        color: ${(props) => props.theme.color.text};

        span {
          padding-right: 0.2rem;
          color: ${(props) => props.theme.color.text};
          ${(props) => props.theme.FontText.small}
        }
      }

      .quantity {
        background-color: ${(props) => props.theme.color.button};
        border-radius: 6px;
        padding: 0.5rem;

        display: flex;
        align-items: center;
        gap: 0.25rem;

        span {
          color: ${(props) => props.theme.color.title};
          ${(props) => props.theme.FontText.mediumRegular};
          width: 1.25rem;
          text-align: center;
        }

        button {
          background-color: transparent;
          border: none;
          color: ${(props) => props.theme.color.purple};
          ${(props) => props.theme.FontText.largeRegular}

          display: flex;
          align-items: center;
          justify-content: center;

          width: 14px;
          height: 14px;

          &:hover {
            color: ${(props) => props.theme.color["purple-dark"]};
            cursor: pointer;
          }
        }
      }

      .action {
        background-color: ${(props) => props.theme.color["purple-dark"]};
        border-radius: 6px;
        color: ${(props) => props.theme.color.card};
        width: 38px;
        height: 38px;

        cursor: pointer;
        transition: all 0.2s ease;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 22px;
          height: 22px;
        }

        &:hover {
          background-color: ${(props) => props.theme.color.purple};
        }
      }
    }
  }
`;
