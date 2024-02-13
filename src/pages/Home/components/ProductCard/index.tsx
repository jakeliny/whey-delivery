import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { ProductCardContainer } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export function ProductCard({
  id,
  image,
  title,
  description,
  price,
}: ProductCardProps) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity((state) => state + 1);
  };

  const removeQuantity = () => {
    if (quantity === 1) return;
    setQuantity((state) => state - 1);
  };

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
            <button onClick={() => removeQuantity()}>
              <Minus weight="bold" />
            </button>
            <span>{quantity}</span>
            <button onClick={() => addQuantity()}>
              <Plus weight="bold" />
            </button>
          </div>
          <div
            className="action"
            onClick={() => {
              setQuantity(1);
              addToCart({ id, image, title, price, quantity });
            }}
          >
            <ShoppingCart weight="fill" />
          </div>
        </div>
      </div>
    </ProductCardContainer>
  );
}
