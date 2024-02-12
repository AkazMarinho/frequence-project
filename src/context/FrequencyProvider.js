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
        // try{

        //     const response = await axios.get(`${URL}api/v1/frequency/sheet`,
        //     {
        //         headers : {
        //             'Content-Type': 'application/json',
        //             "X-API-KEY" : localData.keyAuth
        //         },
        //         params : {
        //             'tenant' : localData.tenant,
        //         }
        // });
        // console.log(response);

        // if(response.status === 200){
            
        //     setFrequencyDayCurrentDownloadURL(response);
        // }
        // }
        // catch(error){
        //     console.log(error);
        // }

        try {
            // Faz a requisição para obter a resposta com os dados
            const response = await axios.get(`${URL}api/v1/frequency/sheet`, {
              headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': localData.keyAuth,
              },
              params: {
                'tenant': localData.tenant,
              },
              responseType: 'blob', // Define o tipo de resposta como blob
            });
      
            // Cria uma URL temporária para o blob de dados recebido na resposta
            const url = window.URL.createObjectURL(new Blob([response]));
      
            // Cria um elemento <a> para simular o clique e iniciar o download
            const a = document.createElement('a');
            a.href = url;
      
            // Define o nome do arquivo a ser baixado (substitua pelo nome desejado)
            a.download = 'arquivo_download.csv'; // Substitua pela extensão desejada
      
            // Adiciona o elemento ao corpo do documento
            document.body.appendChild(a);
      
            // Simula o clique no elemento <a> para iniciar o download
            a.click();
        } catch (error){

        }
    }

    const frequencyDaySpecificDownload = async (data) => {

        // try{

        //     const response = await axios.get(`${URL}api/v1/frequency/sheet`,
        //     {
        //         headers : {
        //             'Content-Type': 'application/json',
        //             "X-API-KEY" : localData.keyAuth
        //         },
        //         params : {
        //             'tenant' : localData.tenant,
        //             "date": data
        //         }
        // });
        // console.log(response);
        // }
        // catch(error){
        //     console.log(error);
        // }

        try {
            // Faz a requisição para obter a resposta com os dados
            // const response = await axios.get(`${URL}api/v1/frequency/sheet`, {
            //   headers: {
            //     'Content-Type': 'application/json',
            //     'X-API-KEY': localData.keyAuth,
            //   },
            //   params: {
            //     'tenant': localData.tenant,
            //     'date': data,
            //   },
            //   responseType: 'blob', // Define o tipo de resposta como blob
            // });

            // const a = document.createElement('a');
            // a.href = response;
            // a.download = 'arquivo_download.csv'; // Substitua pela extensão desejada
      
            // document.body.appendChild(a);
            // a.target = '_blank';
      
            // a.click();

            // Adiciona cabeçalhos como parâmetros de consulta na URL
      const urlWithHeaders = `${URL}api/v1/frequency/sheet?Content-Type=application/json&X-API-KEY=${localData.keyAuth}&tenant=${localData.tenant}&date=${data}`;

      // Faz a requisição para obter a resposta com os dados
      const response = await axios.get(urlWithHeaders, { responseType: 'blob' });

      // Cria uma URL temporária para o blob de dados recebido na resposta
      const url = window.URL.createObjectURL(new Blob([response.data]));

      // Cria um elemento <a> para simular o clique e iniciar o download
      const a = document.createElement('a');
      a.href = url;

      // Define o nome do arquivo a ser baixado
      a.download = 'arquivo_download.csv';

      // Adiciona o atributo target="_blank" para abrir em uma nova guia
      a.target = '_blank';

      // Adiciona o elemento ao corpo do documento
      document.body.appendChild(a);

      // Simula o clique no elemento <a> para iniciar o download
      a.click();

        } catch (error){

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