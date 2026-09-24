import { useState } from "react";
import "./App.css";

function App() {
  const foods = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 150 },
    { name: "Fried Rice", price: 180 },
    { name: "Dosa", price: 100 },
    { name: "Chicken Biryani", price: 250 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  return (
    <div className="container">
      <h1>🍔 Food Delivery Website</h1>

      <h2>Restaurant : Spice Garden</h2>

      <h3>Menu</h3>

      {foods.map((food, index) => (
        <div className="food" key={index}>
          <span>
            {food.name} - ₹{food.price}
          </span>

          <button onClick={() => addToCart(food)}>
            Add to Cart
          </button>
        </div>
      ))}

      <div className="cart">
        <h2>🛒 Cart</h2>

        {cart.length === 0 ? (
          <p>No Items Added</p>
        ) : (
          cart.map((item, index) => (
            <div key={index}>
              {item.name} - ₹{item.price}
            </div>
          ))
        )}

        <h3>Total Items : {cart.length}</h3>

        <button className="place-order">
          Place Order
        </button>
      </div>
    </div>
  );
}

export default App;