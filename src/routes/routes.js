import {Route, Routes, Outlet } from "react-router-dom";
import {Home} from '../pages/home/Home.js'
import { Login } from "../pages/login/Login.js";
import { CreateStudents } from "../pages/Students/CreateStudents.js";
import { Error } from "../pages/error/Error.js";

export const RoutesApp = () => {
    return (
        <Routes>
            < Route path="/login" element={<Login/> } />
            < Route path="/create_student" element={<CreateStudents/> } />
            < Route exact path="/" element={<Home/> } />
            < Route exact path="/*" element={<Error/> } />
        </Routes>
    );
}