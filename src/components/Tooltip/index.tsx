import { ShoppingCart } from "@phosphor-icons/react";
import { TooltipContainer } from "./style";

export function Tooltip() {
  return (
    <TooltipContainer>
      <ShoppingCart />
      <p>Product added to cart!</p>
    </TooltipContainer>
  );
}
