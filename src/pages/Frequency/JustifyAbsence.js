import { useContext, useEffect, useState } from "react";
import style from "./JustifyAbsence.module.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FrequencyContext } from "../../context/FrequencyProvider";


export function JustifyAbsence({title, descripstionAbsenceBoll, descripstionAbsenceTitle, close, dataDB, dateFormated}) {

  const [dataAbsenceFrequency, setDataAbsenceFrequency] = useState();
  const {justifyAbsence,revokeJustifyAbsence, justifyAbsenceError, setJustifyAbsenceError} = useContext(FrequencyContext);
  
  const [menssageError400, setMenssageError400] = useState(null);
  useEffect(()=>{
    if(justifyAbsenceError && justifyAbsenceError.response.status === 400){
        // console.log("Ola");
        setMenssageError400(
            <div className={style.internContentError}>
                <div className={style.close}>
                    <button onClick={handleStateError}><IoIosCloseCircleOutline /></button>
                </div>
                <div>A falta já foi justificada nesta data.</div>
            </div>
            
        );
        
    } else{
        setJustifyAbsenceError(null)
    }
    // console.log(justifyAbsenceError.response.status);
  }, [justifyAbsenceError]);

  const handleStateError = () =>{
    setMenssageError400(null)

  }

  const handleState = (data) => {
    close(data)
    setJustifyAbsenceError(null)
  }

  const SubmitData = () => {
    if(descripstionAbsenceBoll === true){
        revokeJustifyAbsence(dataDB)
    } else {
        justifyAbsence(dataAbsenceFrequency)
    }
  }

  const handleChangeInput = (e) => {
      setDataAbsenceFrequency({...dataAbsenceFrequency, [e.target.name]: e.target.value})
  }
    
  return (
      <div className={style.content}>
        
        <div className={style.internContent}>

            {menssageError400}

            <div className={style.close}>
                <button onClick={() => handleState(null)}><IoIosCloseCircleOutline /></button>
            </div>

            <h1>{title}</h1>
            <div className={style.dataInsert}>
                {descripstionAbsenceBoll ? (
                    <p>
                        Revogar falta previamente justificada na data {`${dateFormated}`}?
                    </p>
                ) : (
                    <>
                        <div className={style.descrition}>
                            <label htmlFor="descriptionAbsence">{descripstionAbsenceTitle}</label>
                            <br />
                            <textarea 
                                name="description" 
                                id="descriptionAbsence" 
                                cols="30" 
                                rows="5" 
                                placeholder="Insira a motivo..." 
                                onChange={handleChangeInput}
                            ></textarea>
                        </div>
                        <div className={style.date}>
                            <label htmlFor="date">Data</label>
                            <br />
                            <input 
                                name="date" 
                                id="date" 
                                type="date" 
                                placeholder="Insira a data a ser alterada"
                                onChange={handleChangeInput}
                            />
                        </div>
                    </>
                )}


            </div>

            <button className={style.button} onClick={SubmitData}>Enviar</button>

        </div>
    </div>
  )
}
