import style from './NavBar.module.css'

import log from '../../img/Logos_UFPA.png'

import {Link, useNavigate } from "react-router-dom";
import { IoIosList } from "react-icons/io";
import { TbUserPlus } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { useEffect, useState, useContext} from 'react';
import { ItemNavBar } from './ItemNavBar';

export function NavBar(){

    const Navigate = useNavigate(); //hook que direciona rotas quando especificadas

    const [toggle, setToggle] = useState("1")

    const Select = localStorage.getItem("select");
    function toggleStyle(e){
        if (e === "1") {
            setToggle(1)
            localStorage.setItem("select",1);
            Navigate('/')
        } else if (e === "2"){
            setToggle("2")
            localStorage.setItem("select",2);
            Navigate('/frequency_day')
        } else {
            setToggle(null)
        }
    }

    useEffect(()=>{
        if( Select === "1"){
            setToggle("1")
        }
        else if( Select === "2"){
            setToggle("2")
        } else {
            setToggle(null)
        }
    });

    const exit = () => {
        localStorage.removeItem("tenant");
        localStorage.removeItem("keyAuth");
        localStorage.removeItem("keyAuth");
        localStorage.removeItem("studentInfo");
        localStorage.removeItem("select");
        localStorage.removeItem("userlist");
        localStorage.removeItem("R7sT3pL9oQ2aX1iF5gU0rD8sM6");
        localStorage.removeItem("studentSkId");
        localStorage.removeItem("a2Bc9E4fGhI1jKlM7nOpQr3tUvX5wYz8");
        localStorage.removeItem("date");
        localStorage.setItem("log",false);

        window.location.reload()
    }

    return(
        <div className={` flex justify-between flex-col w-[13.75rem] h-[100vh] min-h-[560px] min-w-[13.75rem] max-w-[13.75rem] bg-[#4983D4] pt-[40px] rounded-r-[25px] fixed`}>

            <div className='w-full'>
                <div className='rounded-[50%] bg-[#fff] w-[65%]  mx-auto '>
                    <Link to='/' onClick={toggleStyle}>
                        <img src={log} alt="logo" />
                    </Link>
                </div>
                <div className='mx-auto font-IBM_Plex text-center text-[#fff] p-[1.56rem]'>
                    <h3 className='font-semibold text-base'>Seja bem vind@</h3>
                    <h3 className='text-base'>de volta</h3>
                </div>

                <div onClick={() => toggleStyle("1")}>
                    {Select === "1" ? 
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

                <div onClick={() => toggleStyle("2")}>
                    
                    {toggle === "2" ? 
                        (
                            <ItemNavBar 
                                conStyle='contaniner_style' 
                                borCon='border_container' 
                                borConT='border_container_top'
                                borConTR='border_container_top_radius'
                                borConB='border_container_bottom'
                                borConBR='border_container_bottom_radius'
                                textContainer='text_container'
                                text='FREQUÊNCIA'
                                icon={<TbUserPlus />}
                            />
                        ):(
                            <ItemNavBar 
                                conStyle='contaniner_style2' 
                                textContainer='text_container2'
                                
                                text='FREQUÊNCIA'
                                icon={<TbUserPlus />}
                            />
                        )
                    }
                </div>
            </div>
            <div className='flex itens-auto justify-between pb-[30px] flex-col items-center h-[105px] mb-[-9px]'>
                {/* <Link to='/login'> */}
                    <button
                        onClick={exit}
                        className="bg-[#d1d1d1] w-[178px] h-[44px] rounded-[7px] drop-shadow-[0_4px_6px_#00000040] hover:bg-[#f1f1f1] transitionduration-300">
                            Sair
                    </button>

                    <span className={style.credits} onClick={() => {
                        Navigate("./credits")
                        localStorage.setItem("select",3);
                    }}>
                    <FaInfoCircle />
                    </span>
            </div>
        </div>
    )
}