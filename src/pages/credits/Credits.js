import { useEffect } from 'react';
import style from './Credits.module.css'
import { PersonalProfile } from './PersonalProfile'
import { TfiAndroid } from "react-icons/tfi";

export default function Credits() {

  return (
    <div className="flex bg-[#F1F1F1] p-[30px] w-full ">

            <div  className=" w-full bg-[#4983D4] flex justify-between flex-col items-center rounded-[10px] relative p-[12px]">

                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[45px] left-[46px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[50px] right-[90px] w-[94px] h-[94px] z-[1]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[30px] left-[20px] w-[94px] h-[94px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[80px] right-[40px] w-[94px] h-[94px]"></div>

                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[117px] left-[153px] w-[60px] h-[60px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] top-[209px] right-[138px] w-[60px] h-[60px] z-[1]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[139px] left-[71px] w-[60px] h-[60px]"></div>
                <div className="bg-[#4B8BE4] absolute rounded-[50%] bottom-[16px] right-[13px] w-[60px] h-[60px]"></div>


                <h1 className={style.h1}>
                    Créditos
                </h1>
                <div className={style.internContent}>
                    <PersonalProfile 
                        name='Akaz Marinho' 
                        title='Desenvolvedor Front-End e Web Designer' 
                        linkGit='https://github.com/AkazMarinho' 
                        linkedin='https://www.linkedin.com/in/akaz-marinho-b66475230/'/>
                    <PersonalProfile 
                        title='Desenvolvedor Mobile' 
                        name='Vicente de Sousa' 
                        other={true}
                        linkGit='https://github.com/vicente-ferrer' 
                        linkedin='https://www.linkedin.com/in/vicentedesousa'
                        otherLink='https://drive.google.com/file/d/170gw8cFgAi0l6PhGgL8_0tU0p2AOL12f/view?usp=sharing'/>
                    <PersonalProfile 
                        title='Desenvolvedor Back-End' 
                        name='Valter Gabriel' 
                        linkGit='https://github.com/ValterGabriell' 
                        linkedin='https://www.linkedin.com/in/valter-gabriel/'/>
                </div>
                <div className={style.app} >
                    <span>Baixe tambem o app</span>
                    <a href='https://drive.google.com/drive/folders/1f6fAF7bHqDdermrcG6wCnBB_KoVYW6KZ?usp=sharing'  target="_blank" rel="noopener noreferrer">
                    <TfiAndroid />

                    </a>
                </div>
            </div>

            
    </div>
  )
}
