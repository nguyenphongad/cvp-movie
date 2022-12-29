import React, { useEffect, useState } from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { RiSlideshow3Fill } from 'react-icons/ri'
import { IoTicket } from "react-icons/io5"
import { Link } from 'react-router-dom'

export const BookTicketsPlaying = () => {
    return (
        <div className="animation_scale-lg"> 
            <h1>book tickets playing</h1>
        </div>
    )
}
export const BookTicketsUpComing = () => {
    return (
        <div className="animation_scale-lg">
            <h1>upcoming</h1>
        </div>
    )
}

function RenderBookTickets() {
    useEffect(() => {
        document.title = "Book tickets" + " | CVP-MOVIE"
    })

    const [tabBookType, setTabBookType] = useState(true)

    const handleOnSelectTabFirt = ()=>{
        setTabBookType(true)
    }
    const handleOnSelectTabSecond = ()=>{
        setTabBookType(false)
    }

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
                                <div className={`item_select-type-book ${tabBookType ? "active_item_select-type" : ""}`}>
                                    <button onClick={handleOnSelectTabFirt}>
                                        MOVIES IS PLAYING
                                    </button>
                                </div>
                                <div className={`item_select-type-book ${tabBookType ? "" : "active_item_select-type"}`}>
                                    <button onClick={handleOnSelectTabSecond}>
                                        UPCOMING MOVIE
                                    </button>
                                </div>
                            </div>
                            <div className="tab__history-book">
                                <div className="btn_to_history-book">
                                    <Link to="../booking-history">
                                        BOOKING HISTORY
                                        <AiOutlineDoubleRight/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="content_select_book-tab">
                            {
                                tabBookType ? 
                                <BookTicketsPlaying/>
                                : <BookTicketsUpComing/>
                            }
                        </div>
                    </div>
                </div>


                <div className="heading_text">
                    <RiSlideshow3Fill/>
                    BOOK TICKETS BY CINEMA
                </div>
            </div>

        </div>
    )
}

export default RenderBookTickets