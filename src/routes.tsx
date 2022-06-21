import React from 'react'
import { BrowserRouter, Route, Routes as Rt } from 'react-router-dom'
import Header from './components/Header/Index'
import Home from './pages/Home/Index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Rt>
                <Route path="/" element={<Home />} />
            </Rt>
        </BrowserRouter>
    )
}
