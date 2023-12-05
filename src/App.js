<<<<<<< HEAD
import { useState } from "react";
import style from "./App.module.css";
import { ListStudents } from "./pages/ListStudents";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { AuthProvider } from "./context/userContext";
=======
import {Link } from "react-router-dom";
import { useState } from 'react';
import style from './App.module.css'
import { ListStudents } from './pages/ListStudents';
import { RoutesApp } from "./routes/Routes";

>>>>>>> f339c670b8db26f8dd4982280a53c587b04c45cb

function App() {
  // const [validation, setValidation] = useState()

  return (
<<<<<<< HEAD
    <AuthProvider>
      <div className="w-full h-[100vh]">
        {/* {'validation' ? 'tela de login' : 'corpo do site'} */}
        <Login />

        {/* <Home /> */}

        {/* <ListStudents/> */}
      </div>
    </AuthProvider>
=======
    
      <div className='w-full h-[100vh]'>
          {/* <Link to='/'>
            Home
          </Link>

          <Link to='/login'>
            login
          </Link> */}

        <RoutesApp/>
      </div>
    
>>>>>>> f339c670b8db26f8dd4982280a53c587b04c45cb
  );
}

export default App;
