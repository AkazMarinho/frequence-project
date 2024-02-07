import axios from "axios";
import { createContext, useState } from "react";
import env from 'react-dotenv';
import { Navigate, useNavigate } from "react-router-dom";

export const StudentsContext = createContext();


export function StudentsProvider ({children}) {

    const Navigate = useNavigate();

    const URL = env.API_URL;

    const [loader, setLoader] = useState(false);

    
    const KeyAuth = localStorage.getItem("keyAuth");
    const Keytenant = localStorage.getItem("tenant");
    const idUser = localStorage.getItem("R7sT3pL9oQ2aX1iF5gU0rD8sM6");

    const [resultCreateStudent, setResultCreateStudent] = useState()
    const createStudent = async (data) => {
        setLoader(true);


        const firstName = data.firstName
        const secondName = data.secondName
        const bornYear = data.bornYear
        const cpf = data.cpf
        const email = data.email
        try{

            const response = await axios.post(`${URL}api/v1/students/${idUser}`,
            {
                "cpf": cpf,
                "bornYear":bornYear,
                "firstName": firstName,
                "secondName":secondName,
                "email": email
            }, {
                headers : {
                    "Content-Type" : "application/json",
                    "X-API-KEY" : KeyAuth

                },
                params: {
                    "tenant" : Keytenant
                }
            }
            )

            console.log(response);
            setResultCreateStudent(response)

            if (response.status === 201){
                Navigate('/');
                setLoader(false);
            }
        } catch (error) {
            console.log(error)
            setResultCreateStudent(error)
        }
    }

    const AttStudent = async (data) => {
        setLoader(true);


        const firstName = data.firstName
        const secondName = data.secondName
        const bornYear = data.bornYear
        const cpf = data.cpf
        const email = data.email
        try{

            const response = await axios.post(`${URL}api/v1/students/${idUser}`,
            {
                "cpf": cpf,
                "bornYear":bornYear,
                "firstName": firstName,
                "secondName":secondName,
                "email": email
            }, {
                headers : {
                    "Content-Type" : "application/json",
                    "X-API-KEY" : KeyAuth

                },
                params: {
                    "tenant" : Keytenant
                }
            }
            )

            console.log(response);

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
    const listStudents = async () => {

        const keyAuth = localStorage.getItem("keyAuth"); //seta em local storage a apikey do usuario
        const tenant = localStorage.getItem("tenant"); //seta em local storage o tenant do usuario

        try {
            const response = await axios.get(`${URL}api/v1/students`,{
                headers : {
                    'Content-Type': 'application/json',
                    "X-API-KEY" : keyAuth
                },
                params : {
                    'tenant' : tenant
                },
            });

            console.log(response);

            if (response.status === 200) {
                setListStudent(response)
            }
        } 
        catch (error) {
            console.log(error);
        }
    }


    
    const access = async (KeyAuth, Keytenant) => {
        const response = await axios.get(`${URL}api/v1/students`, 
        {
            auth : {
                "key" : "X-API-KEY" ,
                "value" : KeyAuth,
            },
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                "tenant": Keytenant
            }
        }
        ).then(
            (response) => {
                console.log(response);

            }
        ).catch(err => console.log(err))
    }

    const reacts = 5;

    return (
        <StudentsContext.Provider value={{loader,listStudent, listStudents, createStudent, resultCreateStudent, AttStudent}}>{children}</StudentsContext.Provider>
    )
}