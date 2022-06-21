import React from 'react'
import { BrowserRouter, Route, Routes as Rt } from 'react-router-dom'
import Home from './pages/Home/Index'

export default function Routes() {
    return (
        <BrowserRouter>
            <Rt>
                <Route path="/" element={<Home />} />
            </Rt>
        </BrowserRouter>
    )
}
