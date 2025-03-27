import React, { useState } from "react";
import { useCartStore } from "../store/cartStore";

const OrderForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Заказ оформлен:", { name, address });
    clearCart(); // Очищаем корзину
    setSuccessMessage("Заявка отправлена!"); // Устанавливаем сообщение
    setName(""); // Сбрасываем имя
    setAddress(""); // Сбрасываем адрес
    setTimeout(() => setSuccessMessage(""), 10000); // Убираем сообщение через 3 секунды
  };

  if (cart.length === 0) {
    return (
      <p style={{ color: "red" }}>
        Корзина пуста. Добавьте товары, чтобы оформить заказ.
      </p>
    );
  }

  return (
    <div>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} className="order-form">
        <h2>Оформление заказа</h2>
        <div className="form-group">
          <label>Имя:</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Адрес:</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          type="submit"
          className="submit-order"
          disabled={!name || !address} // Кнопка активна только при заполнении полей
        >
          Оформить заказ
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
