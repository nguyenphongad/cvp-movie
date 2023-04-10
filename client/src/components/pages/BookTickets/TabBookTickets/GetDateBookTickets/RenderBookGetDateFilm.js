import React from 'react'
import { BsCalendar2Date } from "react-icons/bs"

const RenderBookGetDateFilm = () => {
    const LIST_TITLE_GETDATE_HEADER = [
        {
            day : 2,
            start_day : "HOM NAY"
        },
        {
            day : 3,
            start_day : "THU 2"
        },
        {
            day : 4,
            start_day : "THU 3"
        },
        {
            day : 5,
            start_day : "THU 4"
        },
        {
            day : 6,
            start_day : "THU 5"
        },
        {
            day : 7,
            start_day : "THU 6"
        },
        {
            day : 8,
            start_day : "THU 7"
        },
    ]
    const returnList_GetDate_show_film = LIST_TITLE_GETDATE_HEADER.map((index)=>{
        return (
            <>
                <div className='item__hanle-title-get-date'>
                    <div>{index.day}</div>
                    <div>{index.start_day}</div>
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
                        <div className="s-px_btn-GetMap">
                            <select className="handle__select--option">
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div className='m-px_btn__Getmap--recent'>
                            <button>RECENT LOCATION</button>
                        </div>
                    </div>
                    <div className='wrap__item--box_handle--getDate'>
                        {returnList_GetDate_show_film}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RenderBookGetDateFilm