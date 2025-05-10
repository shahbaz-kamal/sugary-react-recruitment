import React from 'react';

const ProductCard = ({ product }) => {
  const {
    Id,
    CoverPhoto,
    Title,
    VariantTitle,
    BrandName,
    SalesPrice,
    SalesPriceInUsd
  } = product;

  const imageUrl = CoverPhoto
    ? `https://d1wh1xji6f82aw.cloudfront.net/${CoverPhoto}` // Update with your actual base path
    : 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <div key={Id} className="border rounded-xl shadow hover:shadow-lg transition p-4 bg-white">
      <img
        src={imageUrl}
        alt={Title}
        className="h-48 w-full object-cover rounded-md mb-4"
      />

      <h3 className="text-lg font-bold text-gray-800">{Title}</h3>

      {VariantTitle && (
        <p className="text-sm text-gray-500 mb-1 italic">{VariantTitle}</p>
      )}

      <p className="text-sm text-gray-600 mb-1">
        <span className="font-semibold">Brand:</span> {BrandName || 'N/A'}
      </p>

      <p className="text-lg text-emerald-600 font-semibold">
        ৳ {SalesPrice?.toFixed(2)}{" "}
        <span className="text-sm text-gray-500">(${SalesPriceInUsd?.toFixed(2)})</span>
      </p>
    </div>
  );
};

export default ProductCard;
