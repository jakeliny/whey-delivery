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
      return <ShoppingCart weight="fill" />;
    case "Package":
      return <Package weight="fill" />;
    case "Timer":
      return <Timer weight="fill" />;
    case "Whey":
      return <img src="/whey.svg" alt="whey delivery logo" />;
    default:
      return <ShoppingCart weight="fill" />;
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
