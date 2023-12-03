
import {createContext,  useState} from 'react';
import axios from 'axios';
import env from 'react-dotenv';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({})

export function AuthProvider({children}) {

    const URL = env.API_URL;
    const [dataAuth, setDataAuth] = useState([])

    const Navigate = useNavigate();

    const Signin = async (data) => {
        const id = data.id;
        const password = data.password;
//333530590134
//1234
        const response = await axios.post(`${URL}/api/v1/admin/login`,
        {
            'cnpj' : id,
            'password':password
        },
        ).then((response) => {
            console.log(response.data);
            Navigate('/')
            
        }).catch((error) => {
            console.log(error.name);
        }).finally(() => {
            
        })
    }

    // const validation = async () => {
    //     const validatiorReponse = await response;
    // }

    // useEffect(() => {
    //     Signin();
    // }, [])
  return (
    <AuthContext.Provider value={{Signin}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider