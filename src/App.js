import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home"
import './App.scss'

const App = ()=>{
    return (
        <div id={'all'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}
export default App