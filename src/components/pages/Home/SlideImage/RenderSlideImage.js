import React, { useEffect, useState } from 'react';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"

import Slider from 'react-slick';

import Image_slide_our_beloved_summer from "../../../../assets/photo-box/image_slide_view/image_slide_our-beloved-summer.png";
import Image_slide_money_heist from "../../../../assets/photo-box/image_slide_view/image_slide_money-heist.png";
import Image_slide_troll_hunterst from "../../../../assets/photo-box/image_slide_view/image_slide_troll-hunters.png";
import image_slide_monters_university from "../../../../assets/photo-box/image_slide_view/image_slide_monters-university.png";

import anh1 from "../../../../assets/photo-box/image_slide_view/1.png"
import anh2 from "../../../../assets/photo-box/image_slide_view/2.png"
import anh3 from "../../../../assets/photo-box/image_slide_view/3.png"
import anh4 from "../../../../assets/photo-box/image_slide_view/4.png"

import { BsChevronCompactRight, BsChevronCompactLeft } from 'react-icons/bs';
import { FaPlay } from 'react-icons/fa';
import { BiInfoCircle } from 'react-icons/bi';

function RenderSlideImage() {

    const Arrow = (props) => {
        const char = props.type === "next" ?
            <button onClick={props.onClick} className="btn__arrow_change next__arrow">
                <BsChevronCompactRight />
            </button> :
            <button onClick={props.onClick} className="btn__arrow_change prev__arrow">
                <BsChevronCompactLeft />
            </button>;
        return (
            <> {char} </>
        );
    }



    const listSlideContentImage = [
        {
            id: 1,
            titleFilm: "BELOVED SUMMER",
            productionYearFilm: "2022",
            timeFilm: "1 hour 40 minute",
            limitOld: "18+",
            ptrackContentFilm: "Is the story of how many years after filming a hit documentary in high school, two bickering exes are dragged into the camera together - and entangled again.",
            comingSoon: false,
            srcImage: Image_slide_our_beloved_summer,
            srcImageSticker: anh1,
            onClickPP: "",
            onClickInfo: ""
        },

        {
            id: 2,
            titleFilm: "TROLL HUNTERST",
            productionYearFilm: "2019",
            timeFilm: "2 hour 20 minute",
            limitOld: "12+",
            ptrackContentFilm: "The story is about a human boy who has been chosen as a goblin hunter, something that has never been passed on to any other species of elves. And since then, the boy and his friends have conquered challenges, confronting evil to bring peace to both worlds.",
            comingSoon: false,
            srcImage: Image_slide_troll_hunterst,
            srcImageSticker: anh2,
            onClickPP: "",
            onClickInfo: ""
        },
        {
            id: 3,
            titleFilm: "MONTERS UNIVERSITY",
            productionYearFilm: "2022",
            timeFilm: "1 hour 10 minute",
            limitOld: "16+",
            ptrackContentFilm: "A look at the relationship between Mike Wazowski (Billy Crystal) and James P. Sully Sullivan (John Goodman) during their days at Monsters University, when they weren't necessarily the best of friends.",
            comingSoon: true,
            hu :"December 30, 2022",
            srcImage: image_slide_monters_university,
            srcImageSticker: anh3,
            onClickPP: "",
            onClickInfo: ""
        },
        {
            id: 4,
            titleFilm: "MONEY HEIST",
            productionYearFilm: "2023",
            timeFilm: "2 season",
            ptrackContentFilm: "When a gang of bandits take control of a unified Korea's money printing factory and hostages are trapped inside, the police must stop them and the shady mastermind behind it all.",
            limitOld: "16+",
            comingSoon: false,
            srcImage: Image_slide_money_heist,
            srcImageSticker: anh4,
            onClickPP: "",
            onClickInfo: ""
        },
    ];

    const [timePremiereDays, setTimePremiereDays] = useState();
    const [timePremiereHours, setTimePremiereHours] = useState();
    const [timePremiereMinutes, setTimePremiereMinutes] = useState();
    const [timePremiereSeconds, setTimePremiereSeconds] = useState();

    let interval;
    const startTimePremiere = () => {
            const countDownDate = new Date("December 30, 2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (24 * 60 * 60 * 1000));
            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimePremiereDays(days);
                setTimePremiereHours(hours);
                setTimePremiereMinutes(minutes);
                setTimePremiereSeconds(seconds);
            }
        })

    };
    useEffect(() => {
        startTimePremiere();
    });

    const returnSlideImageTrening = listSlideContentImage.map((index) => {
        return (
            <div className="box_location" key={index.id}>
                <img src={index.srcImage} />
                <div className="box_context-slide">
                    <div className="container_box">
                        <div className="item_slick-td td__info_film">
                            <div className="name__tile-film">
                                {index.titleFilm} - {index.productionYearFilm}
                            </div>
                            <div className="td_query">
                                <div className="style-time-film">
                                    {index.timeFilm}
                                </div>
                                <div className="style-limit-old">
                                    {index.limitOld}
                                </div>
                            </div>
                            <div className="tr__ptrack-content_film-to-slide">
                                {index.ptrackContentFilm}
                            </div>
                            <div className="tr_btn__control-PP">
                                {index.comingSoon ?
                                    <div className="text_warning_come-soon">
                                        COMING SOON : 
                                        {" "+ timePremiereDays + " DAY " +
                                            timePremiereHours + " HOUR " +
                                            timePremiereMinutes + " MINUTE " +
                                            timePremiereSeconds + " SECOND "}
                                    </div>
                                    :
                                    <div className="box_control">
                                        <div className="item__btn-pp" >
                                            <FaPlay />
                                            Play now
                                        </div>
                                        <div className="item__btn-pp" >
                                            <BiInfoCircle />
                                            More infomation
                                        </div>
                                    </div>

                                }
                            </div>



                        </div>
                        <div className="item_slick-td td_image_sticker">
                            <img src={index.srcImageSticker} />
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="body_slide-image">
            <Slider
                dots={true}
                autoplay={true}
                autoplaySpeed={4000}
                slidesToScroll={1}
                slidesToShow={1}
                infinite={true}
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
            >
                {returnSlideImageTrening}

            </Slider>
        </div>
    )
}

export default RenderSlideImage