import React, { useContext } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import { ListFilmSystem } from '../../../ListFilmSystem/RenderListFilmSystem';
import { GoChecklist } from "react-icons/go"
import RenderItemBoxFilm from '../../../ItemBoxFilm/RenderItemBoxFilm'

function RenderMylistSlick() {
    // const Arrow = (props) => {
    //     const char = props.type === "next" ?
    //         <button onClick={props.onClick} className="btn__arrow_prev next_prev">
    //             <IoIosArrowDropright />
    //         </button> :
    //         <button onClick={props.onClick} className="btn__arrow_prev prev_prev">
    //             <IoIosArrowDropleft />
    //         </button>;
    //     return (
    //         <> {char} </>
    //     )
    // }

    const useContextFromListFilm = useContext(ListFilmSystem)
    const returnListFormMyListComponent = useContextFromListFilm.listFilmSystem.map((index) => {
        return index.myList ? (
            <RenderItemBoxFilm
                key={index.id}
                srcPosterView = {index.srcPosterView}
                productionYearFilm = {index.productionYearFilm}
                titleFilm = {index.titleFilm}
                timeFilm = {index.timeFilm}
                limitOld = {index.limitOld}
            />
        ) : "";

    })

    return (
        <div className="body_slick--mylist">
            <div className="heading_text">
                <GoChecklist /> MY LIST
            </div>
            <Slider
                dots={true}
                slidesToScroll={1}
                slidesToShow={5}
                infinite={false}
                swipeToSlide={true}
            >
                {returnListFormMyListComponent}

            </Slider>
        </div>
    )
}

export default RenderMylistSlick