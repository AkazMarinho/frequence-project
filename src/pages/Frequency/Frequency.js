import { useEffect, useContext, useState } from "react"
import { StudentsContext } from "../../context/StudentManager";
import style from './Frequency.module.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { JustifyAbsence } from "./JustifyAbsence";

import { AuthContext } from "../../context/AuthProvider";
import { ButtonLoading } from "../../StyledComponents/ButtonLoading.style";
import { Loader } from "../../Layout/Loader";

export function Frequency() {

  const {isLogin} = useContext(AuthContext)
  useEffect(()=>{
    isLogin()
  });
  
  const {
    frequency, 
    dataFrequency, 
    frequencyPerMonth, 
    dataFrequencyPerMonth, 
    deleteStudent, 
    loader,
    deleteStudentError,
    setDeleteStudenterror
  } = useContext(StudentsContext);

  const studentInfo = localStorage.getItem("studentInfo");
  
  useEffect(() => {
    frequency();
    currentMonth();
  }, []);
  
  const [monthCurrenty, setMonthCurrenty] = useState(null)
  const currentMonth = () =>{
    const date = new Date()
    const month = date.getMonth();
    switch(month){
      case 0:
        setMonthCurrenty("JANUARY")
        break;
      case 1:
        setMonthCurrenty("FEBRUARY")
        break;
      case 2:
        setMonthCurrenty("MARCH")
        break;
      case 3:
        setMonthCurrenty("APRIL")
        break;
      case 4:
        setMonthCurrenty("MAY")
        break;
      case 5:
        setMonthCurrenty("JUNE")
        break;
      case 6:
        setMonthCurrenty("JULY")
        break;
      case 7:
        setMonthCurrenty("AUGUST")
        break;
      case 8:
        setMonthCurrenty("SEPTEMBER")
        break;
      case 9:
        setMonthCurrenty("OCTOBER")
        break;
      case 10:
        setMonthCurrenty("NOVEMBER")
        break;
      case 11:
        setMonthCurrenty("DECEMBER")
        break;
      default:
        setMonthCurrenty("JANUARY")
    }
  }

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

  const handleSelection = (e) => {
    setMonthCurrenty(e.target.value)
  }
  const handleSelectionClick = () => {
    setDateAbsence(null)
    setDel(false)
  }
  
  useEffect(() => {
    if(monthCurrenty !== null){
    frequencyPerMonth(monthCurrenty)
  }
  }, [monthCurrenty])

  const [dateAbsence, setDateAbsence] = useState();

  const handleDateAbsece = (justified,dateDB, dateFormated) => {
    if(justified === true){
      setDateAbsence(() =>(
        <JustifyAbsence title="Revogação de falta Justificada" descripstionAbsenceBoll={true} dataDB={dateDB} dateFormated={dateFormated} close={setDateAbsence}/>
        ))
      }
  }

  const handleAddDateAbsece = () => {
      setDel(false)
      setDateAbsence(() =>(
      <JustifyAbsence title="Justificar falta" descripstionAbsenceBoll={false} descripstionAbsenceTitle="Motivo" close={setDateAbsence}/>
    ))
  }

  const [del , setDel] = useState(null)
  const [delError , setDelError] = useState(null)

useEffect(()=>{
    setDelError(true)
    console.log(deleteStudentError);
}, [deleteStudentError])

  
  const handleDel = () => {
    setDel(true)
    setDateAbsence(null)
  }
  
  return (
    <div className={style.content}>
      <div className="w-full">
        
        {del === true && 
          <div className={style.deleteContent}>

              {deleteStudentError && 
              
                <div className={style.deleteContentError}>
                  {console.log(delError)}
                  Erro em servidor
                  <ButtonLoading bg='#b5261f' onClick={() => {
                      setDeleteStudenterror(null)
                      setDel(false);
                    }} 
                    className={style.button}
                  >
                    <span>Ok</span>
                    {loader ? <Loader/> : ""}
                  </ButtonLoading>
                </div>
              }     
            
            <div className={style.close}>
                <button onClick={() => {
                  setDel(false)
                }}><IoIosCloseCircleOutline /></button>
            </div>
            <span>Os dados serão excluidos permanente</span>
            <span>Confirmar exclusão?</span>
            <ButtonLoading bg='#b5261f' onClick={() => {
                confirmDelete()
              }} 
              className={style.button}
            >
              <span>Ok</span>
              {loader ? <Loader/> : ""}
            </ButtonLoading>
          </div>
        }
      {dateAbsence}
      </div>
      {dataFrequency && (
        <div >
          <h1>Nome do Aluno: <span>{studentInfo}</span></h1>

          <div className={style.topOption}>

            <select id="Meses" value={monthCurrenty} name="Meses" onClick={handleSelectionClick} onChange={handleSelection}>
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