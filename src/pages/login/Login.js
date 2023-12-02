import { useEffect } from "react";
import { ButtonSubmit } from "../../Layout/ButtonSubmit";
import { Input } from "../../Layout/input";
import axios from "axios";

import env from "react-dotenv";


export function Login(){

    // CNPJ: 333530590134
    // SENHA: 1234
    // TENANT: 1234

    const API_URL = env.API_URL
    console.log(env.API_URL);

    useEffect(() => {
        axios.post(`https://sfsystem.onrender.com/api/v1/admin/login`,
        {
            'cnpj' : 333530590134,
            'password':1234
        },
        {
            headers: {
                'content-type': 'application/json'
            },
            params : {
                'tenant' : '1234'
            }
        })
        .then((resp) => {
            console.log(resp);
        })
        .catch((err) => console.log(err))
    });

    return(
        <div className="w-full h-full flex justify-center items-center">
            <div className=" w-[880px] h-[482px] bg-[#4983D4] flex justify-center items-center rounded-[10px] relative">

                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[45px] left-[46px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[50px] right-[90px] w-[94px] h-[94px] z-[1]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[30px] left-[20px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[80px] right-[40px] w-[94px] h-[94px]"></div>

                <div className="w-[522px] h-[405px] bg-[#F5F6F8] flex flex-col justify-around items-center p-[30px] rounded-[10px] z-[2]">

                    <h1 className="text-[28px] font-bold">Entrar</h1>

                    <div>
                        <Input label='Email' name='email' type='text' placeholder='Digite seu email'/>
                    </div>

                    <div>
                        <Input label='Senha' name='email' type='password' placeholder='Digite seu senha'/>
                    </div>

                    <ButtonSubmit textBtn='Enviar'/>

                </div>
            </div>

        </div>
    )
}