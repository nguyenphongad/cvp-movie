import React, { useContext } from 'react'
import Slider from 'react-slick'
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs"
import { ListFilmSystem } from '../../../ListFilmSystem/RenderListFilmSystem';
import "slick-carousel/slick/slick.css";

import {GoChecklist} from "react-icons/go"


function RenderMylistSlick() {
    const Arrow = (props) => {
        const char = props.type === "next" ?
            <button onClick={props.onClick} className="btn__arrow_prev next_prev">
                <BsChevronCompactRight />
            </button> :
            <button onClick={props.onClick} className="btn__arrow_prev prev_prev">
                <BsChevronCompactLeft />
            </button>;
        return (
            <> {char} </>
        );
    }

    const useContextFromListFilm = useContext(ListFilmSystem)
    const returnListFormMyListComponent = useContextFromListFilm.listFilmSystem.map((index) => {
        return index.myList ? (
            <div className="item__box-film">
                <div>
                    <div>
                        <img src={index.srcPosterView} loading="lazy"/>
                    </div>
                {index.titleFilm}
                </div>
            </div>
        ) : ""

    })

    return (
        <div className="body_slick--mylist">
            <div className="heading-text"><GoChecklist/> MY LIST</div>
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