import { createContext, useState } from "react";
import axios from "axios";
import env from "react-dotenv";


export const FrequencyContext = createContext({});


export function FrequencyProvider ({children}){
    const URL = env.API_URL;
    
    const localData = { 
        "skId" : localStorage.getItem("studentSkId"), //seta em local storage a apikey do usuario,
        "keyAuth" : localStorage.getItem("keyAuth"), //seta em local storage a apikey do usuario,
        "tenant" : localStorage.getItem("tenant"), //seta em local storage o tenant do usuario
    }

    const [justifyAbsenceError, setJustifyAbsenceError] = useState(0);

    const justifyAbsence = async (data) => {
        console.log(data)
        try{
            const response = await axios.post(`${URL}api/v1/frequency`,
                {
                    "description": data.description
                },{
                    headers : {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : localData.keyAuth
                },
                params : {
                    'tenant' : localData.tenant,
                    "studentSkId" : localData.skId,
                    "date" : data.date
                }
            })

            console.log(response.status);

            if (response.status === 200) {
                window.location.reload();
            } else {
            setJustifyAbsenceError(response.status)

            }
        }
        catch (error){
            console.log("Erro aqui"+error)
            setJustifyAbsenceError(error)
        }
    }

    const revokeJustifyAbsence = async (data) => {
        try{
            const response = await axios.patch(`${URL}api/v1/frequency`,
            null,
            {
                headers : {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : localData.keyAuth
                },
                params : {
                    'tenant' : localData.tenant,
                    "studentSkId" : localData.skId,
                    "date" : data
                }
            })

            if (response) {
                window.location.reload();
            }
        }
        catch (error){
            console.log(error)
        }
    }

    const [frequencyDayCurrentDownloadURL, setFrequencyDayCurrentDownloadURL] = useState(null)
    const frequencyDayCurrentDownload = async () => {

        console.log("Funionou");
        try{

            const response = await axios.get(`${URL}api/v1/frequency/sheet`,
            {
                headers : {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : localData.keyAuth
                },
                params : {
                    'tenant' : localData.tenant,
                }
        });
        console.log(response);

        if(response.status === 200){
            
            setFrequencyDayCurrentDownloadURL(response);
        }
        }
        catch(error){
            console.log(error);
        }
    }

    const frequencyDaySpecificDownload = async (data) => {

        console.log("Funionou: " + data);
        try{

            const response = await axios.get(`${URL}api/v1/frequency/sheet`,
            {
                headers : {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : localData.keyAuth
                },
                params : {
                    'tenant' : localData.tenant,
                    "date": data
                }
        });
        console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <FrequencyContext.Provider value={{
            justifyAbsence, 
            revokeJustifyAbsence, 
            justifyAbsenceError, 
            setJustifyAbsenceError,
            frequencyDayCurrentDownload,
            frequencyDaySpecificDownload, 
            frequencyDayCurrentDownloadURL
        }}>
            {children}
        </FrequencyContext.Provider>
    )
}