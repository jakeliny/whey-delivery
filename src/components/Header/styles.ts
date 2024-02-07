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
  background-color: ${(props) => props.theme["yellow-light"]};

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  div {
    font-size: 0.8rem;
    background-color: ${(props) => props.theme["yellow-dark"]};
    color: #fff;
    border-radius: 100%;
    width: 20px;
    height: 20px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -8px;
    right: -8px;
  }

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 1.4rem;
  }
`;

export const Location = styled.div`
  width: 133px;
  height: 38px;
  background-color: ${(props) => props.theme["purple-light"]};
  padding: 8px;
  color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-size: 0.8rem;
    font-weight: 500;
  }
`;
