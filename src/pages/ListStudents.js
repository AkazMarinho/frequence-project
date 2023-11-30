import { useState, useEffect } from "react"
import axios from 'axios'

export function ListStudents(){

    const [listStudent, setListStudent] = useState([])



    useEffect(() => {
        axios.get("https://sfsystem.onrender.com/api/v1/admin/333530590131", {
            params : {
                'tenant' : '987653'
            }, 
            headers :{
                'Content-Type' : 'application/json'
            }
        }
        )
        .then((data) => {
            console.log(data.data)
            setListStudent(data.data)
        })
        .catch((err) =>console.log(err))
    }, [])


    return(<div>
        <div>
        </div>
        <p>
            {listStudent.firstName}
           
        </p>
    </div>
    
    )
}