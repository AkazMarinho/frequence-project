import loader from '../img/loading.gif'
import style from './Loader.module.css'

export function Loader() {
  
  return <img className={style.img} src={loader} alt="loader" />
    // <div className={style.content}>
    /* <div className={style.contentStyle}></div> 

     </div> */
  
}
