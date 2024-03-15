import { useEffect } from 'react';
import { ButtonSubmit } from '../../Layout/ButtonSubmit';
import error from '../../img/error.png'
import style from './Error.module.css'
import {Link } from "react-router-dom";

export function Error() {

    useEffect(()=>{
        localStorage.setItem("select",3);
    })

    const toogleStyle = () => {
        localStorage.setItem("select",1);
    }
  return (<>
        <div className="w-full h-[100vh] p-[30px] flex justify-center flex-col items-center text-center">
            <img src={error} alt="error 404" className={style.img} />

            <div className='w-full'>
                <p className='font-bold text-[20px] mb-[10px]'>A página que voce procura não foi encontrada.</p>
                <Link to='/' className={style.link} onClick={toogleStyle}>
                    <ButtonSubmit textBtn='Ir para o início'/>
                </Link>
            </div>
        </div>
    </>
  )
}
