import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import {Home} from '../pages/home/Home.js'
import { Login } from "../pages/login/Login.js";

export const RoutesApp = () => {
    return (
        <Routes>
            < Route exact path="/" element={<Home/> } />
            < Route exact path="/login" element={<Login/> } />
        </Routes>
    );
}