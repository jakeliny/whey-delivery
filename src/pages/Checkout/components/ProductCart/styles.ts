import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  h2 {
    ${(props) => props.theme.FontText.mediumRegular}
    color: ${(props) => props.theme.color.subtitle};
    margin-bottom: 8px;
  }

  .image {
    height: 64px;
    width: 64px;
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

  .actions {
    display: flex;
    gap: 8px;

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

    > button {
      ${(props) => props.theme.FontButton.Medium}
      color: ${(props) => props.theme.color.text};
      background-color: ${(props) => props.theme.color.button};
      text-transform: uppercase;
      border: none;
      border-radius: 6px;
      cursor: pointer;

      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 0.25rem;
      padding: 0 8px;

      > svg {
        color: ${(props) => props.theme.color.purple};
      }

      &:hover {
        background-color: ${(props) => props.theme.color.hover};
      }
    }
  }

  .price {
    ${(props) => props.theme.FontText.mediumBold}
    color: ${(props) => props.theme.color.text};
    width: 70%;

    display: flex;
    justify-content: flex-end;
  }
`;
