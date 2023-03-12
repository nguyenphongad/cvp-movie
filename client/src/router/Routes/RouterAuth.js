import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import RenderInterfaceAuth from '../../components/authentication/interfaceAuth/RenderInterfaceAuth'
import Login from '../../components/authentication/login/Login'
import Resgister from '../../components/authentication/resgister/Resgister'

const RouterAuth = () => {
    return (
        <div>
            <Routes>
                kkk
                <Route path="/login" element={<Login/>} />
                <Route path="/resgister" element={<Resgister/>} />
                <Route path="*" element={<Navigate to="/login"/>} />
            </Routes>
        </div>
    )
}

export default RouterAuth