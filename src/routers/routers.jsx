import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export default function AppRouters(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
        </Routes>
    )
}