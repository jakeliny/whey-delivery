import styled from "styled-components";

interface ColorProps {
  color: string;
}

export const CircleIconContainer = styled.button<ColorProps>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 0;

  background-color: ${(props) => props.theme[props.color]};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    color: #fff;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;
