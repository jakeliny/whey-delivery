import { CircleIcon } from "../CicleIcon";
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
            <CircleIcon
              icon="shoppingCart"
              text="Secure purchase"
              color="yellow-dark"
            />
            <CircleIcon icon="Timer" text="Fast Delivery" color="yellow" />
          </div>
          <div>
            <CircleIcon icon="Package" text="Proper packaging" color="text" />
            <CircleIcon
              icon="Whey"
              text="The best supplements"
              color="purple"
            />
          </div>
        </div>
      </div>
      <div className="image">
        <img src="/home_image.png" alt="Whey Delivery" />
      </div>
    </HeroContainer>
  );
}
