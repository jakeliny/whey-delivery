import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartCounter, HeaderContainer, Location } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div className="headerLogo">
        <NavLink to="/" title="Home">
          <img src="/logo.svg" alt="whey delivery logo" />
        </NavLink>
      </div>
      <div className="buttons">
        <Location>
          <MapPin weight="fill" />
          <p>São Paulo - SP</p>
        </Location>
        <CartCounter>
          <div>5</div>
          <ShoppingCart weight="fill" />
        </CartCounter>
      </div>
    </HeaderContainer>
  );
}
