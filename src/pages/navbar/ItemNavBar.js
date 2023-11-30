import style from './NavBar.module.css'

export function ItemNavBar({contaniner_style}){
    return(
            <div  className={`${contaniner_style}`}>
            <div className={`${style.border_container} ${style.border_container_top}`}></div>
            <div className={`${style.border_container} ${style.border_container_top} ${style.border_container_top_radius}`}></div>

            <div className={`${style.border_container} ${style.border_container_bottom}`}></div>
            <div className={`${style.border_container}  ${style.border_container_bottom} ${style.border_container_bottom_radius}`}></div>

            <div className={`${style.text_container} font-IBM_Plex md:text-[20px]`}>
                {/* <IoIosList /> */}
                <p >LISTA DE ALUNOS</p>
            </div>
        </div>
    )
}