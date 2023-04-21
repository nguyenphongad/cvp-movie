import React, { useState } from 'react'
import { BsCalendar2Date } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { MdOutlineMyLocation } from "react-icons/md"

const RenderBookGetDateFilm = () => {

  const getNowDay = new Date();
  const ARRAY_GET_DATE = [{ item_day: FormatGetDate(getNowDay) }];
  for (let i = 1; i <= 7; i++) {
    const nextGetDay = new Date(getNowDay);
    nextGetDay.setDate(getNowDay.getDate() + i);
    ARRAY_GET_DATE.push({ item_day: FormatGetDate(nextGetDay) })
  }

  const ARRAY_DAY_IN_WEEKEND = ['CHU NHAT', 'THU 2', 'THU 3', 'THU 4', 'THU 5', 'THU 6', 'THU 7'];
  const [activeTabGetData, setActiveTabGetData] = useState(0);
  const [a, setA] = useState('')

  const ARRAY_GET_TAB_CONTENT_CINEMA = [
    {
      content: 'Nội dung của tab thu 1',
      a: {
        d: "3"
      }
    },
    {
      content: 'Nội dung của tab 2',
      a: {
        d: "33"
      }
    },
    {
      content: 'Nội dung của tab 3',
      a: {
        d: "34"
      }
    },
    {
      content: 'Nội dung của tab 4',
      a: {
        d: "35"
      }
    },
    {
      content: 'Nội dung của tab 5',
      a: {
        d: "36"
      }
    },
    {
      content: 'Nội dung của tab 6',
      a: {
        d: "3"
      }
    },
  ];

  function FormatGetDate(date) {
    const options = { month: 'numeric', day: 'numeric' };
    const showDate = new Intl.DateTimeFormat('vi-VN', options).format(date);
    return showDate;
  }

  function handleClick(index) {
    if (index < ARRAY_GET_DATE.length && index < ARRAY_GET_TAB_CONTENT_CINEMA.length) {
      setActiveTabGetData(index);
    } else {
      alert('CHUA CO LICH CHIEU')
    }
  }
  const returnList_GetDate_show_film = ARRAY_GET_DATE.map((date, index) => {
    return (
      <>
        <div
          key={index}
          className={`item__hanle-title-get-date ${index == activeTabGetData ? 'active_tab--GETDATE' : ''}`}
          onClick={() => handleClick(index)}
        >
          <div>
            <div className="show-time_day">{date.item_day}</div>
            <div className="show-day_in_week">{index === 0 ? 'HOM NAY' : ARRAY_DAY_IN_WEEKEND[(getNowDay.getDay() + index) % 7]}</div>
          </div>
        </div>
      </>
    )
  })
  const returnList_Content_GetDate = ARRAY_GET_TAB_CONTENT_CINEMA.map((content, index) => {

    return (
      <div
        key={index}
        className={`wrap_tab-content animation_scale-lg
        ${index === activeTabGetData ? 'active_content_tab-GETDATE' : ''}`}
      >
        <div className="item__box_confilm-cinema">
          {content.content}/{content.a.d}
        </div>
      </div>
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

            <div
              className="tab__content--GETDATE "
            >
              {returnList_Content_GetDate}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RenderBookGetDateFilm