import React from 'react';
import ProductCard from "./ProductCard";

const Card2 = () => {
    return (
       <div style={{ padding:40}}>
            <ProductCard
            image="https://img.freepik.com/premium-psd/headphone-mockup-head-phone-mockup_797303-653.jpg?ga=GA1.1.2024306213.1746945089&semt=ais_hybrid&w=740"
            title="Cool Headphones"
            price="$69.99"/>
        </div>
    );
};

export default Card2;