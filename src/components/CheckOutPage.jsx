import React, { useContext } from "react";
import { CartContext } from "./AppContext";
import "./CheckoutPageStyle.css";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty. Please add some products first.</p>
      ) : (
        <div>
          <ul className="checkout-list">
            {cart.map((item, index) => (
              <li key={index} className="checkout-item">
                <img src={item.image} alt={item.title} className="checkout-img" />
                <div className="checkout-info">
                  <h3>{item.title}</h3>
                  <p>${item.price}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="checkout-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button
              className="checkout-btn"
              onClick={() => clearCart(alert("Thank you for your purchase!"))}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
