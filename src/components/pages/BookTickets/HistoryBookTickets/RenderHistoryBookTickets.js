import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { FaHistory } from 'react-icons/fa'
import { IoTicket } from 'react-icons/io5'
import { BsSearch } from 'react-icons/bs'
import { CgDetailsMore} from 'react-icons/cg'

// import Image_Poster_Tickets from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-avatar_history.jpg"
import Image_cinema_cgv from "../../../../assets/image-logo-cinema/logo_cgv.jpg"
import Image_cinema_beta from "../../../../assets/image-logo-cinema/logo_beta.jpg"


function RenderHistoryBookTickets() {

    const listTicketsBooked = [
        {
            id: 1,
            titleFilm: "avatar : dong chay cua nuoc",
            srcImageCinema: Image_cinema_cgv,
            cinameBooked: "CGV GÒ VẤP",
            timeBooked: "19:34",
            dateBooked: "13/12/2022",
            totalUnitPrice: 130000,

            durationFilm: "2H 12P",
            selectedChair: "I3" | "I4",
            theaterBooked: "P4",
            ticketsCode: 8253749254836489,

        },
        {
            id: 2,
            titleFilm: "Bup be goi hon",
            srcImageCinema: Image_cinema_beta,
            cinameBooked: "Beta Quang Trung",
            timeBooked: "08:34",
            dateBooked: "10/12/2022",
            totalUnitPrice: 120000,

            durationFilm: "2H 12P",
            selectedChair: "I3" + " | " + "I4",
            theaterBooked: "P4",
            ticketsCode: 8253749254836489,

        },
        {
            id: 3,
            titleFilm: "Meo di hia",
            srcImageCinema: Image_cinema_beta,
            cinameBooked: "Beta Quang Trung",
            timeBooked: "23:12",
            dateBooked: "10/11/2022",
            totalUnitPrice: 80000,

            durationFilm: "2H 12P",
            selectedChair: "I3" + " | " + "I4",
            theaterBooked: "P4",
            ticketsCode: 8253749254836489,

        },
    ]
    const vnd = new Intl.NumberFormat("vi-VN", {
        style: 'currency',
        currency: 'VND'

    })
    const returnListTicketsBooked = listTicketsBooked.map((index) => {
        return (
            <div className="item__ticket_booked" key={index.id}>
                <div className="item_flex_wrap border_img">
                    <img src={index.srcImageCinema} />
                </div>
                <div className="item_flex_wrap infomation_tickets">
                    <div className="title_film">
                        {index.titleFilm.toUpperCase()}
                    </div>
                    <div className="duction-information">
                        <div className="cinema_style">
                            {index.cinameBooked}
                        </div>

                    </div>
                </div>
                <div className="item_flex_wrap line_trow-notepad">
                    <div className="time_tickets">
                        {index.timeBooked}  {index.dateBooked}
                    </div>
                    <div className="total_unit">
                        {vnd.format(index.totalUnitPrice)}
                    </div>

                </div>
                <div className="item_flex_wrap btn_show_detail">
                    <div>
                        <button>
                            Detail <CgDetailsMore/>
                        </button>
                    </div>

                </div>
            </div>
        )
    })



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
                    <div className="head__taskbar-filter">
                        <div className="tbody__taskbar">
                            <div className="item__tab_type-order">
                                <button>
                                    BOOKING HISTORY
                                </button>
                            </div>
                        </div>
                        <div className="tbox_filter-result">
                            <input
                                type="text"
                                id="search_booking-history"
                                placeholder="Title film history"
                            />
                            <label htmlFor="search_booking-history">
                                <BsSearch />
                            </label>
                        </div>
                    </div>
                    <div className='content_result-filter'>
                        <div className="body__result_tickets">
                            {returnListTicketsBooked}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderHistoryBookTickets