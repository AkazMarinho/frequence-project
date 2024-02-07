import {Link, useNavigate } from "react-router-dom";

import log from '../../img/Logos_UFPA.png'
import { IoIosList } from "react-icons/io";
import { TbUserPlus } from "react-icons/tb";
import { useEffect, useState } from 'react';
import { ItemNavBar } from './ItemNavBar';


export function NavBar(){

    const Navigate = useNavigate(); //hook que direciona rotas quando especificadas

    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(false)

    function toggleStyle1(e){
        setToggle1(true)
        setToggle2(false)
        localStorage.setItem("select",1);
    }
    function toggleStyle2(e){
        setToggle1(false)
        setToggle2(true)
        localStorage.setItem("select",2);
    }

    useEffect(()=>{
        const Select = localStorage.getItem("select");
        if( Select == 1){
            setToggle1(true)
            setToggle2(false)
        }
        else if( Select == 2){
            setToggle1(false)
            setToggle2(true)
        }
        else if( Select == 3){
            setToggle1(false)
            setToggle2(false)
        }
    });

    const exit = () => {
        localStorage.removeItem("tenant");
        localStorage.removeItem("keyAuth");
        localStorage.setItem("log",false);
        Navigate('/login')
        window.location.reload()
    }

    return(
        <div className={` flex justify-between flex-col w-[29.29%] h-[100vh] min-h-[560px] min-w-[200px] max-w-[300px] bg-[#4983D4] pt-[40px] rounded-r-[25px]`}>

            <div className='w-full'>
                <div className='rounded-[50%] bg-[#fff] w-[65%]  mx-auto '>
                    <Link to='/' onClick={toggleStyle1}>
                        <img src={log} alt="logo" />
                    </Link>
                </div>
                <div className='mx-auto font-IBM_Plex text-center text-[#fff] p-[1.56rem]'>
                    <h3 className='font-semibold text-base'>Seja bem vind@</h3>
                    <h3 className='text-base'>de volta</h3>
                </div>

                <Link to={'/'}>
                    <div onClick={toggleStyle1}>
                        {toggle1 ? 
                            ( <>
                                    <ItemNavBar 
                                        conStyle='contaniner_style' 
                                        borCon='border_container' 
                                        borConT='border_container_top'
                                        borConTR='border_container_top_radius'
                                        borConB='border_container_bottom'
                                        borConBR='border_container_bottom_radius'
                                        textContainer='text_container'
                                        
                                        text='LISTA DE ALUNOS'
                                        icon={<IoIosList />}
                                    />
                                </> 
                            
                            ):(
                                <ItemNavBar 
                                    conStyle='contaniner_style2' 
                                    textContainer='text_container2'
                                    text='LISTA DE ALUNOS'
                                    icon={<IoIosList />}
                                />
                            )
                        }
                    </div>
                </Link>

                <Link to='/create_student'>
                    <div onClick={toggleStyle2}>
                        {toggle2 ? 
                            (
                                <ItemNavBar 
                                    conStyle='contaniner_style' 
                                    borCon='border_container' 
                                    borConT='border_container_top'
                                    borConTR='border_container_top_radius'
                                    borConB='border_container_bottom'
                                    borConBR='border_container_bottom_radius'
                                    textContainer='text_container'
                                    text='CADASTRO DE ALUNO'
                                    icon={<TbUserPlus />}
                                />
                            ):(
                                <ItemNavBar 
                                    conStyle='contaniner_style2' 
                                    textContainer='text_container2'
                                    
                                    text='CADASTRO DE ALUNO'
                                    icon={<TbUserPlus />}
                                />
                            )
                        }
                    </div>
                </Link>
            </div>
            <div className='flex
                        justify-center
                        itens-auto pb-[30px]'>
                {/* <Link to='/login'> */}
                    <button
                        onClick={exit}
                        className="
                            bg-[#d1d1d1] 
                            w-[178px] 
                            h-[44px] 
                            rounded-[7px] 
                            drop-shadow-[0_4px_6px_#00000040] 
                            hover:bg-[#f1f1f1]
                            transition
                            duration-300
                            "
                        >
                            Sair
                    </button>
                {/* </Link> */}
            </div>
        </div>
    )
}