import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CartItemContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";

export function CartItems() {
  const {
    handleAddQuantity,
    handleRemoveQuantity,
    handleRemoveItem,
    cartItems,
  } = useContext(CartContext);

  return (
    <>
      {cartItems.map((item) => (
        <CartItemContainer>
          <div className="image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="content">
            <h2>{item.title}</h2>
            <div className="actions">
              <div className="quantity">
                <button
                  type="button"
                  onClick={() => handleRemoveQuantity(item.id)}
                >
                  <Minus weight="bold" />
                </button>
                <span>{item.quantity}</span>
                <button
                  type="button"
                  onClick={() => handleAddQuantity(item.id)}
                >
                  <Plus weight="bold" />
                </button>
              </div>
              <button
                type="button"
                className="remove"
                onClick={() => handleRemoveItem(item.id)}
              >
                <Trash /> Remove
              </button>
            </div>
          </div>

          <div className="price">
            <p>
              <span>$</span>
              {item.price * item.quantity}
            </p>
          </div>
        </CartItemContainer>
      ))}
    </>
  );
}
