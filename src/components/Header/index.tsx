import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { CartCounter, HeaderContainer, Location } from "./styles";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

export function Header() {
  const { cartQuantity } = useContext(CartContext);
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
        <NavLink to={"/checkout"}>
          <CartCounter>
            <div>{cartQuantity}</div>
            <ShoppingCart weight="fill" />
          </CartCounter>
        </NavLink>
      </div>
    </HeaderContainer>
  );
}
