import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Header/Products/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey)
    console.log(product);
    return (
        <div>
            <h1>{productKey}Product Detail</h1>
            <Product product = {product}></Product>
        </div>
    );
};

export default ProductDetail;