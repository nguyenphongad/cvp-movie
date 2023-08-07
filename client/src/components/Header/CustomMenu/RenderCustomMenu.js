import React, { useContext } from 'react';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AiFillHome } from 'react-icons/ai';
import { MdPlaylistAdd } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';
import { IoTicketSharp } from 'react-icons/io5';

import { BsStarFill } from 'react-icons/bs';
import { DropBtnBoxSearch } from '../RenderHeader';
import { ContextFromWindowResize } from '../../../views/RenderGetWindowResize';
import { IoIosMenu } from 'react-icons/io';

function RenderCustomMenu() {

    const useContextFromHeader = useContext(DropBtnBoxSearch)
    const useContextFromWindowSize = useContext(ContextFromWindowResize);

    const element = useRef();

    const listMenuHeader = [
        {
            id: 1,
            to: "/",
            ref: element,
            styleDisplay: true
        },
        {
            id: 2,
            to: "/home",
            nameMenuHeader: "HOME",
            iconMenuHeader: <AiFillHome />,
            indexMenu: true
        },
        {
            id: 3,
            to: "/my-list",
            nameMenuHeader: "MY LIST",
            iconMenuHeader: <MdPlaylistAdd />,
        },
        {
            id: 4,
            to: "/movies",
            nameMenuHeader: "MOVIES",
            iconMenuHeader: <RiMovie2Fill />,
        },
        {
            id: 5,
            to: "/cinema/book-tickets",
            nameMenuHeader: "BOOK TICKETS",
            iconMenuHeader: <IoTicketSharp />,
            starNew: true
        }
    ];

    if (useContextFromWindowSize.getWidthWindow <= 425) {
        listMenuHeader.push({
            id: 6,
            to: "/menu",
            nameMenuHeader: "MENU",
            iconMenuHeader: <IoIosMenu />,
        })
    }

    const [isActiveHome, setIsActiveHome] = useState(false);
    useEffect(() => {
        if (element.current?.classList.value === "active") setIsActiveHome(true);
        else setIsActiveHome(false);

    }, [element.current?.classList.value]);

    const navLinkMenuHome = (e) => { return e.isActive || isActiveHome ? "active" : "" }
    const navLinkMenu = (e) => { return e.isActive ? "active" : "" }

    const handelClickChangeHeaderShadow = () => {
        useContextFromHeader.setScroll(false)
    }

    const handelClickChangeMenu = () => {
        setIsActiveHome(false)
        useContextFromHeader.setScroll(true)
    }

    const navLinkMenuNavigationHome = (e) => e.isActive || isActiveHome ? "display-none" : "line-hover";
    const navLinkMenuNavigation = (e) => e.isActive ? "display-none" : "line-hover";

    const listMenuHeaderMap = listMenuHeader.map((index) => {
        return (
            <div className={`border_location-menu ${index.styleDisplay ? "display-none" : ""}`} key={index.id}>
                <NavLink
                    to={index.to}
                    onClick={index.indexMenu ? handelClickChangeHeaderShadow : handelClickChangeMenu}
                    className={index.indexMenu ? navLinkMenuHome : navLinkMenu}
                    ref={index.ref}
                >
                    {index.iconMenuHeader}
                    <div className="text_menu">{index.nameMenuHeader}</div>
                    {index.starNew ?
                        <div className="animation_start-new">
                            <BsStarFill />
                        </div>
                        : ""
                    }
                </NavLink>
                <div>
                    <NavLink
                        to={index.to}
                        className={index.indexMenu ? navLinkMenuNavigationHome : navLinkMenuNavigation}
                    ></NavLink>
                </div>
            </div>

        )
    })
    return (
        <>
            {listMenuHeaderMap}
        </>
    )
}

export default RenderCustomMenu;