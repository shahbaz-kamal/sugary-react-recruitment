import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (userName, password) => {
    setLoading(true)
    const res = await axios.post(
      `https://sugarytestapi.azurewebsites.net/AdminAccount/Login`,
      { UserName: userName, Password: password }
    );
    console.log(res);
    // const data = await res.json();
    if (res.data.Success) {
      localStorage.setItem("accessToken", res.data.Token);
      localStorage.setItem("refreshToken", res.data.RefreshToken);
      setUser(res.data.User);
      // navigate("/dashboard");
      Swal.fire({
        title: "Login Successful",
        icon: "success",
        draggable: true
      });
      setLoading(false)
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
    console.log(res);
    // const data=await res.json()
    // console.log(data)
  };

  const authInfo = { login,user,loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
