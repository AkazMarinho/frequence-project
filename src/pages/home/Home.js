import { useEffect } from "react";
import { ListStudents } from "../Students/ListStudents";


import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

import {StudentsProvider } from '../../context/StudentManager';

export function Home(){


  const {isLogin} = useContext(AuthContext)
  useEffect(()=>{
    isLogin()
  }, []
  )
  useEffect(()=>{
    localStorage.setItem("select",1);
    
  })

    // const {setLoader} = useContext(AuthContext)

    // useEffect(() => {
    //     setLoader(false)
    //     localStorage.setItem("select", 1); //seta em local storage select como 1, e isso faz que na navbar seja mostrado a primeira seleção assim que for logado

    // })

    return (
        <div className="bg-[#F1F1F1] p-[10px]  flex justify-center w-full overflow-hidden">
            <ListStudents/>
        </div>
    )
}
