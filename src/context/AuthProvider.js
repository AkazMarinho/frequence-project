
// import {createContext,  useState, useEffect} from 'react';
// import axios from 'axios';
// import env from 'react-dotenv';

// import { useNavigate } from 'react-router-dom';

// export const AuthContext = createContext({}) //cria o contexto AuthContext

// export function AuthProvider({children}) { //children são todos os componentes que serão mostrados por meio do authProvider
//     const URL = env.API_URL; //url da base
//     const Navigate = useNavigate(); //hook que direciona rotas quando especificadas

//     const [loader, setLoader] = useState(false); 
//     const [dataAuth, setAuth] = useState()//retirar

//     const Signin = async (data) => { //realizar a verificação dos dados na api, utilizando dados (data) que vem da tela de login

//         setLoader(true);

//         const id = data.id; //dado de ID
//         const password = data.password; //dado de Senha
        
//         localStorage.setItem("R7sT3pL9oQ2aX1iF5gU0rD8sM6", data.id) //seta em local storage 


//         const response = await axios.post(`${URL}api/v1/admin/login`, //reqeuisição axios de post e corpo com id e senha
//         {
//             'cnpj' : id,
//             'password':password
//         }, //requisição de envio de dados na api
//         ).then((response) => { //resposta da api
//         setLoader(false);

//             console.log(response.data); //mostra dados da api(excluir)
//             localStorage.setItem("log",true); //seta em local storage que o usuario esta logado

//             localStorage.setItem("select", 1); //seta em local storage select como 1, e isso faz que na navbar seja mostrado a primeira seleção assim que for logado

//             localStorage.setItem("keyAuth",response.data.apiKey); //seta em local storage a apikey do usuario
//             localStorage.setItem("tenant",response.data.tenant); //seta em local storage o tenant do usuario
//             Navigate('/'); // direciona da tela de login para a tela home
            
//             // Validation();
            
//         }).catch((error) => {
//             Navigate('/login')
//             console.log(error.name);
//             setLoader(false);
//         })
//     }

//   return (
//     <AuthContext.Provider value={{Signin,setAuth, dataAuth, setLoader, loader}}>{children}</AuthContext.Provider>
//   )
// }

// export default AuthProvider



//----------------------------

import { createContext, useState, useEffect } from "react";
import axios from "axios";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const URL = env.API_URL;
  const Navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [incorrectData, setIncorrectData] = useState(false);
  const [dataAuth, setAuth] = useState();

  const Signin = async (data) => {
    setLoader(true);

    if (!data || !data.id) {
      console.error("Invalid data object or missing 'id' property");
      setLoader(false);
      return;
    }

    const id = data.id;
    const password = data.password;

    localStorage.setItem("R7sT3pL9oQ2aX1iF5gU0rD8sM6", data.id);

    try {
      const response = await axios.post(`${URL}api/v1/admin/login`, {
        cnpj: id,
        password: password,
      });

      setLoader(false);
      console.log(response.data);
      localStorage.setItem("log", true);
      localStorage.setItem("select", 1);
      localStorage.setItem("keyAuth", response.data.apiKey);
      localStorage.setItem("tenant", response.data.tenant);

      if (response.status === 200) {
        Navigate("/");
        window.location.reload();
      } else{
        setIncorrectData(true)

      }
    } catch (error) {
      console.log(error.name);
      setLoader(false);
      setIncorrectData(true)

    }
  };

  return (
    <AuthContext.Provider
      value={{ Signin, setAuth, dataAuth, setLoader, loader, incorrectData, setIncorrectData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;