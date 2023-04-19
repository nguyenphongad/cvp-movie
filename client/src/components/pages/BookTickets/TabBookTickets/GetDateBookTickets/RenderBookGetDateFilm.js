import React, { useState } from 'react'
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




  // Lấy ngày hiện tại
  const today = new Date();
  const dates = [{ ngay: formatDate(today) }];

  // Lấy ngày tiếp theo 7 ngày
  for (let i = 1; i <= 7; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    dates.push({ ngay: formatDate(nextDay) });
  }

  const thuTrongTuan = ['CHU NHAT', 'THU 2', 'THU 3', 'THU 4', 'THU 5', 'THU 6', 'THU 7'];

  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: 'Tab 1',
      content: 'Nội dung của tab thu 2',
    },
    {
      title: 'Tab 2',
      content: 'Nội dung của tab 2',
    },
    {
      title: 'Tab 3',
      content: 'Nội dung của tab 3',
    },
    {
      title: 'Tab 4',
      content: 'Nội dung của tab 4',
    },
    {
      title: 'Tab 5',
      content: 'Nội dung của tab 5',
    },
    {
      title: 'Tab 6',
      content: 'Nội dung của tab 6',
    },
    {
      title: 'Tab 7',
      content: 'Nội dung của tab 7',
    },
    {
      title: 'Tab 8',
      content: 'Nội dung của tab 8',
    },
  ];

  function formatDate(date) {
    const options = { month: 'numeric', day: 'numeric' };
    const showDate = new Intl.DateTimeFormat('vi-VN', options).format(date);
    return showDate;
  }


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
          <div className="tabs-container">
            <div className="tabs">
              {dates.map((date, i) => (
                <button
                  key={i}
                  className={i === activeTab ? 'tab active' : 'tab'}
                  onClick={() => setActiveTab(i)}
                >

                  <span>{dates[i].ngay}</span>
                  <span>
                    {i === 0 ? 'HOM NAY' : thuTrongTuan[(today.getDay() + i) % 7]}
                  </span>

                </button>
              ))}
            </div>
            <div className="tab-content">
              {tabContent.map((content, index) => (
                <div
                  key={index}
                  className={index === activeTab ? 'tab-pane active' : 'tab-pane'}
                >
                  <h2>{content.title}</h2>
                  <p>{content.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RenderBookGetDateFilm