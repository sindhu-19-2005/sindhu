import React from 'react';
import ProductCard from "./ProductCard";

const Card1 = () => {
    return (
       <div style={{ padding:40}}>
            <ProductCard
            image="https://img.freepik.com/premium-psd/red-headphone-mockup_187299-709.jpg?ga=GA1.1.2024306213.1746945089&semt=ais_hybrid&w=740"
            title="Cool Headphones"
            price="$59.99"/>
        </div>
    );
};   

export default Card1;