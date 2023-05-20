import React, { useState } from 'react'
import Image_cinema_beta from "../../../../../assets/image-logo-cinema/logo_beta.jpg";
import Image_cinema_bhd from "../../../../../assets/image-logo-cinema/logo_bhd.jpg";
import Image_cinema_cgv from "../../../../../assets/image-logo-cinema/logo_cgv.jpg";

import { BsCalendar2Date, BsDot } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { MdOutlineMyLocation } from "react-icons/md"
import { BiChevronRight } from "react-icons/bi"
import { Collapse } from "antd";
const { Panel } = Collapse;

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
            "id_code_cinema": "CINEMA-BETA",
            "title_cinema_single": "Beta Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "Beta Quang Trung",
                "address_cinema": "645 Quang Trung, Phuong 11, Quan Go Vap, Thanh Pho Ho Chi Minh",
                "address_map": "https://goo.gl/maps/GXMs67cU6RgYvqLY8",
                "showtime": [
                  {
                    "dimensional": "2D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "15:00 ~ 17:12"
                      },
                      {
                        "run_time": "15:30 ~ 17:42"
                      },
                      {
                        "run_time": "16:30 ~ 18:42"
                      },
                      {
                        "run_time": "17:00 ~ 19:12"
                      },
                      {
                        "run_time": "17:30 ~ 19:42"
                      },
                      {
                        "run_time": "18:00 ~ 20:12"
                      },
                      {
                        "run_time": "19:00 ~ 21:12"
                      },
                      {
                        "run_time": "19:30 ~ 21:42"
                      },
                      {
                        "run_time": "20:00 ~ 22:12"
                      },
                      {
                        "run_time": "20:30 ~ 22:42"
                      },
                      {
                        "run_time": "21:30 ~ 23:42"
                      },
                      {
                        "run_time": "22:30 ~ 00:42"
                      },
                      {
                        "run_time": "23:00 ~ 01:12"
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
            "id_code_cinema": "CINEMA-BHD",
            "title_cinema_single": "BHD Star",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "BHD Star Thao Dien",
                "address_cinema": "244 Thao Dien, Quan 2, TP.HCM",
                "address_map":"",
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
              {
                "id_cinema_tab": 1,
                "title_cinema_single": "BHD Star Pham Hung",
                "address_cinema": "C6/12 Pham Hung, Quan 9, TP.HCM",
                "address_map":"",
                "showtime": [
                  {
                    "dimensional": "2D subtitles",
                    "time_premiere": [
                      {
                        "run_time": "12:00 ~ 15:20"
                      },
                      {
                        "run_time": "21:00 ~ 23:15"
                      },
                      {
                        "run_time": "00:00 ~ 02:15"
                      },
                    ]
                  },

                ]
              },
            ]
          },
          {
            "id_cinema_single": 2,
            "id_code_cinema": "CINEMA-CGV",
            "title_cinema_single": "CGV Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "CGV Giga Mall Thu Duc",
                "address_cinema": "244 Thao Dien, Quan 2, TP.HCM",
                "address_map":"",
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
            "id_code_cinema": "CINEMA-BETA",
            "title_cinema_single": "Beta Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "Beta Quang Trung",
                "address_cinema": "645 Quang Trung, Phuong 11, Quan Go Vap, Thanh Pho Ho Chi Minh",
                "address_map":"https://goo.gl/maps/GXMs67cU6RgYvqLY8",
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
            "id_code_cinema": "CINEMA-CGV",
            "title_cinema_single": "CGV Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "CGV Giga Mall Thu Duc",
                "address_cinema": "244 Thao Dien, Quan 2, TP.HCM",
                "address_map":"",
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
                      {
                        "run_time": "00:10 ~ 02:15"
                      },
                      {
                        "run_time": "00:10 ~ 02:15"
                      },
                      {
                        "run_time": "00:10 ~ 02:15"
                      },
                      {
                        "run_time": "00:10 ~ 02:15"
                      },
                      {
                        "run_time": "00:10 ~ 02:15"
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
      "id": 2,
      "cinema_primary": {
        "cinema_single": [
          {
            "id_cinema_single": 1,
            "id_code_cinema": "CINEMA-CGV",
            "title_cinema_single": "CGV Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "CGV Giga Mall Thu Duc",
                "address_cinema": "244 Thao Dien, Quan 2, TP.HCM",
                "address_map":"",
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
                      {
                        "run_time": "00:10 ~ 02:15"
                      },
                      {
                        "run_time": "00:10 ~ 02:15"
                      },
                    ]
                  },

                ]
              }
            ]
          },

        ],
      },
    },
    {
      "id": 3,
      "cinema_primary": {
        "cinema_single": [
          {
            "id_cinema_single": 0,
            "id_code_cinema": "CINEMA-BETA",
            "title_cinema_single": "Beta Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "Beta Quang Trung",
                "address_cinema": "645 Quang Trung, Phuong 11, Quan Go Vap, Thanh Pho Ho Chi Minh",
                "address_map":"https://goo.gl/maps/GXMs67cU6RgYvqLY8",
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
            "id_code_cinema": "CINEMA-CGV",
            "title_cinema_single": "CGV Cinemas",
            "tab_cinema": [
              {
                "id_cinema_tab": 0,
                "title_cinema_single": "CGV Giga Mall Thu Duc",
                "address_cinema": "244 Thao Dien, Quan 2, TP.HCM",
                "address_map":"",
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
              }
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
          {
            <>
              <Collapse
                // accordion
                defaultActiveKey={[0, 1]}
                className="item_box_collapse--line"
              >
                {content_cinema.cinema_primary.cinema_single.map((index_single, i) => {
                  const Render_cinema_code = () => {
                    const index_code_cinema = index_single.id_code_cinema;
                    let src_image_cinema_single = null;

                    if (index_code_cinema === "CINEMA-BETA") {
                      src_image_cinema_single = Image_cinema_beta
                    } else if (index_code_cinema === "CINEMA-BHD") {
                      src_image_cinema_single = Image_cinema_bhd
                    } else if (index_code_cinema === "CINEMA-CGV") {
                      src_image_cinema_single = Image_cinema_cgv
                    }

                    return <img src={src_image_cinema_single} alt="logo_cinema" />
                  }
                  const panelHeader = (
                    <div className='line_flex-header'>
                      <div className="border_image_logo-cinema">
                        <Render_cinema_code />
                      </div>
                      <div>
                        <div>{index_single.title_cinema_single}</div>
                        <div className="total_cinema_sing-length">{index_single.tab_cinema.length} Cinema</div>
                      </div>
                    </div>
                  );
                  return (
                    <Panel header={panelHeader} key={index_single.id_cinema_single}>

                      <Collapse
                        accordion
                        className="item_box_collapse--cin-single"
                      >
                        {index_single.tab_cinema.map((subItem, j) => (
                          <Panel header={subItem.title_cinema_single} key={j.id_cinema_tab}>
                            <div className="info_address_cinema_sing">
                              {subItem.address_cinema} <BsDot/>
                              <a href={subItem.address_map} target='_blank' className="target_map"> 
                                [ Address maps ]
                              </a>
                            </div>
                            {subItem.showtime.map((item_show, j) => (
                              <div className="box_dimen_show-time" key={j}>
                                <div className="dimen_heading_text">
                                  {item_show.dimensional}  
                                </div>
                                <div className="tr_wrap_show-time">
                                  {item_show.time_premiere.map((item_run_time, k) => (
                                    <a href="#" className="handle_show_time" key={k.run_time}>
                                      {item_run_time.run_time}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </Panel>
                        ))}
                      </Collapse>

                    </Panel>
                  )
                })}
              </Collapse>
            </>
          }
        </div >
      </div >
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
                  TP.HCM
                  <BiChevronRight/>
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

export default RenderBookGetDateFilm;