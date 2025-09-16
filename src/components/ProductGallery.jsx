import React, { useContext, useEffect, useState } from 'react'
import "./Styles.css"
import { Link } from 'react-router-dom';
import { CartContext } from './AppContext';

const ProductGallery = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = "https://fakestoreapi.com/products";
     const {addToCart} = useContext(CartContext);
    

    useEffect (()=> {
        const fetchProducts = async () => {
            try {
               const res = await fetch(apiUrl);
               if (!res.ok) {
                throw new Error('Network response not ok');
               }
               const data = await res.json();
               setProducts(data);
               setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='product-gallery'>
           <h1>Product Gallery</h1>
           <div className='product-list'>
            {products.map(product => (
                <div key={product.id} className='product-card'>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.title} className='product-image'/>
                    </Link>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                     <button onClick={()=>addToCart(product)}>Add to Cart</button>
                </div>
            ))}
           
           </div>
        </div>
    );
}

export default ProductGallery;

