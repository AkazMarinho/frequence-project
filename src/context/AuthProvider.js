
import { createContext, useState} from "react";
import axios from "axios";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const URL = env.API_URL;
  const Navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  const [dataAuth, setAuth] = useState();

  const isLogin = async () =>{
    const localData = { 
      "keyAuth" : localStorage.getItem("keyAuth"), //seta em local storage a apikey do usuario,
      "tenant" : localStorage.getItem("tenant"), //seta em local storage o tenant do usuario
  }
    try{

      const response = await axios.get(`${URL}v1/validate-api-key`,{
        headers: {
          'Content-Type': 'application/json',
          "X-API-KEY" : localData.keyAuth
        },
        params: {
            "tenant": localData.tenant,
        }
      });

      if (response.status !== 200) {
        Navigate('./login')
      }

    }
    catch(error){
      console.log(error);
      // Navigate('./login')
      localStorage.setItem("log",false);
      window.location.reload();
    }
  }

  const [errorSignin, setErrorSignin] = useState(null)
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
      }
    } catch (error) {
      setLoader(false);
      if (error.response && error.response.status === 400) {
        setErrorSignin("errorBadRequest");
        console.log(error.response.status);
      } else {
        setErrorSignin("errorConect");
      }

    }
  };

  return (
    <AuthContext.Provider
      value={{ Signin, setAuth, dataAuth, setLoader, loader,isLogin, errorSignin, setErrorSignin}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;