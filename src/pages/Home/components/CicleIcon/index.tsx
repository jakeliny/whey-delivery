import { ShoppingCart, Timer, Package } from "@phosphor-icons/react";
import { CicleIconWithText, CircleIconContainer } from "./styles";
import { DefaultTheme } from "styled-components";

interface CircleIconProps {
  color: keyof DefaultTheme["color"];
  icon: "shoppingCart" | "Package" | "Timer" | "Whey";
  text: string;
}

function iconSwitch(icon: string) {
  switch (icon) {
    case "shoppingCart":
      return <ShoppingCart />;
    case "Package":
      return <Package />;
    case "Timer":
      return <Timer />;
    case "Whey":
      return <img src="/whey.svg" alt="whey delivery logo" />;
    default:
      return <ShoppingCart />;
  }
}

export function CircleIcon({ color, icon, text }: CircleIconProps) {
  return (
    <CicleIconWithText className="circleIcon">
      <CircleIconContainer color={color}>
        {iconSwitch(icon)}
      </CircleIconContainer>
      <p>{text}</p>
    </CicleIconWithText>
  );
}
