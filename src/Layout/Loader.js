import loader from '../img/load.gif'
import style from './Loader.module.css'

export function Loader() {
  return (
    <div className={style.content}>
        <div className={style.contentStyle}></div>

        <img className={style.img} src={loader} alt="loader" />
    </div>
  )
}
