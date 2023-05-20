import React, { useState } from 'react'
import { Link } from "react-router-dom"
import RenderInputHandle from '../interfaceAuth/RenderInputHandle'

import { MdOutlineMailOutline } from "react-icons/md"
import { AiOutlineLogin } from "react-icons/ai"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'

const LoginForm = () => {

    const [activeToggleShowPass, setActiveToggleShowPass] = useState(true);
    const handleToggleShowPass = ()=>{
        setActiveToggleShowPass(!activeToggleShowPass)
    }

    return (
        <div className="form_ifame_authentication form__login-ifame">
            <div className='form__groups'>
                <div className="heading__text--wg">LOGIN</div>
                <form action="" method="">
                    <RenderInputHandle
                        name_label="Email"
                        type="email"
                        name_method="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Enter email"
                        icon_right={<MdOutlineMailOutline />}
                    />
                    <RenderInputHandle
                        name_label="Password"
                        type={activeToggleShowPass ? "password" : "text"}
                        name_method="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Enter password"
                        className_pass={`wrap_icon_right ${activeToggleShowPass ? "active_focus_pass" :""}`}
                        icon_right={<FaRegEye />}
                        icon_handle_pass={<FaRegEyeSlash/>}

                        onClickShowPass={handleToggleShowPass}
                    />
                    <div className="nuti_btn_fort-pass">
                        <Link to="../forgot-password">Forgot password</Link>
                    </div>

                    <button type="button" className="btn__login--handle">
                        <AiOutlineLogin />
                        Login
                    </button>
                    <div className="group__input option__more">
                        <div>
                            <span>Don't have a CVP-MOVIE account yet? </span>
                            <Link to="../resgister">Resgister</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm