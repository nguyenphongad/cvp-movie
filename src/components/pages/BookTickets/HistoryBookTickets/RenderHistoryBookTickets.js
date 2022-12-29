import React from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { FaHistory } from 'react-icons/fa'
import { IoTicket } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function RenderHistoryBookTickets() {
    return (
        <div className='wrap__booking-history animation_scale-lg'>
            <div className="body_book-history-tickets">
                <div className="heading_text">
                    <Link to="/book-tickets">
                        <IoTicket />
                        BOOK TICKETS
                    </Link>
                    <AiOutlineDoubleRight />
                    <FaHistory /> HISTORY BOKING TICKETS
                </div>
                <div className="content_booking-hitory-tickets">
                    <div className="">
                        
                        HISTORY BOKING TICKETS
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderHistoryBookTickets