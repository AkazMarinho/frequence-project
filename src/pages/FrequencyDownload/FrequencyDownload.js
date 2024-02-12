import style from './FrequencyDownload.module.css'
import ModuleDownload from './ModuleDownload'
import { useContext, useEffect, useState } from 'react';
import { FrequencyContext } from '../../context/FrequencyProvider';

export function FrequencyDownload() {

  const {
    frequencyDayCurrentDownload, 
    frequencyDaySpecificDownload,
    frequencyDayCurrentDownloadURL
  } = useContext(FrequencyContext)

  const sdownloadDaySpecific = (data) => {
    console.log(data);
    frequencyDaySpecificDownload(data)
    //função para enviar requisição de dias esoecifico
  }

  const sdownloadDayCurrent = () => {
    console.log("Dia atual");
    //função para enviar requisição de dias esoecifico
    frequencyDayCurrentDownload()
  }

  const [urlCSV, seturlCSV] = useState(null)

  useEffect(()=>{
    if (frequencyDayCurrentDownloadURL) {
      console.log(frequencyDayCurrentDownloadURL);
        
      //   seturlCSV(csvUrl);
      // setDonwloadCSV(
      //   <div>
      //       <a href={frequencyDayCurrentDownloadURL} 
      //       // download={`cvs`}
      //       >
      //     fazer download

      //       </a>

      //     {/* <div>
      //     fazer download
      //     </div> */}
      //     <button onClick={()=> setDonwloadCSV(null)}>
      //       fechar
      //     </button>
      //   </div>
      // );
    }
  }, [frequencyDayCurrentDownloadURL])

  const [donwloadCSV, setDonwloadCSV] = useState(null)

  return (
    <div className={style.content}>
      {donwloadCSV}
      <div className={style.header}>
        <h1>Baixar frequência</h1>

      </div>
      <div  className={style.internContent}>
        <ModuleDownload 
          title="CSV do dia atual" 
          boolInput={false} 
          sendFunction={sdownloadDayCurrent}
          // download={frequencyDayCurrentDownloadURL}
        />
        <ModuleDownload 
          title="CSV de dia específico" 
          boolInput={true} 
          sendFunction={sdownloadDaySpecific}
        />
      </div>
    </div>
  )
}
