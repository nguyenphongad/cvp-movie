import React from 'react'
import { BsCalendar2Date } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { MdOutlineMyLocation } from "react-icons/md"

const RenderBookGetDateFilm = () => {
    const LIST_TITLE_GETDATE_HEADER = [
        {
            day: "12/2",
            start_day: "HOM NAY"
        },
        {
            day: "13/2",
            start_day: "THU 4"
        },
        {
            day: "14/2",
            start_day: "THU 5"
        },
        {
            day: "15/2",
            start_day: "THU 6"
        },
        {
            day: "16/2",
            start_day: "THU 7"
        },
        {
            day: "17/2",
            start_day: "CHU NHAT"
        },
        {
            day: "18/2",
            start_day: "THU 2"
        },
        {
            day: "19/2",
            start_day: "THU 3"
        },
    ]
    const returnList_GetDate_show_film = LIST_TITLE_GETDATE_HEADER.map((index) => {
        return (
            <>
                <div className="item__hanle-title-get-date" key={index.day}>
                    <div className="show-time_day">{index.day}</div>
                    <div className="show-day_in_week">{index.start_day}</div>
                </div>
            </>
        )
    })

    return (
        <>
            <div className="container__book_get_date--film">
                <div className="wrap_box--b-t">
                    <div className="header__top--GPS">
                        <div className="heading__text--bt">
                            <BsCalendar2Date />
                            SHOWTIMES
                        </div>
                        <div className="line__flex--end">
                            <div className="s-px_btn-GetMap">
                                <button className="handle__select--option pding-border">
                                    <GoLocation />
                                    GET AREA
                                </button>
                            </div>
                            <div className='m-px_btn__Getmap--recent'>
                                <button className='pding-border'>
                                    <MdOutlineMyLocation />
                                    RECENT LOCATION
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content__wrap_slt--Showtime">
                        <div className='wrap__item--box_handle--getDate'>
                            {returnList_GetDate_show_film}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RenderBookGetDateFilm