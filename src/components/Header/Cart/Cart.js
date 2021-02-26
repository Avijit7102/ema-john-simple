import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const price = cart.reduce((total, prd) => total + prd.price, 0);
    let price = 0;
    for(let i = 0; i < cart.length; i++)
    {
        const product = cart[i];
        price = price + product.price;
    }
    let shipping = 0;
    if(price > 35){
        shipping = 0;
    }
    else if(price > 15){
        shipping = 4.99;
    }
    else if(price > 0){
        shipping = 12.99;
    }
    const tax = (price / 10).toFixed(2);
    const grandTotal = (price + shipping + Number(tax).toFixed(2));
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {price}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total price: {grandTotal}</p>
        </div>
    );
};

export default Cart;