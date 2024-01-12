import { RoutesApp } from "./routes/Routes";
import { NavBar } from "./pages/navbar/NavBar";
import { Login } from "./pages/login/Login.js";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthProvider.js";
import Loader from "./Layout/Loader.js";

function App() {
  const {loader} =useContext(AuthContext)
  const KeyAuth = localStorage.getItem("log");

  const [validation, setValidation] = useState(KeyAuth)
  const [jsx, setJsx] = useState('')

  useEffect(() => {
    setValidation(KeyAuth)
    console.log("validation: " + KeyAuth);
  },[KeyAuth])



  return (

      <div className='bg-[#f1f1f1] flex w-full h-full'>
        
        {loader && <Loader/>}

        { validation == true ?
          (<>
            <NavBar/> 
            <RoutesApp/> 
            </>)
        :
            <Login/>
        }
        
      </div>
  );
}

export default App;
