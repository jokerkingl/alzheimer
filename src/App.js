import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Admin from "./pages/admin"
import Login from "./pages/login"
import './App.scss'

const App = ()=>{
    return (
        <div id={'all'}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<Login />} />
                    <Route path={'/*'} element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}
export default App