import style from './FrequencyDownload.module.css'
import { useContext, useEffect, useState } from 'react';
import { FrequencyContext } from '../../context/FrequencyProvider';
import { AuthContext } from "../../context/AuthProvider";

export function FrequencyDownload() {

  const {isLogin} = useContext(AuthContext);

  const {
    listFrequencyPerDay,
    listFrequencyPerDayData
  } = useContext(FrequencyContext);

  const [data, setData] = useState('');
  const [dataInput, setDataInput] = useState(null);
  const [dataResponse, setDataResponse] = useState();
  
  useEffect(()=>{
    isLogin();
  })
  
  useEffect(()=>{
    const data = new Date();
    const dia = data.getDate();
    let mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    
    mes = mes < 10 ? `0${mes}` : mes;
    
    const date = `${ano}-${mes}-${dia}`
    setData(date)
    listFrequencyPerDay(date)
  }, [])

  const [studentAll, setstudentAll] = useState();
  const [checkFilter, setCheckFilter] = useState(1);

  useEffect(()=>{
    if(listFrequencyPerDayData){
      const arrayListFrequency = [...listFrequencyPerDayData.studentJustified, ...listFrequencyPerDayData.studentNotJustified]
      
      const compararPorData = (a, b) => {
        const nomeA = `${a.firstName} ${a.secondName}`;
        const nomeB = `${b.firstName} ${b.secondName}`;
        return nomeA.localeCompare(nomeB);
      };
      
      const dadosOrdenadosPorData = arrayListFrequency.sort(compararPorData);
      setDataResponse(dadosOrdenadosPorData);
      setstudentAll(dadosOrdenadosPorData);
    }

  }, [listFrequencyPerDayData]);

  const handleChangeInput = (e) =>{
    setDataInput(e.target.value);
    setData(e.target.value)
  }

  useEffect(()=>{
    listFrequencyPerDay(dataInput);
    
  }, [dataInput])

  useEffect(()=>{
    if(checkFilter === 1){
      setDataResponse(studentAll);

    } else if(checkFilter === 2){
      setDataResponse(listFrequencyPerDayData.studentNotJustified);

    } else {
      setDataResponse(listFrequencyPerDayData.studentJustified);

    }
  }, [dataResponse])

  const handleSelection = (e) =>{
    if(listFrequencyPerDayData){
    if( e.target.value === "Todos"){
      setDataResponse(studentAll);
      setCheckFilter(1)
      
    } else if (e.target.value === "Faltas_Justificadas"){
      setDataResponse(listFrequencyPerDayData.studentNotJustified);
      setCheckFilter(2)
      
    } else{
      setDataResponse(listFrequencyPerDayData.studentJustified);
      setCheckFilter(3)
    }}
  }

  return (
    <div className={style.content}>
      <div className={style.header}>
        <h1>Conferir frequência</h1>

      </div>
        <div  className={style.internContent}>

              <div className={style.download_day}>
                <span>Lista de dia especifico</span>
                <div>
                    <label >Escolha um dia para realizar a busca</label>
                    <br />
                    <input 
                    value={data}
                    name="date" 
                    id="date" 
                    type="date" 
                    placeholder="Insira a data a ser alterada"
                    onChange={
                      handleChangeInput
                    }
                    />
                </div>
          

        </div>
      </div>
      <div className={style.filterChoise}>
        <select id="filter" name="filter" 
          onClick={handleSelection}
        >
          <option value="Todos">Todos</option>
          <option value="Faltas_Justificadas">Faltas Justificadas</option>
          <option value="Presença">Presença</option>
        </select>
      </div>
      <div>
        {listFrequencyPerDayData && (
          <div className={style.listStyle}>
            {
            dataResponse && dataResponse.length > 0 ?
            ( 
              <div>
                <table>
                  <thead>
                    <tr>
                      <td>Índice</td>
                      <td>Nome</td>
                    </tr>
                  </thead>
                  <tbody className={style.tbody}>
                    {dataResponse.map( (item, index) => (
                      <tr>
                        <td className={style.index}>
                          {index+1}
                        </td>
                        <td>
                        {`${item.firstName} ${item.secondName
}`}

                        </td>
                      </tr>
                    )

                    )}
                  </tbody>
                </table>
              </div>
            )
            :
            (
              <span>Sem dados para esse dia</span>
            )
            }
            {/* {checkFrequencyPerDayData} */}
          </div>
        )}
        
      </div>
    </div>
  )
}
