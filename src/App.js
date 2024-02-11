import { RoutesApp } from "./routes/Routes";
import { NavBar } from "./pages/navbar/NavBar";
import { Login } from "./pages/login/Login.js";

import {StudentsProvider } from './context/StudentManager.js';
import { QrcodeProvider } from "./context/QrcodeProvider.js";
import { FrequencyProvider } from "./context/FrequencyProvider.js";


function App() {
  
  const log = localStorage.getItem("log");

  if(log == "true"){
    
    return (
      (
      <div className='bg-[#f1f1f1] flex w-full h-full'>
        <StudentsProvider>
          <QrcodeProvider>
            <FrequencyProvider>

              <NavBar/> 
              <RoutesApp/> 

            </FrequencyProvider>
          </QrcodeProvider>
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
