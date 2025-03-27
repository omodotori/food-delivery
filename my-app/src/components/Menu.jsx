import React, { useState } from "react";
import { useCartStore } from "../store/cartStore";

const Menu = ({ items }) => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [notification, setNotification] = useState("");

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification(`${item.name} добавлен в корзину!`);
    setTimeout(() => setNotification(""), 5000);
  };

  return (
    <div>
      <h2>Меню</h2>
      {notification && <p style={{ color: "green" }}>{notification}</p>}
      <div className="menu-container">
        {items.map((item) => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-img" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price} ₸</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="add-to-cart"
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
