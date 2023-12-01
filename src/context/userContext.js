import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const SignIn = async (id, password) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL_BASE_API}login`,
        {
          id: id,
          password: password,
        }
      );
      console.log(managerId);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ SignIn }}>{children}</AuthContext.Provider>
  );
};
