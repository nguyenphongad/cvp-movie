import React from 'react'
import RenderInterfaceAuth from '../interfaceAuth/RenderInterfaceAuth'
import ResgisterForm from './ResgisterForm'

const Resgister = () => {
    return (
        <div>
            <RenderInterfaceAuth>
                <ResgisterForm/>
            </RenderInterfaceAuth>
        </div>
    )
}

export default Resgister