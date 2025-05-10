import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProductCard = ({ id, title, brand, price, priceInUsd, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-square bg-gray-100 overflow-hidden">
                <LazyLoadImage
                    src={imageUrl}
                    alt={title}
                    effect="blur"
                    width="100%"
                    height="100%"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 line-clamp-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-2">{brand}</p>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">${priceInUsd.toFixed(2)}</span>
                    <span className="text-gray-500 text-sm">৳{price.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;