import style from './NavBar.module.css'
import {Link } from "react-router-dom";


import log from '../../img/Logos_UFPA.png'
import { IoIosList } from "react-icons/io";
import { useState } from 'react';
import { ItemNavBar } from './ItemNavBar';

export function NavBar(){

    const [toggle1, setToggle1] = useState(true)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)

    function toggleStyle1(e){
        setToggle1(true)
        setToggle2(false)
        setToggle3(false)
    }
    function toggleStyle2(e){
        setToggle1(false)
        setToggle2(true)
        setToggle3(false)
    }
    function toggleStyle3(e){
        setToggle1(false)
        setToggle2(false)
        setToggle3(true)
    }

    return(
            <div className={` w-[29.29%] h-[1024px] min-w-[200px] max-w-[300px] bg-[#4983D4] pt-[40px] rounded-r-[25px]`}>

                <div className='w-full'>
                    <div className='rounded-[50%] bg-[#fff] w-[65%]  mx-auto '>
                        <Link to='/login' >
                            <img src={log} alt="logo" />
                        </Link>
                    </div>
                    <div className='mx-auto font-IBM_Plex text-center text-[#fff] p-[1.56rem]'>
                        <h3 className='font-semibold text-base'>Seja bem vind@</h3>
                        <h3 className='text-base'>de volta</h3>
                    </div>

                    <div onClick={toggleStyle1}>
                        {toggle1 ? 
                            (
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
                            ) 
                            :
                            (
                                <ItemNavBar 
                                    conStyle='contaniner_style2' 
                                    textContainer='text_container2'
                                    
                                    text='LISTA DE ALUNOS'
                                    icon={<IoIosList />}
                                />
                            )
                        }
                    </div>

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
                                    icon={<IoIosList />}
                                />
                            ) 
                            :
                            (
                                <ItemNavBar 
                                    conStyle='contaniner_style2' 
                                    textContainer='text_container2'
                                    
                                    text='CADASTRO DE ALUNO'
                                    icon={<IoIosList />}
                                />
                            )
                        }
                    </div>

                    <div onClick={toggleStyle3}>
                        {toggle3 ? 
                            (
                                <ItemNavBar 
                                    conStyle='contaniner_style' 
                                    borCon='border_container' 
                                    borConT='border_container_top'
                                    borConTR='border_container_top_radius'
                                    borConB='border_container_bottom'
                                    borConBR='border_container_bottom_radius'
                                    textContainer='text_container'
                                    
                                    text='NOTAS'
                                    icon={<IoIosList />}
                                />
                            ) 
                            :
                            (
                                <ItemNavBar 
                                    conStyle='contaniner_style2' 
                                    textContainer='text_container2'
                                    
                                    text='NOTAS'
                                    icon={<IoIosList />}
                                />
                            )
                        }
                    </div>

                    

                 </div>
            </div>
    )
}