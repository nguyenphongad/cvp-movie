import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../components/authentication/login/Login'
import Register from '../../components/authentication/register/Register'

const RouterAuth = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/resgister" element={<Register/>} />
                <Route path="*" element={<Navigate to="/login"/>} />
            </Routes>
        </>
    )
}

export default RouterAuth