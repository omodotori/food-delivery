import React from "react";
import { useCartStore } from "../store/cartStore";
import OrderForm from "./OrderForm";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();

  return (
    <div className="cart-container">
      <h2>Корзина</h2>
      <p>Всего товаров: {cart.length}</p>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-img" />
          <h4 className="cart-item-name">{item.name}</h4>
          <p className="cart-item-price">{item.price} ₸</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="remove-from-cart"
          >
            Удалить
          </button>
        </div>
      ))}
      <button onClick={clearCart} className="clear-cart">
        Очистить корзину
      </button>
      <OrderForm /> {/* Форма отображается только на странице корзины */}
    </div>
  );
};

export default Cart;
