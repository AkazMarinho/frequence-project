
import {createContext,  useState} from 'react';
import axios from 'axios';
import env from 'react-dotenv';
import { useEffect } from 'react';

// import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext({})

export function AuthProvider({children}) {
    
    // const Navigate = useNavigate();

    function responseLogin(data){
        console.log(data);
    }

    const URL = env.API_URL;
    console.log(URL);

    const [dataAuth, setDataAuth] = useState([])

    const datas = {
        cnpj : 333530590134,
        password:1234
    }

    const Signin = async (data) => { 

        const id = data.id;
        const password = data.password;
        
        console.log(id, password);

//333530590134
//1234
        const response = await axios.post(`${URL}/api/v1/admin/login`,
        {
            'cnpj' : id,
        'password':password
        },
        ).then((response) => {
            setDataAuth(response.data)
            // Navigate('/home')
            console.log(response.data);

        }).catch((error) => {
            console.log(error);
        })


    }

    // useEffect(() => {
    //     Signin();
    // }, [])
  return (
    <AuthContext.Provider value={{Signin}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider