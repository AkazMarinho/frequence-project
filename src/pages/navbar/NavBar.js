

import log from '../../img/Logos_UFPA.png'
import { IoIosList } from "react-icons/io";
import { useState } from 'react';
import { ItemNavBar } from './ItemNavBar';

export function NavBar(){

    const [toggle, setToggle] = useState(false)

    function toggleStyle(e){
        setToggle(!toggle)
        
        console.log(e.target);
    }

    return(
            <div className={` w-[29.29%] h-[1024px] min-w-[200px] max-w-[300px] bg-[#4983D4] pt-[40px] rounded-r-[25px]`}>

                <div className='w-full'>
                    <div className='rounded-[50%] bg-[#fff] w-[65%]  mx-auto '>
                        <img src={log} alt="logo" />
                    </div>
                    <div className='mx-auto font-IBM_Plex text-center text-[#fff] p-[1.56rem]'>
                        <h3 className='font-semibold text-base'>Seja bem vind@</h3>
                        <h3 className='text-base'>de volta</h3>
                    </div>

                    <div onClick={toggleStyle}>
                        {toggle ? 
                            (
                                <ItemNavBar  />
                            ) 
                            :
                            (
                                <ItemNavBar  /> 
                            )
                        }
                    </div>

                    {/* <div onClick={toggleStyle}>
                        {toggle ? 
                            
                            (<div className={style.contaniner_style2}>
                                <div className={`${style.text_container2} font-IBM_Plex md:text-[20px]`}>
                                    <IoIosList />
                                    <p >LISTA DE ALUNOS</p>
                                </div>
                            </div>)

                        : 
                            (<div className={style.contaniner_style}>
                                <div className={`${style.border_container} ${style.border_container_top}`}></div>
                                <div className={`${style.border_container} ${style.border_container_top} ${style.border_container_top_radius}`}></div>

                                <div className={`${style.border_container} ${style.border_container_bottom}`}></div>
                                <div className={`${style.border_container}  ${style.border_container_bottom} ${style.border_container_bottom_radius}`}></div>

                                <div className={`${style.text_container} font-IBM_Plex md:text-[20px]`}>
                                    <IoIosList />
                                    <p >LISTA DE ALUNOS</p>
                                </div>
                            </div>) 
                        }
                    </div> */}

                 </div>
            </div>
    )
}