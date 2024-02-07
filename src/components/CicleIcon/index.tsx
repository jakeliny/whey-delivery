import { ShoppingCart, Timer, Package } from "@phosphor-icons/react";
import { CircleIconContainer } from "./styles";

interface CircleIconProps {
  color?: string;
  icon: "shoppingCart" | "Package" | "Timer" | "Whey";
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

export function CircleIcon({ color, icon }: CircleIconProps) {
  return (
    <div className="circleIcon">
      <CircleIconContainer color={color || "text"}>
        {iconSwitch(icon)}
      </CircleIconContainer>
    </div>
  );
}
