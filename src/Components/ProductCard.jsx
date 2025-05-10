import React, { useState } from "react";
import { MdShoppingCartCheckout } from "react-icons/md";
import CartModal from "./CartModal";
import useAuth from "../Hooks/useAuth";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);
  const { cartItems } = useAuth();
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
    : "https://via.placeholder.com/300x200?text=No+Image";

  const cartProductData = {
    Id,
    Title,
    VariantTitle,
    BrandName,
    SalesPrice,
    imageUrl,
    SalesPriceInUsd,
  };
  const handleAddToCart = () => {
    setShowModal(true);
  };
  const isAdded = cartItems.find((item) => item.Id === Id);
  console.log(isAdded);

  return (
    <div
      key={Id}
      className="bg-background p-4 rounded-2xl shadow hover:shadow-lg transition duration-300 flex flex-col justify-between"
    >
      <img
        src={imageUrl}
        alt={Title}
        className="h-48 w-full object-cover rounded-xl mb-4"
      />

      <div>
        <h3 className="text-lg font-bold text-text">{Title}</h3>

        {VariantTitle && (
          <p className="text-sm text-text/70 italic mb-1">{VariantTitle}</p>
        )}

        <p className="text-sm text-text/80 mb-1">
          <span className="font-medium text-text">Brand:</span>{" "}
          {BrandName || "N/A"}
        </p>

        <p className="text-lg text-accent font-semibold mb-4">
          ৳ {SalesPrice?.toFixed(2)}{" "}
          <span className="text-sm text-text/60">
            (${SalesPriceInUsd?.toFixed(2)})
          </span>
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-accent hover:bg-accent/90 text-white font-medium py-2 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
        >
          <span className="flex items-center">
            <MdShoppingCartCheckout size={22} />
            <div className=" -top-4  ">
              {isAdded ? `(${isAdded.quantity})` : ""}{" "}
            </div>
          </span>
          {isAdded ? ` Wanna add more?` : "Add to Cart"}
        </button>
      </div>
      {setShowModal && (
        <CartModal
          cartProductData={cartProductData}
          showModal={showModal}
          setShowModal={setShowModal}
        ></CartModal>
      )}
    </div>
  );
};

export default ProductCard;
