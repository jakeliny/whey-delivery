import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0;

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`;

export const CartCounter = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.color["yellow-light"]};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    background-color: ${(props) => props.theme.color["yellow-dark"]};
    color: #fff;
    border-radius: 100%;
    width: 20px;
    height: 20px;

    ${(props) => props.theme.FontText.small};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -8px;
    right: -8px;
  }

  svg {
    color: ${(props) => props.theme.color["yellow-dark"]};
    font-size: 1.4rem;
  }
`;

export const Location = styled.div`
  width: 133px;
  height: 38px;
  background-color: ${(props) => props.theme.color["purple-light"]};
  padding: 8px;
  color: ${(props) => props.theme.color["purple-dark"]};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    ${(props) => props.theme.FontText.small};
  }
`;
