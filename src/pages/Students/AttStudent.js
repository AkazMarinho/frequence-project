import { useState } from "react";
import { ButtonSubmit } from "../../Layout/ButtonSubmit";

import { useContext, useEffect} from 'react';
import { StudentsContext } from '../../context/StudentManager';

export function AttStudent(){

  const {listStudent, listStudents, AttStudent} = useContext(StudentsContext)
  
  const userList = localStorage.getItem("userlist")
  
  
//   console.log("User List " + userList);
  console.log(listStudent);
  const [listMap, setListMap] = useState()
  
  useEffect(() => {
    listStudents();
    // console.log(listStudent.data[userList]);
    setListMap(listStudent.data[userList]);
    console.log(listMap);
  }, [listStudent])

    const [data, setData] = useState()
    const [menYear, setMenYear] = useState('')
    const [menCPF, setMenCPF] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        // AttStudent(data)
    }

    const haldleOnChange = (e) => {
        setData({...data, [e.target.name] : e.target.value});
        console.log(data);
    }

    const handleOnChangeYear = (e) => {
        if (e.target.value.length > 4){
            setMenYear( 'Insira apenas 4 numeros');
        } else {
            setMenCPF('');
        }

        setData({...data, [e.targe.name] : e.target.value})
    }
    const handleOnChangeCPF = (e) => {
        if (e.target.value.length > 4){
            setMenCPF('Insira apenas 11 numeros sem traços ou pontos');
        } else {
            setMenCPF('');
        }

        setData({...data, [e.targe.name] : e.target.value})
    }

    return(
        <div className="flex bg-[#F1F1F1] p-[30px] w-full">

            <div  className=" w-full bg-[#4983D4] flex justify-center items-center rounded-[10px] relative p-[30px]">
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[45px] left-[46px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[50px] right-[90px] w-[94px] h-[94px] z-[1]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[30px] left-[20px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[80px] right-[40px] w-[94px] h-[94px]"></div>

                <form onSubmit={onSubmit} className=" w-full z-10">
                <h1 className="text-center text-[30px] font-bold ">Editar aluno</h1>

                {listMap && <>

                    <label htmlFor='firstName' className="block mb-[6px] text-[18px] font-bold">Primeiro nome (teste)</label>
                    <input 
                        type='text' 
                        name='firstName'
                        id='firstName' 
                        placeholder={listMap.firstName}
                        onChange={haldleOnChange}
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
                        placeholder={listMap.secondName}
                        onChange={haldleOnChange}
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
                        placeholder={listMap.bornYear}

                        maxLength={4}
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
                        placeholder={listMap.studentId}
                        
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
                    <p className="text-[#FF000099] font-bold">
                        {/* {menCPF} */}
                        </p>

                    <label htmlFor='email' className="block mb-[6px] text-[18px] font-bold">EMAIL</label>
                    <input 
                        type='email' 
                        name='email'
                        id='email' 
                        placeholder={listMap.email}
                        onChange={haldleOnChange}
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
                    </>
}
                    <div className="w-full flex justify-center align-center mt-[20px] mb-[20px]">
                        <ButtonSubmit textBtn='Enviar'/>

                    </div>
            </form>
            </div>
            
        </div>
    )
}