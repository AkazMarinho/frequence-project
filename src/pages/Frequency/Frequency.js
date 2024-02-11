import { useEffect, useContext, useState } from "react"
import { StudentsContext } from "../../context/StudentManager";
import style from './Frequency.module.css'
import { JustifyAbsence } from "./JustifyAbsence";


export function Frequency() {

  const [selectedMonth, setSelectedMonth] = useState("1");

  const {frequency, dataFrequency, frequencyPerMonth, dataFrequencyPerMonth} = useContext(StudentsContext);

  const studentInfo = localStorage.getItem("studentInfo");

  useEffect(() => {
    frequency();
  }, []);

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
    const mesNumerico = meses[month];


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
  
  return (
    <div className={style.content}>
      <div className="w-full">

        {dateAbsence}
      </div>
      {dataFrequency && (
        <div >
          <h1>Nome do Aluno: <span>{studentInfo}</span></h1>

          <div className={style.topOption}>

            <select id="Meses" name="Meses" onClick={handleSelection}>
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

            <div>
              <button onClick={handleAddDateAbsece}>Justificar falta</button>
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
                </tbody>
                {dataFrequencyPerMonth.map((item, index) => (
                  <tr key={index} > 
                  {/* {console.log(item)} */}
                      <td>{formatarData(item.date)}</td>
                      <td>{item.justified ? 
                        "Falta justificada"
                        : 
                        "Presente"}</td>
                      <td>{item.description}</td>
                      {item.justified === true &&
                      <td><button className={style.altered} onClick={() => {
                        handleDateAbsece(item.justified, item.date, formatarData(item.date))
                      }}>Alterar</button></td>}
                      
                    </tr>
                ))}
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
