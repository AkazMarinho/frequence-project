import axios from "axios";
import { createContext, useState } from "react";
import env from 'react-dotenv';
import {useNavigate } from "react-router-dom";

export const StudentsContext = createContext(); //criação do contexto

export function StudentsProvider ({children}) {

    const Navigate = useNavigate(); //hook de direcionamento

    //dados recebidos do local staorage
    const localData = { 
        "skId" : localStorage.getItem("studentSkId"), //seta em local storage a apikey do usuario,
        "keyAuth" : localStorage.getItem("keyAuth"), //seta em local storage a apikey do usuario,
        "tenant" : localStorage.getItem("tenant"), //seta em local storage o tenant do usuario
        "idUser" : localStorage.getItem("R7sT3pL9oQ2aX1iF5gU0rD8sM6"),
        "userlist" : localStorage.getItem("userlist"),
    }

    const URL = env.API_URL; //link URL - variavel de ambiente

    const [loader, setLoader] = useState(false); //seta como falso sistema de loading

    const [resultCreateStudent, setResultCreateStudent] = useState() //state repsonsavel por armazenar resposta de criação de alunos
    //função de criaçã de um novo estudante
    const createStudent = async (data) => {
        setLoader(true); //ativa sistema de loading

        //dados vindo do formulario de criação
        const dataForm = {
            "firstName" : data.firstName,
            "secondName" : data.secondName,
            "bornYear" : data.bornYear,
            "cpf" : data.cpf,
            "email" : data.email
        }

        try{

            const response = await axios.post(`${URL}api/v1/students/${localData.idUser}`, //rota de criação de alunos
            {
                dataForm,
            }, {
                headers : {
                    "Content-Type" : "application/json",
                    "X-API-KEY" : localData.keyAuth

                },
                params: {
                    "tenant" : localData.tenant
                }
            })

            setResultCreateStudent(response); //seta os dados recebidos da rota no state resultCreateStudent

            if (response.status === 201){ //se a resposta for positiva e a requisição tiver sucesso..
                Navigate('/'); //direciona para a tela de home
                setLoader(false); //desativa sistema de loading
            }
        } catch (error) { //erro de requisição
            console.log(error); //mostra o erro
            setResultCreateStudent(error) //??
        }
    }

    //função de criaçã de atualização de estudante
    const AttStudent = async (data) => { //sistema de atualização de alunos (contém erros)
        setLoader(true);

        const dataForm = {
            "firstName" : data.firstName,
            "secondName" : data.secondName,
            "bornYear" : data.bornYear,
            "cpf" : data.cpf,
            "email" : data.email
        }

        try{

            const response = await axios.post(`${URL}api/v1/students/${localData.idUser}`,
            {
                dataForm
            }, {
                headers : {
                    "Content-Type" : "application/json",
                    "X-API-KEY" : localData.KeyAuth
                },
                params: {
                    "tenant" : localData.Keytenant
                }
            })

            if (response.status === 201){
                Navigate('/');
                setLoader(false);
            }
        } catch (error) {
            console.log(error)
            setResultCreateStudent(error)
        }
    }

    const [listStudent, setListStudent] = useState([])
    //função de criaçã de listagem de estudantes
    const listStudents = async () => {

        try {
            const response = await axios.get(`${URL}api/v1/students`,{ //rota para listagem de aluns no banco de dados
                headers : {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : localData.keyAuth
                },
                params : {
                    'tenant' : localData.tenant
                },
            });

            if (response.status === 200) {
                setListStudent(response.data);
            }
        } 
        catch (error) {
            console.log(error);
        }
    }

    const [dataFrequency, setDataFrequency] = useState();
    const frequency = async () => { //rota reposnsavel por pegar a 
        // console.log(localData);
        
        try{
            const response = await axios.get(`${URL}api/v1/frequency`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : localData.keyAuth
                },
                params: {
                    "tenant": localData.tenant,
                    "studentSkId" : localData.skId
                }
            })

            if(response.status === 200) {
                setDataFrequency(response.data)
            }
        }
        catch (error) {
            console.log("Erro em rota de busca de frequencia: " + error);
        }
    }

    const [dataFrequencyPerMonth, setDataFrequencyPerMonth] = useState();
    const frequencyPerMonth = async (month) => { //rota reposnsavel por pegar a 
        try{
            const response = await axios.get(`${URL}api/v1/frequency/month/${month}`, 
            {
                headers: {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : localData.keyAuth
                },
                params: {
                    "tenant": localData.tenant,
                    "studentSkId" : localData.skId
                }
            })

            if(response.status === 200) {
                setDataFrequencyPerMonth(response.data)
            }
        }
        catch (error) {
            console.log("Erro em rota de busca de frequencia: " + error);
        }
    }

    return (
        <StudentsContext.Provider value={{
            loader,
            listStudent, 
            listStudents, 
            createStudent, 
            resultCreateStudent, 
            AttStudent, 
            frequency, 
            dataFrequency, 
            dataFrequencyPerMonth,
            frequencyPerMonth
        }}>{children}</StudentsContext.Provider>
    )
}