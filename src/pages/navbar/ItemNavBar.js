import style from './NavBar.module.css'
import { IoIosList } from "react-icons/io";

import { IconBase } from 'react-icons';


export function ItemNavBar(props){
    console.log(props.icon);
    return(
        <div  className={`${style[props.conStyle]}`}>
            <div className={`${style[props.borCon]} ${style[props.borConT]}`}></div>
            <div className={`${style[props.borCon]} ${style[props.borConT]} ${style[props.borConTR]}`}></div>
            
            <div className={`${style[props.borCon]} ${style[props.borConB]}`}></div>
            <div className={`${style[props.borCon]} ${style[props.borConB]} ${style[props.borConBR]}`}></div>


            <div className={`${style[props.textContainer]} font-IBM_Plex md:text-[20px]`}>

                <>
                    {props.icon}
                </>          
                <p >{props.text}</p>
            </div>
        </div>
    )
}