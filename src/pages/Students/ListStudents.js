import style from './ListStudents.module.css'
import { FaUserEdit } from "react-icons/fa";

import { useContext, useEffect, useState } from 'react';
import { StudentsContext } from '../../context/StudentManager';

import {Link, useNavigate} from "react-router-dom";

export function ListStudents(){
  const Navigate = useNavigate();

  const {listStudent, listStudents} = useContext(StudentsContext)
  const [listMap, setListMap] = useState()
  console.log(listStudent);

  
  useEffect(() => {
    listStudents()
    
    setListMap(listStudent.data)

    console.log(listMap);

    console.log(listStudent.data);
  }, [listStudent])


  const handleList = () => {
    Navigate('/frequency')
  }

    // const list = [
    //     {
    //       "cpf": "34259731801",
    //       "bornYear":2004,
    //       "firstName": "Augusto",
    //       "secondName":"Cunha",
    //       "email": "AuCu@helponline-sti.com"
    //     },
    //     {
    //       "cpf": "34259731802",
    //       "bornYear":2002,
    //       "firstName": "Isabela",
    //       "secondName":"Santos",
    //       "email": "IsaSo@helponline-sti.com"
    //     },
    //     {
    //       "cpf": "34259731803",
    //       "bornYear":2001,
    //       "firstName": "Pedro",
    //       "secondName":"Oliveira",
    //       "email": "PeOl@helponline-sti.com"
    //     },
    //     {
    //       "cpf": "34259731804",
    //       "bornYear":2003,
    //       "firstName": "Camila",
    //       "secondName":"Costa",
    //       "email": "CaCo@helponline-sti.com"
    //     },
    //     {
    //       "cpf": "34259731805",
    //       "bornYear":2003,
    //       "firstName": "Rafael",
    //       "secondName":"Lima",
    //       "email": "RaLi@helponline-sti.com"
    //     },
    //     {
    //       "cpf": "34259731806",
    //       "bornYear":2002,
    //       "firstName": "Mariana",
    //       "secondName":"Silva",
    //       "email": "MaSi@helponline-sti.com"
    //     },
    //   ]

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
                      {listMap &&
                        listMap.map((idx, index) =>(
                          <tr className={style.body_table} >
                                <td onClick={handleList}>{`${idx.firstName} ${idx.secondName}`}</td>
                                <td onClick={handleList}>{idx.studentId}</td>
                                <td onClick={handleList}>{idx.bornYear}</td>
                                <td onClick={handleList}>{idx.email}</td>
                                <td onClick={() => localStorage.setItem("userlist", index)}><Link to='/att_student'>
                                  <FaUserEdit />
                                </Link> </td>
                            </tr>
                            )
                        )
                      }
                    </tbody>
                    
                    
                </table>
            </div>
    
    )
}