import React, { useEffect, useState } from 'react'
import "./Styles.css"

const ProductGallery = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = "https://fakestoreapi.com/products";

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
                    <img src={product.image} alt={product.title} className='product-image'/>
                    <h2>{product.title}</h2>
                    <p>${product.price}</p>
                </div>
            ))}
           </div>
        </div>
    );
}

export default ProductGallery;

