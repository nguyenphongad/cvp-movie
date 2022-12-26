import React, { useContext } from 'react'
import Slider from 'react-slick'
import { BsChevronCompactLeft } from "react-icons/bs"
import { IoIosArrowDropright } from "react-icons/io"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { ListFilmSystem } from '../../../ListFilmSystem/RenderListFilmSystem';
import "slick-carousel/slick/slick.css";

import { GoChecklist } from "react-icons/go"
import { FaPlay } from 'react-icons/fa';


function RenderMylistSlick() {
    const Arrow = (props) => {
        const char = props.type === "next" ?
            <button onClick={props.onClick} className="btn__arrow_prev next_prev">
                <IoIosArrowDropright />
            </button> :
            <button onClick={props.onClick} className="btn__arrow_prev prev_prev">
                <BsChevronCompactLeft />
            </button>;
        return (
            <> {char} </>
        )
    }

    const useContextFromListFilm = useContext(ListFilmSystem)
    const returnListFormMyListComponent = useContextFromListFilm.listFilmSystem.map((index) => {
        return index.myList ? (
            <div className="item__box-film">
                <div className="borzing_content">
                    <div className="border_img--poster">
                        <img src={index.srcPosterView} />
                        <div className="box_production">
                            <div className="duction_year">
                                {index.productionYearFilm}
                            </div>
                        </div>
                        <div className="btn_playPP">
                            <div className="border__PP">
                                <FaPlay />
                            </div>
                        </div>
                    </div>
                    <div className="box__content--info">
                        <div className="flex__nth-left">
                            <div className="trow-head">
                                <div className="title-film-st">
                                    {index.titleFilm}
                                </div>
                            </div>
                            <div className="trow_body-box">
                                <div className="td_infomation-auth">
                                    <div className="time-film">{index.timeFilm}</div>
                                    <div className='limit-old'>{index.limitOld}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex__nth-right">
                            <div className="btn_show_modal">
                                <AiOutlineInfoCircle />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        ) : "";

    })

    return (
        <div className="body_slick--mylist">
            <div className="heading-text"><GoChecklist /> MY LIST</div>
            <Slider
                dots={true}
                autoplay={true}
                autoplaySpeed={2000}
                slidesToScroll={1}
                slidesToShow={3}
                infinite={true}
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
            >
                {returnListFormMyListComponent}

            </Slider>
        </div>
    )
}

export default RenderMylistSlick