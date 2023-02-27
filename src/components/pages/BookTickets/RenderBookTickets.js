import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { RiSlideshow3Fill } from 'react-icons/ri'
import { IoTicket } from "react-icons/io5"
import { Link, Outlet, useNavigate } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import LoadingRoute from '../../../views/LoadingRoute'
import { Button, Modal, Skeleton } from 'antd'

const RenderBookTicketsPlaying = React.lazy(() => import('./TabBookTickets/RenderBookTicketsPlaying'))
const RenderBookTicketsUpcoming = React.lazy(() => import('./TabBookTickets/RenderBookTicketsUpcoming'))

export const BookTicketsPlaying = () => {
    return (
        <Suspense fallback={<LoadingRoute />}>
            <RenderBookTicketsPlaying />
        </Suspense>
    )
}
export const BookTicketsUpComing = () => {
    return (
        <Suspense fallback={<LoadingRoute />}>
            <RenderBookTicketsUpcoming />
        </Suspense>
    )
}

function RenderBookTickets() {
    useEffect(() => {
        document.title = "Book tickets" + " | CVP-MOVIE"
    })

    const [tabBookType, setTabBookType] = useState(true)

    const handleOnSelectTabFirt = () => setTabBookType(true)
    const handleOnSelectTabSecond = () => setTabBookType(false)

    const getWidthBoxNavigationFirtRef = useRef(null);
    const getWidthBoxNavigationSecondRef = useRef(null);
    const [getWidthBoxNav_firt, setgetWidthBoxNavigation_firt] = useState(0);
    const [getWidthBoxNav_second, setgetWidthBoxNavigation_second] = useState(0);
    useLayoutEffect(() => {
        setgetWidthBoxNavigation_firt(getWidthBoxNavigationFirtRef.current.offsetWidth)
        setgetWidthBoxNavigation_second(getWidthBoxNavigationSecondRef.current.offsetWidth)
    })
    const listOnclick = [
        {
            id: 1,
            text: "nut 1",
            ix: true
        },
        {
            id: 2,
            text: "nut 2",
            ix: false
        },
        {
            id: 3,
            text: "nut 3",
            ix: true
        },
    ]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contentModal, setContentModal] = useState([]);
    const [title, setTitle] = useState('')

    const showModal = (content, title) => {
        setIsModalOpen(true);
        setContentModal(content)
        setTitle(title)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const returnList = listOnclick.map((index) => {
        const hande = () => {
            showModal(index.ix ? [
                <div>
                    <button style={{ color: 'red' }}>nnn {index.text}</button>
                </div>
            ] : "no data")
            setTitle(index.text)
        }

        return (
            <>
                <Button type="primary" onClick={hande} key={index.id}>
                    Open Modal {index.text}
                </Button> -
            </>
        )
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
                                    left: tabBookType ? '0px' : getWidthBoxNav_firt
                                }}>

                                </div>


                            </div>
                            <div className="tab__history-book">
                                <div className="btn_to_history-book">
                                    <Link to="../booking-tickets-history">
                                        BOOKING TICKETS HISTORY
                                        <AiOutlineDoubleRight />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="content_select_book-tab">

                            <div className="box-sizing_tab_book">
                                {
                                    tabBookType ?
                                        <BookTicketsPlaying />
                                        :
                                        <BookTicketsUpComing />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="heading_text">
                    <RiSlideshow3Fill />
                    BOOK TICKETS BY CINEMA
                </div>
                <div className='test-modal'>
                    {returnList}
                    <Modal
                        title={title}
                        open={isModalOpen}
                        onCancel={handleCancel}
                        footer={null}
                        className="modal-2"
                    >
                        {contentModal}
                        <div className='loading-sek'>
                            <Skeleton active />
                        </div>
                    </Modal>
                </div>


                <div>


                </div>
            </div>

        </div>
    )
}

export default RenderBookTickets