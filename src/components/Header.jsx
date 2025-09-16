import React, { useState } from "react";
import "./HeaderStyle.css";
import { CartContext } from "./AppContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  return (
    <header className="header">
      <h2 className="logo">MyShop</h2>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <div className="cart" onClick={() => setShowCart(!showCart)} >
          <Link to="/checkout">
            🛒
            <span className="cart-count">{cart.length}</span>
          </Link>
        </div>
      </nav>
       {showCart && (
        <div className="cart-dropdown">
          <h3>Cart Items</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.title} width="30" height="30" />
                  {item.title} ${item.price}
                </li>
              ))}
            </ul>
            
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
