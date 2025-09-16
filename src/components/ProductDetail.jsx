import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetailStyle.css";
import { CartContext } from "./AppContext";

const ProductDetail = () => {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {addToCart} = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Network response not ok");
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <Link className="back-link" to="/">⬅ Back to Gallery</Link>
      <div className="detail-card">
        <img src={product.image} alt={product.title} className="detail-image" />
        <div className="detail-info">
          <h1>{product.title}</h1>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Rating:</strong> {product.rating?.rate} ⭐ ({product.rating?.count} reviews)</p>
          <p>{product.description}</p>
          <button onClick={()=> addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
