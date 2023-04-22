import React, { useState } from 'react'
import { BsCalendar2Date, BsChevronDown } from "react-icons/bs"
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

  const ARRAY_GET_TAB_CONTENT_CINEMA = [
    {
      "id": 0,
      "cinema_primary": {
        "cinema_single": [
          {
            "id_cinema_single": 0,
            "title_cinema_single": "rap beta",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "beta quang trung",
                "address_cinema": "344 quang trung, Quan Go Vap, tp.HCM",
                "showtime": [
                  {
                    "dimensional": "2D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "20:00 ~ 00:10"
                      },
                      {
                        "run_time": "23:00 ~ 02:10"
                      }
                    ]
                  },
                  {
                    "dimensional": "3D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "22:00 ~ 01:10"
                      },
                      {
                        "run_time": "23:20 ~ 02:10"
                      },
                    ]
                  },


                ]
              },
            ]
          },
          {
            "id_cinema_single": 1,
            "title_cinema_single": "rap BHD Star",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "BHD Star Thao Dien",
                "address_cinema": "244 Thao Dien, Quan 2, TP.HCM",
                "showtime": [
                  {
                    "dimensional": "2D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "17:00 ~ 22:20"
                      },
                      {
                        "run_time": "21:00 ~ 01:15"
                      }
                    ]
                  },

                ]
              },
            ]
          },
          {
            "id_cinema_single": 2,
            "title_cinema_single": "rap CGV Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "CGV Giga Mall Thu Duc",
                "address_cinema": "244 Thao Dien, Quan 2, TP.HCM",
                "showtime": [
                  {
                    "dimensional": "2D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "18:00 ~ 21:20"
                      },
                      {
                        "run_time": "21:10 ~ 00:15"
                      },
                      {
                        "run_time": "00:10 ~ 02:15"
                      },
                    ]
                  },

                ]
              },
            ]
          },

        ],
      },
    },
    {
      "id": 1,
      "cinema_primary": {
        "cinema_single": [
          {
            "id_cinema_single": 0,
            "title_cinema_single": "rap beta",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "beta quang trung",
                "address_cinema": "344 quang trung, Quan Go Vap, tp.HCM",
                "showtime": [
                  {
                    "dimensional": "2D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "20:00 ~ 00:10"
                      },
                      {
                        "run_time": "23:00 ~ 02:10"
                      }
                    ]
                  },
                  {
                    "dimensional": "3D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "22:00 ~ 01:10"
                      },
                    ]
                  },


                ]
              },
            ]
          },
          {
            "id_cinema_single": 1,
            "title_cinema_single": "rap CGV Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "CGV Giga Mall Thu Duc",
                "address_cinema": "244 Thao Dien, Quan 2, TP.HCM",
                "showtime": [
                  {
                    "dimensional": "2D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "18:00 ~ 21:20"
                      },
                      {
                        "run_time": "21:10 ~ 00:15"
                      },
                      {
                        "run_time": "00:10 ~ 02:15"
                      },
                    ]
                  },

                ]
              },
            ]
          },

        ],
      },
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
  };



  const returnList_GetDate_show_film = ARRAY_GET_DATE.map((date, index) => {
    return (
      <>
        <div
          key={index}
          className={`item__hanle-title-get-date ${index === activeTabGetData ? 'active_tab--GETDATE' : ''}`}
          onClick={() => handleClick(index)}
        >
          <div>
            <div className="show-time_day">{date.item_day}</div>
            <div className="show-day_in_week">{index === 0 ? 'HOM NAY' : ARRAY_DAY_IN_WEEKEND[(getNowDay.getDay() + index) % 7]}</div>
          </div>
        </div>
      </>
    )
  });




  const returnList_Content_GetDate = ARRAY_GET_TAB_CONTENT_CINEMA.map((content_cinema, index) => {
    return (
      <div
        key={index}
        className={`wrap_tab-content animation_scale-lg
        ${index === activeTabGetData ? 'active_content_tab-GETDATE' : ''}`}
      >
        <div className="item__box_confilm-cinema">
          tab : {content_cinema.id}
          {
            <ul>
              {content_cinema.cinema_primary.cinema_single.map((index_single, i) => (
                <li key={i.id_cinema_single}>
                  {index_single.title_cinema_single}

                  <ul>
                    {index_single.tab_cinema.map((subItem, j) => (
                      <li key={j.id_cinema_tab}>
                        {subItem.title_cinema_single} <br/>
                        address: {subItem.address_cinema}

                        <ul>
                          {subItem.showtime.map((item_show, j) => (
                            <li key={j}>
                              {item_show.dimensional}

                              <ul>
                                {
                                  item_show.time_premiere.map((item_run_time, k) => (
                                    <li key={k}>
                                      {item_run_time.run_time}
                                    </li>
                                  ))
                                }
                              </ul>

                            </li>
                          ))}
                        </ul>

                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          }
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