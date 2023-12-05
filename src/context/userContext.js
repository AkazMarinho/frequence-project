import React, { createContext, useState } from "react";
import axios from "axios";
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
      console.log();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const getStudentList = async (tenant) => {
      const [students, setStudents] = useState([]);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}students?tenant=${tenant}`,
          {
            headers: {
              Authorization: "API Key",
              "X-API-KEY": process.env.REACT_APP_API_KEY,
            },
            params: {
              tenant: 110,
            },
          }
        );

        setStudents(response.data);
      } catch (error) {
        console.error("Erro na solicitação:", error);
      }
    };

    getStudentList();
  }, []);

  return (
    <AuthContext.Provider value={{ SignIn, getStudentList, students }}>
      {children}
    </AuthContext.Provider>
  );
};
