import React from 'react';
import './Product.css';
import mobile from './mobile.avif';
function Product() {
    return (
        <div className='container'>
            <h1>CSS Positions Task</h1>
            <div className="card">
                <img src={mobile} alt="Product"/>
                <h3>Product Name</h3>
                <p className="price">$99.99</p>
            </div>
        </div>
    );
}
export default Product;