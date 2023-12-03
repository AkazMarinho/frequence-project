import {Link } from "react-router-dom";
import { useState } from 'react';
import style from './App.module.css'
import { ListStudents } from './pages/ListStudents';
import { RoutesApp } from "./routes/Routes";


function App() {

  // const [validation, setValidation] = useState()

  return (
    
      <div className='w-full h-[100vh]'>
          {/* <Link to='/'>
            Home
          </Link>

          <Link to='/login'>
            login
          </Link> */}

        <RoutesApp/>
      </div>
    
  );
}

export default App;
