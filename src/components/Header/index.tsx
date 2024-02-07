import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartCounter, HeaderContainer, Location } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="headerLogo">
        <img src="/logo.svg" alt="whey delivery logo" />
      </div>
      <div className="buttons">
        <Location>
          <MapPin />
          <p>São Paulo - SP</p>
        </Location>
        <CartCounter>
          <div>5</div>
          <ShoppingCart />
        </CartCounter>
      </div>
    </HeaderContainer>
  );
}
