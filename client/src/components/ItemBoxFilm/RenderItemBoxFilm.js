import React from 'react'
import { FaPlay } from 'react-icons/fa'

function RenderItemBoxFilm(props) {
    return (
        <div className="item__box-film" key={props.id}>
            <div className="borzing_content">
                <div className="border_img--poster">
                    <img src={props.srcPosterView} />
                    <div className="box_production">
                        <div className="duction_year">
                            {props.productionYearFilm}
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
                            <div className="title-film-st" title={props.titleFilm.toUpperCase()}>
                                {props.titleFilm.toUpperCase()}
                            </div>
                        </div>
                        <div className="trow_body-box">
                            <div className="td_infomation-auth">
                                <div className="time-film">{props.timeFilm}</div>
                                <div className='limit-old'>{props.limitOld}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RenderItemBoxFilm