import { CicleIconWithText, CircleIconContainer } from "./styles";
import { DefaultTheme } from "styled-components";

interface CircleIconProps {
  color: keyof DefaultTheme["color"];
  children: React.ReactNode;
  text: string;
}

export function CircleIcon({ color, children, text }: CircleIconProps) {
  return (
    <CicleIconWithText className="circleIcon">
      <CircleIconContainer color={color}>{children}</CircleIconContainer>
      <p>{text}</p>
    </CicleIconWithText>
  );
}
