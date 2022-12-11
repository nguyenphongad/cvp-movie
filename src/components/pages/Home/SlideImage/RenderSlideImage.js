import React from 'react';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"

import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import Image_slide_1 from "../../../../assets/photo-box/image_slide_view/img_1.jpg";
import Image_slide_2 from "../../../../assets/photo-box/image_slide_view/img_2.jpg";
import Image_slide_3 from "../../../../assets/photo-box/image_slide_view/img_3.jpg";

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

function RenderSlideImage() {

    const Arrow = (props) => {
        const char = props.type === "next" ? <AiFillCaretRight /> : <AiFillCaretLeft />;
        return (
            <span onClick={props.onClick}>
                {char}
            </span>
        );
    }

    return (
        <div className="body_slide-image">
            <Slider
                dots={true}
                autoplay={true}
                autoplaySpeed={5000}
                slidesToScroll={1}
                slidesToShow={1}
                infinite={true}
                nextArrow={<Arrow type="next" />}
                prevArrow={<Arrow type="prev" />}
            >

                <Link to="#">
                    <img src={Image_slide_1} alt="img_1" />
                </Link>


                <Link to="#">
                    <img src={Image_slide_2} alt="img_2" />
                </Link>


                <Link to="#">
                    <img src={Image_slide_3} alt="img_3" />
                </Link>

            </Slider>
        </div>
    )
}

export default RenderSlideImage