import { useState } from "react";
import style from "./App.module.css";
import { ListStudents } from "./pages/ListStudents";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { AuthProvider } from "./context/userContext";

function App() {
  // const [validation, setValidation] = useState()

  return (
    <AuthProvider>
      <div className="w-full h-[100vh]">
        {/* {'validation' ? 'tela de login' : 'corpo do site'} */}
        <Login />

        {/* <Home /> */}

        {/* <ListStudents/> */}
      </div>
    </AuthProvider>
  );
}

export default App;
