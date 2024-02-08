import styled, { DefaultTheme } from "styled-components";

export const CicleIconWithText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  p {
    ${(props) => props.theme.FontText.mediumRegular}
    color: ${(props) => props.theme.color.text};
  }
`;

interface ColorProps {
  color: keyof DefaultTheme["color"];
}

export const CircleIconContainer = styled.button<ColorProps>`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  border: 0;

  background-color: ${(props) => props.theme.color[props.color]};

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
