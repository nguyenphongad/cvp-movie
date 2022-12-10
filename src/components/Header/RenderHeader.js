import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Image_name_logo from "../../assets/image-logo/name_logo_cvp-movie.png";
import RenderCustomMenu from '../Header/CustomMenu/RenderCustomMenu';
import Picture_avatar_cvp from "../../assets/picture_avatar-cvp/picture_avatar_cvp-movie.png"


import Picture_noti_1 from "../../assets/photo-box/photo_noti/picture_notification_1.jpeg";
import Picture_noti_2 from "../../assets/photo-box/photo_noti/picture_notification_2.jpeg";
import Picture_noti_3 from "../../assets/photo-box/photo_noti/picture_notification_3.jpeg";

import { BiSearchAlt2 } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { RiAccountCircleFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import { IoIosHelpCircle } from 'react-icons/io';

function RenderHeader() {

    const [scroll, setScroll] = useState(false);
    const [dropdownBoxSel, setdropdownBoxSel] = useState(false);
    const [dropdownBoxNoti, setdropdownBoxNoti] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 200);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleButtonDrop = () => {
        setdropdownBoxSel(!dropdownBoxSel);
    }

    let dropRef = useRef();
    useEffect(() => {
        let hanlder = (e) => {
            if (!dropRef.current.contains(e.target))
                setdropdownBoxSel(false)
        }
        document.addEventListener("mousedown", hanlder);
        return () => document.removeEventListener("mousedown", hanlder);
    })
    // noti
    const handleButtonDropNoti = () => {
        setdropdownBoxNoti(!dropdownBoxNoti);
    }

    let dropNotiRef = useRef();
    useEffect(() => {
        let hanlder = (e) => {
            if (!dropNotiRef.current.contains(e.target))
                setdropdownBoxNoti(false)
        }
        document.addEventListener("mousedown", hanlder);
        return () => document.removeEventListener("mousedown", hanlder);
    });


    return (
        <div className="header">
            <div className={`trow__header--tr ${scroll ? "bgr-opacity-none" : "bgr-opacity"}`}>
                <div className="box_name-logo">
                    <div className="border-logo">
                        <NavLink to="#" >
                            <img src={Image_name_logo} alt="name" />
                        </NavLink>
                    </div>
                </div>

                <div className="box_menu-heading">
                    <RenderCustomMenu />



                </div>
                <div className="box_navigation">
                    <div className="row-section--nav">
                        <div className="btn_section">
                            <BiSearchAlt2 />
                        </div>
                        <div className="btn_section btn_section_notification" ref={dropNotiRef}>
                            <div onClick={handleButtonDropNoti}>
                                <IoNotifications />
                            </div>

                            <div className={`box_drops-notification ${dropdownBoxNoti ? "active" : "inactive"}`}>
                                <div className="body__drop">
                                    <div className="item_list--noti">
                                        <img src={Picture_noti_1}/>
                                        <div className="heading_noti-public">
                                            <div className="title-heading">Wednesday | 2022</div>
                                            <div className="font-exp_day">Just released : 10 day ago</div>
                                        </div>
                                    </div>
                                    <div className="item_list--noti">
                                        <img src={Picture_noti_2}/>
                                        <div className="heading_noti-public">
                                            <div className="title-heading">Avatar 2 | 2022</div>
                                            <div className="font-exp_day">Expectation : 1 more week</div>
                                        </div>
                                    </div>
                                    <div className="item_list--noti">
                                        <img src={Picture_noti_3}/>
                                        <div className="heading_noti-public">
                                            <div className="title-heading">Peaky bliders 3 | 2022</div>
                                            <div className="font-exp_day">Expectation : 2 more week</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="btn_dropdown-account" ref={dropRef}>
                            <div className="border-drop" onClick={handleButtonDrop}>
                                <img src={Picture_avatar_cvp} />
                            </div>
                            <div className={`box_drops-account ${dropdownBoxSel ? "active" : "inactive"}`}>
                                <div className="body__drop">
                                    <div className="item_select-drop">
                                        <Link to="#">
                                            <RiAccountCircleFill />
                                            <span>Account</span>
                                        </Link>
                                    </div>
                                    <div className="item_select-drop">
                                        <Link to="#">
                                            <AiFillSetting />
                                            <span>Setting</span>
                                        </Link>
                                    </div>
                                    <div className="item_select-drop">
                                        <Link to="#">
                                            <IoIosHelpCircle />
                                            <span>Help Center</span>
                                        </Link>
                                    </div>
                                    <div className="item_select-drop waring_hover">
                                        <Link to="#">
                                            <RiLogoutCircleRFill />
                                            <span>Sign out</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderHeader