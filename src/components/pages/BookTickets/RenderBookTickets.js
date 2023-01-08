import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AiOutlineDoubleRight} from 'react-icons/ai'
import { RiSlideshow3Fill } from 'react-icons/ri'
import { IoTicket } from "react-icons/io5"
import { Link } from 'react-router-dom'

import "slick-carousel/slick/slick.css";

import RenderBookTicketsPlaying from './TabBookTickets/RenderBookTicketsPlaying'
import RenderBookTicketsUpcoming from './TabBookTickets/RenderBookTicketsUpcoming'



export const BookTicketsPlaying = () => {
    
    return (
        <div className="box-sizing_tab_book">
            <RenderBookTicketsPlaying/>
        </div>

    )
}
export const BookTicketsUpComing = () => {
    return (
        <div className="box-sizing_tab_book">
            <RenderBookTicketsUpcoming/>
        </div>
    )
}

function RenderBookTickets() {
    useEffect(() => {
        document.title = "Book tickets" + " | CVP-MOVIE"
    })

    const [tabBookType, setTabBookType] = useState(true)

    const handleOnSelectTabFirt = () => {
        setTabBookType(true)
    }
    const handleOnSelectTabSecond = () => {
        setTabBookType(false)
    }

    const getWidthBoxNavigationFirtRef = useRef(null);
    const getWidthBoxNavigationSecondRef = useRef(null);
    const [getWidthBoxNav_firt, setgetWidthBoxNavigation_firt] = useState(0);
    const [getWidthBoxNav_second, setgetWidthBoxNavigation_second] = useState(0);
    useLayoutEffect(()=>{
        setgetWidthBoxNavigation_firt(getWidthBoxNavigationFirtRef.current.offsetWidth)
        setgetWidthBoxNavigation_second(getWidthBoxNavigationSecondRef.current.offsetWidth)
    })

    return (
        <div className='wrap__book-tickets animation_scale-lg'>
            <div className="body_tickets">
                <div className='heading_text'>
                    <IoTicket />
                    BOOK TICKETS BY MOVIES
                </div>
                <div className="wrap_content--work">
                    <div className="body_select_book-tab">
                        <div className="head__tab-select-book">
                            <div className="tab__select-book">
                                <div className={`item_select-type-book ${tabBookType ? "active_item_select-type" : ""}`} ref={getWidthBoxNavigationFirtRef}>
                                    <button onClick={handleOnSelectTabFirt}>
                                        MOVIES IS PLAYING
                                    </button>
                                </div>
                                <div className={`item_select-type-book ${tabBookType ? "" : "active_item_select-type"}`} ref={getWidthBoxNavigationSecondRef}>
                                    <button onClick={handleOnSelectTabSecond}>
                                        UPCOMING MOVIES 
                                    </button>
                                </div>
                                <div className="box_nav_sline" style={{
                                    width: tabBookType ? getWidthBoxNav_firt : getWidthBoxNav_second,
                                    left : tabBookType ? '0px' : getWidthBoxNav_firt  }}>
                                    
                                </div>


                            </div>
                            <div className="tab__history-book">
                                <div className="btn_to_history-book">
                                    <Link to="./booking-history">
                                        BOOKING HISTORY
                                        <AiOutlineDoubleRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="content_select_book-tab">
                            {
                                tabBookType ?
                                    <BookTicketsPlaying />
                                    : <BookTicketsUpComing />
                            }
                        </div>
                    </div>
                </div>


                <div className="heading_text">
                    <RiSlideshow3Fill />
                    BOOK TICKETS BY CINEMA
                </div>
            </div>

        </div>
    )
}

export default RenderBookTickets