import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <div className="form_ifame_authentication form__register-ifame">
            <div className='form__groups'>
                <div className="heading__text--wg">REGISTER</div>
                <div>RegisterForm <Link to="../login">login</Link></div>
            </div>
        </div>
    )
}

export default RegisterForm