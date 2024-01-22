import { RoutesApp } from "./routes/Routes";
import { NavBar } from "./pages/navbar/NavBar";
import { Login } from "./pages/login/Login.js";


import { useContext, useEffect } from "react";

import {StudentsProvider } from './context/StudentManager.js';

import Loader from "./Layout/Loader.js";

function App() {
  
  const log = localStorage.getItem("log");

  console.log("valiação 1:" + log);

  if(log == "true"){
    
    console.log("valiação 2:" +log);
    return (
      (
      <div className='bg-[#f1f1f1] flex w-full h-full'>
        <StudentsProvider>
          <NavBar/> 
          <RoutesApp/> 

        </StudentsProvider>   
      </div>
      ))
  }

  return (

      <div className='bg-[#f1f1f1] flex w-full h-full'>
        <Login/>
      </div>
  );
}


export default App;
