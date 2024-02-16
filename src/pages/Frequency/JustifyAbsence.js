import { useContext, useEffect, useState } from "react";
import style from "./JustifyAbsence.module.css"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FrequencyContext } from "../../context/FrequencyProvider";
import { ButtonLoading } from "../../StyledComponents/ButtonLoading.style";
import { Loader } from "../../Layout/Loader";


export function JustifyAbsence({title, descripstionAbsenceBoll, descripstionAbsenceTitle, close, dataDB, dateFormated}) {

  const [dataAbsenceFrequency, setDataAbsenceFrequency] = useState();
  const {justifyAbsence,revokeJustifyAbsence, justifyAbsenceError, setJustifyAbsenceError, loader} = useContext(FrequencyContext);
  

  const [menssageError, setMenssageError] = useState(null);
  useEffect(()=>{
    if(justifyAbsenceError === "badRequest" ){
        setMenssageError(
            <div className={style.internContentError}>
                <div className={style.close}>
                    <button onClick={() => {
                        setMenssageError(null)
                        setJustifyAbsenceError(null)

                    }}><IoIosCloseCircleOutline /></button>
                </div>
                <div>A falta já foi justificada nesta data.</div>
            </div>
            
        );
    } else if (justifyAbsenceError === "incompleteData" ){
        setMenssageError(
            <div className={style.internContentError}>
                <div className={style.close}>
                    <button onClick={() => {
                        setMenssageError(null)
                        setJustifyAbsenceError(null)

                    }}><IoIosCloseCircleOutline /></button>
                </div>
                <span>Ocorreu um erro inesperado</span>
                <span>Verifique se todos os campos estão preenchidos e tente novamente</span>
                <button className={style.button} onClick={() => {
                        setMenssageError(null)
                        setJustifyAbsenceError(null)
                 }}>
                    Ok
                </button>
            </div>
        );
    }
    else{
        setJustifyAbsenceError(null)
    }
  }, [justifyAbsenceError]);

//   const handleStateError = () =>{
//     setMenssageError(null)
//   }

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

            {menssageError}

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
            <ButtonLoading onClick={SubmitData}>
                <span>Enviar</span>
                {loader ? <Loader/> : ""}
            </ButtonLoading>


        </div>
    </div>
  )
}
