import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductGallery from "./components/ProductGallery";
import ProductDetail from "./components/ProductDetail";
import Header from "./components/Header";
import CheckoutPage from "./components/CheckOutPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductGallery />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  );
}

export default App;

