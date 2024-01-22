import style from './ListStudents.module.css'
import { FaUserEdit } from "react-icons/fa";


import { useContext, useEffect } from 'react';
import { StudentsContext } from '../../context/StudentManager';

import env from 'react-dotenv';

import axios from 'axios';

export function ListStudents(){
  const URL = env.API_URL;

  console.log(URL);
  const {listStudent, listStudents} = useContext(StudentsContext)
  
  useEffect(() => {
    console.log(listStudent);

    // const listStudents = async () => {
  
    //   const keyAuth = localStorage.getItem("keyAuth"); //seta em local storage a apikey do usuario
    //   const tenant = localStorage.getItem("tenant"); //seta em local storage o tenant do usuario
  
    //   try {
    //       const response = await axios.get(`${URL}api/v1/students`,{
    //           headers : {
    //               // 'Content-Type': 'application/json',
    //               "X-API-KEY" : keyAuth
    //           },
    //           params : {
    //               'tenant' : tenant
    //           },
    //       });
  
    //       console.log(response);
    //   } 
    //   catch (error) {
    //       console.log(error);
    //   }
    // }
    listStudents()
  },[])



    const list = [
        {
          "cpf": "34259731801",
          "bornYear":2004,
          "firstName": "Augusto",
          "secondName":"Cunha",
          "email": "AuCu@helponline-sti.com"
        },
        {
          "cpf": "34259731802",
          "bornYear":2002,
          "firstName": "Isabela",
          "secondName":"Santos",
          "email": "IsaSo@helponline-sti.com"
        },
        {
          "cpf": "34259731803",
          "bornYear":2001,
          "firstName": "Pedro",
          "secondName":"Oliveira",
          "email": "PeOl@helponline-sti.com"
        },
        {
          "cpf": "34259731804",
          "bornYear":2003,
          "firstName": "Camila",
          "secondName":"Costa",
          "email": "CaCo@helponline-sti.com"
        },
        {
          "cpf": "34259731805",
          "bornYear":2003,
          "firstName": "Rafael",
          "secondName":"Lima",
          "email": "RaLi@helponline-sti.com"
        },
        {
          "cpf": "34259731806",
          "bornYear":2002,
          "firstName": "Mariana",
          "secondName":"Silva",
          "email": "MaSi@helponline-sti.com"
        },
      ]

    return(
            <div className={style.content}>
                <table className={style.table_full}>
                    <thead>
                        <tr className={style.header_table}>
                            <td>Nome Completo</td>
                            <td>CPF</td>
                            <td>Ano de nacimento</td>
                            <td>Email</td>
                            <td>Editar</td>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map(idx =>(
                            <tr className={style.body_table}>
                                <td>{`${idx.firstName} ${idx.secondName}`}</td>
                                <td>{idx.cpf}</td>
                                <td>{idx.bornYear}</td>
                                <td>{idx.email}</td>
                                <td><a href="#"><FaUserEdit /></a> </td>
                            </tr>
                            )
                        )}
                    </tbody>
                    
                    
                </table>
            </div>
    
    )
}