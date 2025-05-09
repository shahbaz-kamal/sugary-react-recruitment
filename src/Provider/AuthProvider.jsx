import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (userName, password) => {
    const res = await axios.post(
      `https://sugarytestapi.azurewebsites.net/AdminAccount/Login`,
      { UserName: userName, Password: password }
    );
    console.log(res);
    // const data=await res.json()
    // console.log(data)
  };

  const authInfo = { login };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
