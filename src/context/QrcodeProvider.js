import {createContext, useState } from "react";
import env from "react-dotenv";
import axios from "axios";

export const QrcodeContext = createContext({});

export function QrcodeProvider({children}) {
    const URL = env.API_URL;

    const localData = { 
        "skId" : localStorage.getItem("studentSkId"), //seta em local storage a apikey do usuario,
        "keyAuth" : localStorage.getItem("keyAuth"), //seta em local storage a apikey do usuario,
        "tenant" : localStorage.getItem("tenant"), //seta em local storage o tenant do usuario
    }

    const [QRcodeImageData, setQRcodeImageData] = useState();
    const QRcodeImage = async () =>{

        const SkIdStu = localStorage.getItem("studentSkId");//Erro ao pegar dados de SK_ID
        try{
            const response = await axios.get(`${URL}api/v1/qrcode/generate`, {
                headers : {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : localData.keyAuth
                },
                params : {
                    'tenant' : localData.tenant,
                    "studentSkId" : SkIdStu
                }
            })

            console.log(response);

            if(response.status === 200){
                setQRcodeImageData(response.data);
            }

        } catch(error){
            console.log("Erro QRcodeImage: " + error)

        }
    }


    return (
        <QrcodeContext.Provider value={{QRcodeImage, QRcodeImageData}}>{children}</QrcodeContext.Provider>
    )
}