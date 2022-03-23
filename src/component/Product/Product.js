import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = ({ product, handaleAddToCart }) => {
    // const {product,handaleAddToCart}=props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>price: ${price}</p>
                <p><small>seller{seller}</small></p>
                <p><small>Ratings: {ratings} star</small></p>
            </div>
            <button onClick={() => handaleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;