import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
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
import { MdDarkMode } from 'react-icons/md';
import RenderBoxSearch from './BoxSearch/RenderBoxSearch';

export const DropBtnBoxSearch = createContext();


function RenderHeader() {


    const [scroll, setScroll] = useState(false);
    const [dropdownBoxSearch, setdropdownBoxSearch] = useState(false);
    const [dropdownBoxSel, setdropdownBoxSel] = useState(false);
    const [dropdownBoxNoti, setdropdownBoxNoti] = useState(false);


    //search
    const handleButtonDropSearch = () => {
        setdropdownBoxSearch(!dropdownBoxSearch);
    }
    
    let dropSearchRef = useRef();

 
    //select
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
    });

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


    const valueHeaderToBoxSearch = {
        dropdownBoxSearch,
        setdropdownBoxSearch,
        dropSearchRef
    }


    return (
        <>
            <DropBtnBoxSearch.Provider value={valueHeaderToBoxSearch}>
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

                                <div className="btn_section" ref={dropSearchRef}>
                                    <button onClick={handleButtonDropSearch}>
                                        <BiSearchAlt2 />
                                    </button>
                                <RenderBoxSearch />

                                </div>
                                <div className="btn_section btn_section_notification" ref={dropNotiRef}>
                                    <button onClick={handleButtonDropNoti}>
                                        <IoNotifications />
                                    </button>

                                    <div className={`box_drops-notification ${dropdownBoxNoti ? "active" : "inactive"}`}>
                                        <div className="body__drop">
                                            <div className="top_show">
                                                <div className={`an_border-top ${dropdownBoxNoti ? "an_border-top-tran-enlarge" : "an_border-top-tran-zoom_out"}`}>
                                                </div>
                                            </div>
                                            <div className="item_list--noti">
                                                <Link to="#">
                                                    <img src={Picture_noti_1} />
                                                    <div className="heading_noti-public">
                                                        <div className="title-heading">Wednesday | 2022</div>
                                                        <div className="font-exp_day">Just released : 10 day ago</div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="item_list--noti">
                                                <Link to="#">
                                                    <img src={Picture_noti_2} />
                                                    <div className="heading_noti-public">
                                                        <div className="title-heading">Avatar 2 | 2022</div>
                                                        <div className="font-exp_day">Coming soon : 1 more week</div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className="item_list--noti">
                                                <Link to="#">
                                                    <img src={Picture_noti_3} />
                                                    <div className="heading_noti-public">
                                                        <div className="title-heading">Peaky bliders 3 | 2022</div>
                                                        <div className="font-exp_day">Coming soon : 2 more week</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="btn_dropdown-account" ref={dropRef}>
                                    <button className="border-drop" onClick={handleButtonDrop}>
                                        <img src={Picture_avatar_cvp} />
                                    </button>
                                    <div className={`box_drops-account ${dropdownBoxSel ? "active" : "inactive"}`}>
                                        <div className="body__drop">
                                            <div className="top_show">
                                                <div className={`an_border-top ${dropdownBoxSel ? "an_border-top-tran-enlarge" : "an_border-top-tran-zoom_out"}`}>
                                                </div>
                                            </div>
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
                                                    <MdDarkMode />
                                                    <span>Dark Mode</span>
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
            </DropBtnBoxSearch.Provider>
        </>
    )
}

export default RenderHeader