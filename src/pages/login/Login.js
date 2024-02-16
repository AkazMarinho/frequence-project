import {useEffect, useState } from "react";
import { Input } from "../../Layout/input";
import { Loader } from "../../Layout/Loader";
import style from './Login.module.css'

import  {ButtonLoading} from "../../StyledComponents/ButtonLoading.style.js";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export function Login(){

    const {Signin, setLoader, loader,  errorSignin, setErrorSignin} = useContext(AuthContext)
    const [data, setData] = useState();

    const [error, setError] = useState(null)

    useEffect(()=>{
        if(errorSignin && errorSignin === "errorConect"){
            setError("errorConect")
        } else if(errorSignin === "errorBadRequest"){
            setError("badRequest")
        }
    }, [errorSignin])

    // CNPJ: 333530590134
    // SENHA: 1234
    // TENANT: 1234

    const onSubmit = (e) => {
        e.preventDefault();
        Signin(data);
        setLoader(true)
        setError(null)

    } 

    const handleOnChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    return(
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className=" w-[880px] h-[482px] bg-[#4983D4] flex justify-center items-center rounded-[10px] relative">

                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[45px] left-[46px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[50px] right-[90px] w-[94px] h-[94px] z-[1]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[30px] left-[20px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[80px] right-[40px] w-[94px] h-[94px]"></div>

                <form className="w-[522px] h-[405px] bg-[#F5F6F8] flex flex-col justify-around items-center p-[30px] rounded-[10px] z-[2] relative">
                    {errorSignin === 'errorConect' && (
                        <div className={style.errorContent}>
                            <div className={style.close}>
                                <button 
                                    onClick={() => {
                                        setErrorSignin(null)
                                    }}
                                >
                                    <IoIosCloseCircleOutline />
                                </button>
                            </div>
                            <span>Erro ao conectar ao servidor</span>
                            <a href="mailto:softwarev3house@gmail.com" target="_blank" rel="noreferrer">
                                <button className={style.button}>
                                     <span className="text-[#ffffff] text-[16px]">Contactar desenvolvedores</span> 
                                </button>
                            </a>
                        </div>
                        
                    )}


                    <h1 className="text-[28px] font-bold">Entrar</h1>

                    <div>
                        <Input 
                            label='ID de usuario' 
                            name='id' 
                            type='text' 
                            placeholder='Digite seu  ID de usuario'
                            handleOnChange={handleOnChange}
                        />
                    </div>

                    <div>
                        <Input 
                            label='Senha' 
                            name='password' 
                            type='password' 
                            placeholder='Digite seu senha'
                            handleOnChange={handleOnChange}
                        />
                    </div>

                    {error === "badRequest" && 
                        <p className="text-[#FF0000] font-bold">Usuário ou senha incorreta!</p>
                    }

                    <ButtonLoading onClick={onSubmit} >
                        <span>Entrar</span>
                        {loader ? <Loader/> : <></>}
                    </ButtonLoading>

                    {/* {loader ? <Loader/> : <></>} */}

                </form>
            </div>

        </div>
    )
}