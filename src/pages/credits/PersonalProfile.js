
import { FaLinkedin, FaGithub } from "react-icons/fa";
import style from './Credits.module.css'

export function PersonalProfile({name, title, linkGit, linkedin, other, otherLink}) {
  return (
    <div>
        <span className={style.title}>{title}</span>
        <br />
        <span>{name}</span>
        <div className={style.icons} >
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <span><FaLinkedin/></span>
            </a>
            <a href={linkGit} target="_blank" rel="noopener noreferrer">
                <span><FaGithub /></span>
            </a>
            
        </div>
    </div>
  )
}
