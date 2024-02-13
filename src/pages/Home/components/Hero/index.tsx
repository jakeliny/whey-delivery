import { Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CircleIcon } from "../../../../components/CicleIcon";
import { HeroContainer } from "./styles";

export function Hero() {
  return (
    <HeroContainer>
      <div className="text">
        <h2>The best supplements to achieve your goal</h2>
        <p>
          With Whey Delivery you receive your supplement wherever you are,
          anytime
        </p>
        <div className="icons">
          <div>
            <CircleIcon text="Secure purchase" color="yellow-dark">
              <ShoppingCart weight="fill" />
            </CircleIcon>
            <CircleIcon text="Fast Delivery" color="yellow">
              <Timer weight="fill" />
            </CircleIcon>
          </div>
          <div>
            <CircleIcon text="Proper packaging" color="text">
              <Package weight="fill" />
            </CircleIcon>
            <CircleIcon text="The best supplements" color="purple">
              <img src="/whey.svg" alt="whey delivery logo" />
            </CircleIcon>
          </div>
        </div>
      </div>
      <div className="image">
        <img src="/home_image.png" alt="Whey Delivery" />
      </div>
    </HeroContainer>
  );
}
