import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((total * 10 / 100).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>selected item: {quantity}</p>
            <p>total price: ${total}</p>
            <p>total shipping{shipping}</p>
            <p>tax: {tax}</p>
            <h3>grand total: {grandTotal}</h3>
        </div>
    );
};

export default Cart;