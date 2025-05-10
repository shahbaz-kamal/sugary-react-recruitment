import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart-from-sugary")) || [];
    setCartItems(storedCart);
  }, []);

  const updateLocalStorageAndState = (cart) => {
    localStorage.setItem("cart-from-sugary", JSON.stringify(cart));
    setCartItems(cart);
  };

  const addToCart = (product, quantity = 1) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart-from-sugary")) || [];

    const index = existingCart.findIndex((item) => item.Id === product.Id);

    if (index !== -1) {
      // Product exists — update quantity and totalPrice
      existingCart[index].quantity += quantity;
      existingCart[index].totalPrice =
        existingCart[index].SalesPrice * existingCart[index].quantity;
    } else {
      // Add new product
      existingCart.push({
        ...product,
        quantity,
        totalPrice: product.SalesPrice * quantity,
      });
    }

    updateLocalStorageAndState(existingCart);
  };
  console.log(cartItems);

  // sidebar should be hidden by default for mobile devices
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setShowSideBar(!isMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const login = async (userName, password) => {
    setLoading(true);
    const res = await axios.post(
      `https://sugarytestapi.azurewebsites.net/AdminAccount/Login`,
      { UserName: userName, Password: password }
    );
    console.log(res);

    if (res.data.Success) {
      localStorage.setItem("accessToken", res.data.Token);
      localStorage.setItem("refreshToken", res.data.RefreshToken);
      // setUser({
      //   UserName: res.data.User.UserName,
      //   profilePhoto: res.data.User.Avatar,
      // });
      localStorage.setItem(
        "user-sugary",
        JSON.stringify({
          UserName: res.data.User.UserName,
          profilePhoto: `https://d1wh1xji6f82aw.cloudfront.net/${res.data.User.Avatar}`,
        })
      );
      setUser({
        UserName: res.data.User.UserName,
        profilePhoto: `https://d1wh1xji6f82aw.cloudfront.net/${res.data.User.Avatar}`,
      });
      // navigate("/dashboard");
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        draggable: true,
      });
      setLoading(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
      setLoading(false);
    }
    console.log(res);
    // const data=await res.json()
    // console.log(data)
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user-sugary");
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user-sugary");
    setLoading(true);
    if (token) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  const authInfo = {
    login,
    user,
    loading,
    logout,
    showSideBar,
    setShowSideBar,
    addToCart,
    cartItems,
    setCartItems,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
