import { useEffect, useState } from 'react'
import style from './ModuleDownload.module.css'


export default function ModuleDownload({title, boolInput,sendFunction, dateCurrenty}) {

  const [dataInput, setDataInput] = useState();
  const [errorSendData, setErrorSendData] = useState(null);

  const onSubmit = () => {

    if(boolInput === true ){
        if (dataInput === undefined) {
            setErrorSendData(
                <div className={style.errorSendDataArea}>
                    <div className={style.errorSendData}>
                        <div>
                            <h1>É necessario informar alguma data</h1>
                            <button
                                onClick={() => setErrorSendData(null)}
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
            )

        } else {
            sendFunction(dataInput);
        }
    } else{
        sendFunction();
    }
  }


  const handleChangeInput = (e) =>{
    setDataInput(e.target.value);
  }


  return (
    <div className={style.download_day}>
        {errorSendData}
        
          <span>{title}</span>

          {boolInput === true && (
            <div>
                <label >Escolha um dia para realizar a busca</label>
                <input 
                value={dateCurrenty}
                name="date" 
                id="date" 
                type="date" 
                placeholder="Insira a data a ser alterada"
                onChange={handleChangeInput}
                />
            </div>
          )}

        <div >
            <button onClick={() => {
                onSubmit()
            }
                }>Verificar</button>
        </div>

    </div>
  )
}
