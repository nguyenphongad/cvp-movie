import { UseContextFromFullScreen } from '../../views/RenderFullScreen';

import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../Error/RenderErrorBounDary';

import Image_name_logo from "../../assets/image-logo/name_logo_cvp-movie.png";
import Image_logo_cvp from "../../assets/image-logo/logo_cvp-movie.png";

import RenderCustomMenu from '../Header/CustomMenu/RenderCustomMenu';
import Picture_avatar_cvp from "../../assets/picture_avatar-cvp/picture_avatar_cvp-movie.png"

import Picture_noti_1 from "../../assets/photo-box/photo_noti/picture_notification_1.jpeg";
import Picture_noti_2 from "../../assets/photo-box/photo_noti/picture_notification_2.jpeg";
import Picture_noti_3 from "../../assets/photo-box/photo_noti/picture_notification_3.jpeg";

import { IoNotifications } from "react-icons/io5";
import { RiAccountCircleFill, RiLogoutCircleRFill } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import { IoIosHelpCircle } from 'react-icons/io';
import { RiFullscreenFill } from 'react-icons/ri';
import RenderBoxSearch from './BoxSearch/RenderBoxSearch';
import { MdSearchOff, MdSearch } from 'react-icons/md';

export const DropBtnBoxSearch = createContext();

function RenderHeader() {


    const [scroll, setScroll] = useState(false);
    const [dropdownBoxSearch, setdropdownBoxSearch] = useState(false);
    const [dropdownBoxSel, setdropdownBoxSel] = useState(false);
    const [dropdownBoxNoti, setdropdownBoxNoti] = useState(false);
    const locationBackSearch = window.location.pathname


    useEffect(() => {
        if (window.location.pathname !== '/home' && window.location.pathname !== '/') {
            setScroll(true)
        }
        const handleScroll = () => {
            if (window.location.pathname === '/home' || window.location.pathname === '/')
                setScroll(window.scrollY > 100);
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [window.location.pathname]);


    //search
    const handleButtonDropSearchTrue = () => {
        setdropdownBoxSearch(true)
    }
    const handleButtonDropSearchFalse = () => {
        setdropdownBoxSearch(false)
    }

    //select
    const handleButtonDrop = () => { setdropdownBoxSel(!dropdownBoxSel); }
    let dropRef = useRef();
    useEffect(() => {
        let hanlder = (e) => {
            if (!dropRef.current.contains(e.target))
                setdropdownBoxSel(false)
        }
        document.addEventListener("mousedown", hanlder);
        return () => document.removeEventListener("mousedown", hanlder);
    });

    const dataFromFullSc = useContext(UseContextFromFullScreen);
    
    const listItemSelectDrop = [
        {
            nameBtnSelect: "Account",
            linkTo: "/your-account",
            icon_before: <RiAccountCircleFill />,
        },
        {
            nameBtnSelect: "Setting",
            linkTo: "/setting",
            icon_before: <AiFillSetting />,
        },
        {
            nameBtnSelect: "Full screen",
            linkTo: "#",
            icon_before: <RiFullscreenFill />,
            dataOnClick: dataFromFullSc.handleFullSreen.active ?
                dataFromFullSc.handleFullSreen.exit : dataFromFullSc.handleFullSreen.enter
        },
        {
            nameBtnSelect: "Help center",
            linkTo: "#",
            icon_before: <IoIosHelpCircle />,
        },
        {
            nameBtnSelect: "Sign out",
            linkTo: "#",
            icon_before: <RiLogoutCircleRFill />,
            warning_hover: "waring_hover",
        },
    ]

    const returnListSelectBtn = listItemSelectDrop.map((index) => {
        return (
            <div
                className={`item_select-drop ${index.warning_hover}`}
                onClick={() => setdropdownBoxSel(false)}
                key={index.nameBtnSelect}
            >
                <Link to={index.linkTo} onClick={index.dataOnClick}>
                    {index.icon_before}
                    <span>{index.nameBtnSelect}</span>
                </Link>
            </div>
        )
    });


    // notification
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
        setScroll,
        scroll,
        locationBackSearch
    }

    return (
        <>
            <DropBtnBoxSearch.Provider value={valueHeaderToBoxSearch}>
                <div className="header">
                    <div className={`trow__header--tr ${scroll ? "bgr-opacity-none" : "bgr-opacity"}`}>
                        <div className="box_name-logo">
                            <div className="border-logo">
                                <a href="/" >
                                    <img src={Image_name_logo} alt="name" className="img_name" />
                                    <img src={Image_logo_cvp} alt="name" className="img_logo" />
                                </a>
                            </div>
                        </div>

                        <div className="box_menu-heading">
                            <RenderCustomMenu />
                        </div>
                        <div className="box_navigation">
                            <div className="row-section--nav">

                                <div className="btn_section">
                                    {
                                        dropdownBoxSearch ?
                                            <button onClick={handleButtonDropSearchFalse} >
                                                <MdSearchOff />
                                            </button>
                                            :
                                            <button onClick={handleButtonDropSearchTrue} >
                                                <MdSearch />
                                            </button>
                                    }



                                </div>
                                <div className="btn_section btn_section_notification" ref={dropNotiRef}>
                                    <button onClick={handleButtonDropNoti}>
                                        <IoNotifications />
                                    </button>

                                    <div className={`box_drops-notification ${dropdownBoxNoti ? "activeDropHeader" : "inactiveDropHeader"}`}>
                                        <div className="top_show">
                                            <div className={`an_border-top ${dropdownBoxNoti ? "an_border-top-tran-enlarge" : "an_border-top-tran-zoom_out"}`}>
                                            </div>
                                        </div>
                                        <div className="body__drop">

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
                                    <div className={`box_drops-account ${dropdownBoxSel ? "activeDropHeader" : "inactiveDropHeader"}`}>
                                        <div className="body__drop">
                                            <div className="top_show">
                                                <div className={`an_border-top ${dropdownBoxSel ? "an_border-top-tran-enlarge" : "an_border-top-tran-zoom_out"}`}>
                                                </div>
                                            </div>
                                            {returnListSelectBtn}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RenderBoxSearch />
            </DropBtnBoxSearch.Provider>
        </>
    )
}

export default withErrorBoundary(RenderHeader, {
    FallbackComponent: RenderErrorBounDary
})