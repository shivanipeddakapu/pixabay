import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import LoginPage from "./Pages/Login/Loginpage";
import Signpage from "./Pages/Sign/Signpage";
// import Part3 from "./Components/Part3"

export default class Router extends React.Component{
     render(){
        return(
           <BrowserRouter>
           <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sign" element={<Signpage/>}></Route>
            <Route path="/log" element={<LoginPage/>}></Route>
           </Routes>
           </BrowserRouter>
        )
     }
} 
