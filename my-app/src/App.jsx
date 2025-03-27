import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useCartStore } from "./store/cartStore";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const App = () => {
  const menuItems = [
    {
      id: 1,
      name: "Пицца",
      price: 2500,
      description: "Вкусная итальянская пицца с сыром и томатами.",
      image:
        "https://avatars.dzeninfra.ru/get-zen_doc/4347415/pub_650fbeb496547f01a00f91c7_650fbf95dfe02a15fafb4dc8/scale_1200",
    },
    {
      id: 2,
      name: "Суши",
      price: 2700,
      description: "Свежие суши с лососем и авокадо.",
      image:
        "https://i.pinimg.com/474x/2f/ba/4e/2fba4e8d1d4f5718039f447e66bf174f.jpg",
    },
    {
      id: 3,
      name: "Бургер",
      price: 2300,
      description: "Сочный бургер с говядиной и свежими овощами.",
      image:
        "https://burgerking.kz/uploads/menuproducts/image/big_1628580610.png",
    },
    {
      id: 4,
      name: "Паста",
      price: 1450,
      description: "Итальянская паста с соусом болоньезе.",
      image:
        "https://i.pinimg.com/474x/23/e6/6d/23e66d490383247088f31b08ed91719d.jpg",
    },
    {
      id: 5,
      name: "Салат Цезарь",
      price: 350,
      description: "Классический салат с курицей и соусом Цезарь.",
      image:
        "https://i.pinimg.com/474x/7f/04/0d/7f040d091667c8fbd35adf57e3e3e7f3.jpg",
    },
    {
      id: 6,
      name: "Шашлык",
      price: 1600,
      description: "Сочный шашлык из утки с луком.",
      image:
        "https://i.pinimg.com/474x/03/14/53/031453f0052db1fd0cb3e2216948a291.jpg",
    },
    {
      id: 7,
      name: "Чизкейк",
      price: 1400,
      description: "Нежный чизкейк с клубничным соусом.",
      image:
        "https://i.pinimg.com/474x/85/a2/94/85a294815be36a2847ad60cd9bfae62a.jpg",
    },
    {
      id: 8,
      name: "Лимонад",
      price: 600,
      description: "Освежающий лимонад с мятой и лимоном.",
      image:
        "https://i.pinimg.com/474x/7e/4a/36/7e4a365c22b5b59bffc6e0eee61b891b.jpg",
    },
  ];

  const cartCount = useCartStore((state) => state.cart.length);

  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Сайт для заказа еды</h1>
          <nav className="nav-buttons">
            <Link to="/" className="nav-button menu">
              Меню
            </Link>
            <Link to="/cart" className="nav-button cart">
              Корзина ({cartCount})
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Menu items={menuItems} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
