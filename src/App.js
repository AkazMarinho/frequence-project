import { RoutesApp } from "./routes/routes.js";
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
      <div className='bg-[#f1f1f1] flex w-full h-full relative '>
        <StudentsProvider>
          <QrcodeProvider>
            <FrequencyProvider>
              

              <div className={` flex justify-between flex-col  h-[100vh] min-h-[560px] min-w-[13.75rem] max-w-[13.75rem] relative`}>
              <NavBar/> 

              </div>

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
