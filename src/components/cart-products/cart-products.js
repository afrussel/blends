import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import CartItem from "../cart-item";
// import styles from "./cart-products.module.css";

const CartProducts = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartProducts;
