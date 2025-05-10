import React from 'react';

const ProductCard = ({ product }) => {
  const {
    Id,
    CoverPhoto,
    Title,
    VariantTitle,
    BrandName,
    SalesPrice,
    SalesPriceInUsd,
  } = product;

  const imageUrl = CoverPhoto
    ? `https://d1wh1xji6f82aw.cloudfront.net/${CoverPhoto}`
    : 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <div
      key={Id}
      className="bg-background p-4 rounded-2xl shadow hover:shadow-lg transition duration-300"
    >
      <img
        src={imageUrl}
        alt={Title}
        className="h-48 w-full object-cover rounded-xl mb-4"
      />

      <h3 className="text-lg font-bold text-text">{Title}</h3>

      {VariantTitle && (
        <p className="text-sm text-text/70 italic mb-1">{VariantTitle}</p>
      )}

      <p className="text-sm text-text/80 mb-1">
        <span className="font-medium text-text">Brand:</span>{' '}
        {BrandName || 'N/A'}
      </p>

      <p className="text-lg text-accent font-semibold">
        ৳ {SalesPrice?.toFixed(2)}{' '}
        <span className="text-sm text-text/60">
          (${SalesPriceInUsd?.toFixed(2)})
        </span>
      </p>
    </div>
  );
};

export default ProductCard;
