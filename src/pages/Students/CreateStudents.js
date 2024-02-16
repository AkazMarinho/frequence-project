import { useEffect, useState } from "react";

import { useContext } from "react";
import { StudentsContext } from "../../context/StudentManager";
import { ButtonSubmit } from "../../Layout/ButtonSubmit";
import { Loader } from "../../Layout/Loader";
import style from './CreateStudent.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io";



import { AuthContext } from "../../context/AuthProvider";
import { ButtonLoading } from "../../StyledComponents/ButtonLoading.style";

export function CreateStudents(){
    
  const {createStudent, loader, resultCreateStudentError, setResultCreateStudentError} = useContext(StudentsContext)
  const Select = localStorage.getItem("select");

  const {isLogin} = useContext(AuthContext)
  useEffect(()=>{
    isLogin()
  },)

    useEffect(() => {
        localStorage.setItem("select", 2); //seta em local storage select como 2, e isso faz que na navbar seja mostrado a segunda seleção
        // console.log(resultCreateStudent);
    })


    const [data, setData] = useState()
    const [menYear, setMenYear] = useState('')
    const [menCPF, setMenCPF] = useState('')

    const handleOnChange = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
    const handleOnChangeYear = (e) => {
        if(e.target.value.length > 4){
            setMenYear('Insira apenas 4 numeros')
        }else (
            setMenYear('')
        )
        setData({...data, [e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        createStudent(data)
    }

    const handleOnChangeCPF = (e) => {
        if(e.target.value.length > 11 ){
            setMenCPF('Insira apenas 11 numeros sem traços ou pontos')
        }else (
            setMenCPF('')
        )
        setData({...data, [e.target.name] : e.target.value})
    }


    
    return(
        <div className="flex bg-[#F1F1F1] p-[30px] w-full ">

            <div  className=" w-full bg-[#4983D4] flex justify-center items-center rounded-[10px] relative p-[30px]">
                {resultCreateStudentError === true && (
                    <div className={style.errorSendData}>
                        <div className={style.close}>
                            <button onClick={()=>setResultCreateStudentError(false)}><IoIosCloseCircleOutline /></button>
                        </div>
                        <span>Ocorreu um erro inesperado, verifique se todos os campos estão preenchidos e tente novamente</span>

                        <button className={style.button} onClick={()=>setResultCreateStudentError(false)}>
                            Ok
                        </button>
                    </div>
                )}
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[45px] left-[46px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[50px] right-[90px] w-[94px] h-[94px] z-[1]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[30px] left-[20px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[80px] right-[40px] w-[94px] h-[94px]"></div>

                <form onSubmit={onSubmit} className=" w-full z-10">
                <h1 className="text-center text-[30px] font-bold ">Criar novo aluno</h1>

                    <label htmlFor='firstName' className="block mb-[6px] text-[18px] font-bold">Primeiro nome</label>
                    <input 
                        type='text' 
                        name='firstName'
                        id='firstName' 
                        placeholder='Insira o primeiro nome'
                        onChange={handleOnChange}
                        className="
                            w-[460px] 
                            h-[38px]
                            outline-none 
                            bg-[#D9D9D9] 
                            p-[8px] 
                            placeholder-[#383838] 
                            placeholder-[16px] 
                            rounded-[5px]
                            drop-shadow-[0_4px_4px_#00000040]
                            mb-[10px]
                        "
                    />

                    <label htmlFor='secondName' className="block mb-[6px] text-[18px] font-bold">Sobrenome</label>
                    <input 
                        type='text' 
                        name='secondName'
                        id='secondName' 
                        placeholder='Insira o segundo nome'
                        onChange={handleOnChange}
                        className="
                            w-[460px] 
                            h-[38px]
                            outline-none 
                            bg-[#D9D9D9] 
                            p-[8px] 
                            placeholder-[#383838] 
                            placeholder-[16px] 
                            rounded-[5px]
                            drop-shadow-[0_4px_4px_#00000040]
                            mb-[10px]
                        "
                    />

                    <label htmlFor='bornYear' className="block mb-[6px] text-[18px] font-bold">Ano de nascimento</label>
                    <input 
                        type='number' 
                        name='bornYear'
                        id='bornYear' 
                        placeholder='Insira o ano de nacimento'
                        maxlength="4"
                        
                        onChange={handleOnChangeYear}
                        className="
                            w-[460px] 
                            h-[38px]
                            outline-none 
                            bg-[#D9D9D9] 
                            p-[8px] 
                            placeholder-[#383838] 
                            placeholder-[16px] 
                            rounded-[5px]
                            drop-shadow-[0_4px_4px_#00000040]
                            mb-[10px]
                        "
                    />
                    <p className="text-[#FF000099] font-bold">{menYear}</p>

                    <label htmlFor='cpf' className="block mb-[6px] text-[18px] font-bold">CPF</label>
                    <input 
                        type='number' 
                        name='cpf'
                        id='cpf' 
                        placeholder='Insira o ano de CPF sem traços ou pontos'
                        maxlength="11"
                        
                        onChange={handleOnChangeCPF}
                        className="
                            w-[460px] 
                            h-[38px]
                            outline-none 
                            bg-[#D9D9D9] 
                            p-[8px] 
                            placeholder-[#383838] 
                            placeholder-[16px] 
                            rounded-[5px]
                            drop-shadow-[0_4px_4px_#00000040]
                            mb-[10px]
                        "
                    />
                    <p className="text-[#FF000099] font-bold">{menCPF}</p>

                    <label htmlFor='email' className="block mb-[6px] text-[18px] font-bold">EMAIL</label>
                    <input 
                        type='email' 
                        name='email'
                        id='email' 
                        placeholder='Insira o email'
                        
                        onChange={handleOnChange}
                        className="
                            w-[460px] 
                            h-[38px]
                            outline-none 
                            bg-[#D9D9D9] 
                            p-[8px] 
                            placeholder-[#383838] 
                            placeholder-[16px] 
                            rounded-[5px]
                            drop-shadow-[0_4px_4px_#00000040]
                            mb-[10px]
                        "
                    />

                    <div className="w-full flex justify-center align-center mt-[20px] mb-[20px]">
                        {/* <ButtonSubmit textBtn='Enviar'/> */}
                        <ButtonLoading>
                            <span>Enviar</span>
                                {loader ? <Loader/> : <></>}
                        </ButtonLoading>

                    </div>

                </form>
            </div>


            
        </div>
    )
}