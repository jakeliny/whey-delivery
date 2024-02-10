import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CartItemContainer } from "./styles";
import { Dispatch, SetStateAction } from "react";

interface CartItem {
  image: string;
  title: string;
  price: string;
  quantity: number;
}

interface CartItemProps extends CartItem {
  setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}

export function CartItem({
  image,
  title,
  price,
  quantity,
  setCartItems,
}: CartItemProps) {
  const handleRemoveItem = () => {
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };

  const handleAddQuantity = () => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemoveQuantity = () => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  return (
    <CartItemContainer>
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <div className="actions">
          <div className="quantity">
            <button type="button" onClick={handleRemoveQuantity}>
              <Minus weight="bold" />
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={handleAddQuantity}>
              <Plus weight="bold" />
            </button>
          </div>
          <button type="button" className="remove" onClick={handleRemoveItem}>
            <Trash /> Remove
          </button>
        </div>
      </div>

      <div className="price">
        <p>
          <span>$</span>
          {parseInt(price) * quantity}
        </p>
      </div>
    </CartItemContainer>
  );
}
