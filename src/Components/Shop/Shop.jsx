import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const Shop = () => {
    const products = useLoaderData();
    // card button handler
    const handleAddToCart = (id) => {
        console.log(id)
    }
    return (
        <div className='product-container'>
            {
                products.map(product => <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                />)
            }
        </div>
    );
};

export default Shop;