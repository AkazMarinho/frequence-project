import {Route, Routes} from "react-router-dom";
import {Home} from '../pages/home/Home.js'
import { Login } from "../pages/login/Login.js";
import { CreateStudents } from "../pages/Students/CreateStudents.js";
import { Error } from "../pages/error/Error.js";
import { AttStudent } from "../pages/Students/AttStudent.js";
import { Frequency } from "../pages/Frequency/Frequency.js";
import { FrequencyDownload } from "../pages/FrequencyDownload/FrequencyDownload.js";
import Credits from "../pages/credits/Credits.js";

export const RoutesApp = () => {
    return (
        <Routes>
            < Route path="/login" element={<Login/> } />
            < Route path="/create_student" element={<CreateStudents/> } />
            < Route path="/att_student" element={<AttStudent/> } />
            < Route path="/frequency_day" element={<FrequencyDownload/> } />
            < Route path="/frequency" element={<Frequency/> } />
            < Route path="/credits" element={<Credits/>} />
            < Route exact path="/" element={<Home/> } />
            < Route exact path="/*" element={<Error/> } />
        </Routes>
    );
}