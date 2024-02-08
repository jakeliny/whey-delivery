import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ProductCardContainer } from "./styles";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

export function ProductCard({
  image,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <ProductCardContainer>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="footer">
          <p>
            <span>$</span>
            {price}
          </p>
          <div className="quantity">
            <button>
              <Minus weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus weight="bold" />
            </button>
          </div>
          <div className="action">
            <ShoppingCart weight="fill" />
          </div>
        </div>
      </div>
    </ProductCardContainer>
  );
}
