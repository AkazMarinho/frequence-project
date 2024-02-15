import style from './ListStudents.module.css'
import { FaUserEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { IoQrCodeSharp } from "react-icons/io5";

import { useContext, useEffect, useState } from 'react';
import { StudentsContext } from '../../context/StudentManager';

import {Link, useNavigate} from "react-router-dom";
import { QRcode } from '../QRcode/QRcode';

export function ListStudents(){
  const Navigate = useNavigate();

  const {listStudent, listStudents} = useContext(StudentsContext);
  
  useEffect(() => {
    listStudents()
  })


  const handleList = () => {
    Navigate('/frequency')
  }

  const [QRcodeData, setQRcodeData] = useState(null);
  const handleQRCodeButton = () => {
    setQRcodeData(<QRcode close={setQRcodeData}/>);
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

    const handleClickCreateStudentButton = () => {
      Navigate('/create_student')
    }

    return(
      <div className={style.content}>
        {QRcodeData}
        <div className={style.header}>
          <h1>Lista de Alunos</h1>
          <button onClick={handleClickCreateStudentButton}>
            Criar novo aluno
          </button>
        </div>

        <div className={style.internContent}>
          {listStudent && listStudent.length > 0 ? (
              <table className={style.table_full}>
                <thead>
                    <tr className={style.header_table}>
                        <td>Nome Completo</td>
                        <td>CPF</td>
                        <td>Ano de nascimento</td>
                        <td>Email</td>
                        <td>Ações</td>
                    </tr>
                </thead>
                <tbody>
                    {listStudent.map((idx, index) =>(
                      <tr className={style.body_table} onClick={() => {
                        localStorage.setItem("studentSkId", idx.skid)
                        localStorage.setItem("userlist", index)
                        localStorage.setItem("studentInfo",`${idx.firstName} ${idx.secondName}` )
                      }}>
                        <td >{`${idx.firstName} ${idx.secondName}`}</td>
                        <td >{idx.studentId}</td>
                        <td >{idx.bornYear}</td>
                        <td >{idx.email}</td>
                        <td >
                          <div className={style.linkActions}>
                            <Link to='#'>
                              <FaUserEdit />
                            </Link> 
                            <button onClick={() => {
                              handleQRCodeButton()
                            }}>
                              <IoQrCodeSharp />
                            </button>

                            <button onClick={() => {
                              handleList()
                              localStorage.setItem("studentSkId", idx.skid)
                              localStorage.setItem("userlist", index)
                              localStorage.setItem("studentInfo",`${idx.firstName} ${idx.secondName}`)
                            }
                            }>
                              <FaEye />
                            </button> 
                          </div>
                        </td>
                      </tr>
                      
                    )
                    )}
                </tbody>
            </table>
            ):(
              <div className={style.noData}>
                <span>Sem dados</span>
              </div>
            )
            }
        </div>
      </div>
    
    )
}