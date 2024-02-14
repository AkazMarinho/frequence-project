import { useEffect, useContext, useState } from "react"
import { StudentsContext } from "../../context/StudentManager";
import style from './Frequency.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { JustifyAbsence } from "./JustifyAbsence";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthProvider";

export function Frequency() {

  const Navigate = useNavigate()

  const {isLogin} = useContext(AuthContext)
  useEffect(()=>{
    isLogin()
  });

  const {frequency, dataFrequency, frequencyPerMonth, dataFrequencyPerMonth, deleteStudent} = useContext(StudentsContext);

  const studentInfo = localStorage.getItem("studentInfo");

  useEffect(() => {
    frequency();
  }, []);

  const confirmDelete = () =>{
    deleteStudent();
  }

  function formatarData(dataString) {//dataString - February 6, 2024
    const meses = {
      January: '01',
      February: '02',
      March: '03',
      April: '04',
      May: '05',
      June: '06',
      July: '07',
      August: '08',
      September: '09',
      October: '10',
      November: '11',
      December: '12',
    };
  
    const [year, month, day ] = dataString.split('-');
    // const day = dayWithComma.replace('', '');
    const diaFormatado = day.length === 1 ? `0${day}` : day;
    return `${diaFormatado}/${month}/${year}`;

  }
  const [valueMonth, setValueMonth] = useState("JANUARY");

  const handleSelection = (e) => {
    setValueMonth(e.target.value);
    setDateAbsence(null)
  }

  useEffect(() => {
    frequencyPerMonth(valueMonth)
  }, [valueMonth])

  const [dateAbsence, setDateAbsence] = useState();

  const handleDateAbsece = (justified,dateDB, dateFormated) => {
    if(justified === true){
      setDateAbsence(() =>(
        <JustifyAbsence title="Revogação de falta Justificada" descripstionAbsenceBoll={true} dataDB={dateDB} dateFormated={dateFormated} close={setDateAbsence}/>
        ))
      }
  }

  const handleAddDateAbsece = () => {
      setDateAbsence(() =>(
      <JustifyAbsence title="Justificar falta" descripstionAbsenceBoll={false} descripstionAbsenceTitle="Motivo" close={setDateAbsence}/>
    ))
  }
  const [del , setDel] =useState(null)
  const handleDel = () => {
    setDel(true)
  }
  
  return (
    <div className={style.content}>
      <div className="w-full">

      {del === true && 
        <div className={style.deleteContent}>
          <div className={style.close}>
              <button onClick={() => {
                setDel(false)
              }}><IoIosCloseCircleOutline /></button>
          </div>
          <span>Os dados serão excluidos permanente</span>
          <span>Confirmar exclusão?</span>
          <button onClick={() => {
            confirmDelete()
            setDel(false)
            Navigate("/")
          }} className={style.button}>OK</button>
        </div>
      }

      {dateAbsence}
      </div>
      {dataFrequency && (
        <div >
          <h1>Nome do Aluno: <span>{studentInfo}</span></h1>

          <div className={style.topOption}>

            <select id="Meses" name="Meses" onChange={handleSelection}>
              <option value="JANUARY">Janeiro</option>
              <option value="FEBRUARY">Fevereiro</option>
              <option value="MARCH">Março</option>
              <option value="APRIL">Abril</option>
              <option value="MAY">Maio</option>
              <option value="JUNE">Junho</option>
              <option value="JULY">Julho</option>
              <option value="AUGUST">Agosto</option>
              <option value="SEPTEMBER">Setembro</option>
              <option value="OCTOBER">Outubro</option>
              <option value="NOVEMBER">Novembro</option>
              <option value="DECEMBER">Dezembro</option>
            </select>

            <div className={style.delete}>
              <button className={style.buttonDeL} onClick={handleDel}>Excluir aluno </button>

            </div>
            <div>
              <button className={style.buttonJus}  onClick={handleAddDateAbsece}>Justificar falta</button>
            </div>
          </div>


          <div className={style.internContent}>
            {dataFrequencyPerMonth && dataFrequencyPerMonth.length > 0 ? (
              <table className={style.table_full}>
                <thead>
                  <tr>
                    <td>Dia</td>
                    <td>Status</td>
                    <td>Descrição</td>
                    <td>Ações</td>
                  </tr>
                </thead>
                <tbody>
                  {dataFrequencyPerMonth.map((item, index) => (
                    <tr key={index} > 
                    
                        <td>{formatarData(item.date)}</td>

                        <td>{item.justified ? 
                          "Falta justificada"
                          : 
                          "Presente"}
                        </td>

                        <td>{item.description}</td>

                        {item.justified === true &&
                          <td><button className={style.altered} onClick={() => {
                            handleDateAbsece(item.justified, item.date, formatarData(item.date))
                          }}>Alterar</button></td>}
                      </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <>
                <br />
                <span className={style.spanNotData}>Não Possui dados</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
