import React, { useState, useEffect, useContext } from "react";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CartModal = ({ setShowModal, showModal, cartProductData }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, cartItems } = useContext(AuthContext);

  const {
    Id,
    Title,
    VariantTitle,
    BrandName,
    SalesPrice,
    imageUrl,
    SalesPriceInUsd,
  } = cartProductData || {};

  // Calculate total prices
  const totalPrice = SalesPrice * quantity;
  const totalUsd = SalesPriceInUsd * quantity;

  const handleClose = () => {
    setShowModal(false);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1); // ensure at least 1
  };

  const handleAddToCart = () => {
    const product = {
      Id,
      Title,
      VariantTitle,
      BrandName,
      SalesPrice,
      SalesPriceInUsd,
      imageUrl,
    };

    addToCart(product, quantity);
    Swal.fire({
      title: `${Title} has been added to cart. Quantity: ${quantity}`,
      icon: "success",
      draggable: true,
    });
    handleClose();
  };

  //


  if (!showModal) return null;

  return (
    <dialog
      open
      className="modal bg-black/30 fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
    >
      <div className="modal-box bg-white p-6 rounded-xl max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        >
          <IoClose size={24} />
        </button>

        <img
          src={imageUrl}
          alt={Title}
          className="w-full  object-cover rounded-lg mb-4"
        />

        <h2 className="text-xl font-bold mb-1">{Title}</h2>
        {VariantTitle && <p className="italic text-sm mb-1">{VariantTitle}</p>}
        <p className="text-sm text-gray-600 mb-1">
          <strong>Brand:</strong> {BrandName || "N/A"}
        </p>
        <p className="text-sm mb-4">
          <strong>Price per unit:</strong> ৳ {SalesPrice?.toFixed(2)}{" "}
          <span className="text-xs text-gray-500">
            (${SalesPriceInUsd?.toFixed(2)})
          </span>
        </p>

        <label className="block mb-4">
          Quantity:
          <input
            type="number"
            defaultValue={quantity}
            onChange={handleQuantityChange}
            className="w-full mt-1 px-3 py-2 border rounded-md"
          />
        </label>

        <p className="text-lg font-semibold mb-4">
          Total: ৳ {totalPrice.toFixed(2)}{" "}
          <span className="text-sm text-gray-500">
            (${totalUsd.toFixed(2)})
          </span>
        </p>

        <button
          onClick={handleAddToCart}
          className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent/90 transition"
        >
          Add to Cart
        </button>
      </div>
    </dialog>
  );
};

export default CartModal;
