import React from 'react';
import "./ProductCard.css"

const ProductCard = ({ product }) => {
    return (
        <div className='product-card w-[15rem] m-3 transition-all cursor-pointer hover:scale-105'>
            <div className="h-[20rem]">
                <img
                    className='w-full h-full object-cover object-left-top rounded-lg'
                    src={product.imageUrl}
                    alt="Product"
                />
            </div>
            <div className='textPart bg-white p-3' >
                <div>
                    <p className='font-bold opacity-60'>
                        {product.brand}
                    </p>
                    <p>{product.title}</p>
                </div>
                <div>
                    <p className='font-semibold'>{product.price}</p>
                    <p className='line-through opacity-50'>{product.discountPersent}%</p>
                    <p className='text-green-600 font-semibold'>{product.discountedPrice}</p>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;
