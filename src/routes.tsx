import React from 'react'
import { BrowserRouter, Route, Routes as Rt } from 'react-router-dom'
import FooterMain from './components/Footer/Index'
import Header from './components/Header/Index'
import Home from './pages/Home/Index'
import Ingressos from './pages/Ingressos/Index'
import Login from './pages/Login/Index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Rt>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Ingressos" element={<Ingressos/>} />
            </Rt>
            <FooterMain />
        </BrowserRouter>
    )
}
