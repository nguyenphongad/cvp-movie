import React, { useEffect, useRef, useState } from 'react';

// import Video_trailer_lookism from "../../../assets/video-trailers/lookism-trailer.mp4";
// import Picture_poster_trailer_lookism from "../../../assets/photo-box/lookism/picture_trailer_lookism.webp";
// import Picture_name_poster_lookism from "../../../assets/photo-box/lookism/picture_name_lookism.png";

import Video_trailer_eldenring from "../../../assets/video-trailers/eldenring-trailer.mp4";
import Picture_poster_trailer_eldenring from "../../../assets/photo-box/eldenring/picture_trailer_eldenring.webp";
import Picture_name_poster_eldenring from "../../../assets/photo-box/eldenring/picture_name_eldenring.png";

import { FaPlay,FaPause } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";


import { BsFillInfoCircleFill } from "react-icons/bs";
import RenderSlideImage from './SlideImage/RenderSlideImage';
import RenderViewBoxChannle from './ViewBoxChannel/RenderViewBoxChanle';

import 'react-toastify/dist/ReactToastify.css';

function Home() {

    const [controlTogglePPVideoTrailer, setcontrolTogglePPVideoTrailer] = useState(false);
    const [scrollPPVideoTrailer, setscrollPPVideoTrailer] = useState(false);

    const videoTrailerRef = useRef();

    useEffect(() => {
        if (controlTogglePPVideoTrailer) {
            videoTrailerRef.current.play();
        } else {
            videoTrailerRef.current.pause();
        }
    })

    useEffect(() => {
        const handeleScrollVideo = () => {
            setscrollPPVideoTrailer(window.scrollY > 200);
        }
        window.addEventListener('scroll', handeleScrollVideo);
        return () => { window.removeEventListener('scroll', handeleScrollVideo) };
    });


    if (scrollPPVideoTrailer) {
        videoTrailerRef.current.pause();
    }

    const handleToggleVideoTrailer = () => {
        setcontrolTogglePPVideoTrailer(!controlTogglePPVideoTrailer);
    }

    return (
        <div className="wrap__home">
            <div className="video_trailer">

                <video
                    ref={videoTrailerRef}
                    loop
                    autoPlay
                    src={Video_trailer_eldenring}
                    poster={Picture_poster_trailer_eldenring}
                    title="lookism - Chủ nghĩa ngoại hình " />

                <div className="box_btn_control--work">
                    <div className="size-bozing_control">
                        <img src={Picture_name_poster_eldenring} />
                        <div className="row-footer">
                            <div className="text_introduce_trailer">
                            A New World Created By Hidetaka Miyazaki And George R. R. Martin. 
                            ELDEN RING, developed by FromSoftware, Inc. and BANDAI NAMCO Entertainment Inc.
                            , is a fantasy action-RPG adventure set within a world created 
                            by Hidetaka Miyazaki.
                            </div>
                        </div>
                        <div className="row block-btn__control">
                            <button className="button-mixin border__btn_play--list btn btn-5 hover-border-11">
                                <span>
                                    <FaPlay />
                                    PLAY
                                </span>
                            </button>
                            <button className="button-mixin border__btn_play_info">
                                <BsFillInfoCircleFill />
                                MORE INFOMATION
                            </button>
                        </div>

                    </div>
                    <div className="control_btn_trailer-sion">
                        <button onClick={handleToggleVideoTrailer} className="borderPP-trailer" >
                            {controlTogglePPVideoTrailer ?
                                <FaPause className="an_icon_pp-trailer" /> :
                                <FaPlay className="an_icon_pp-tralier" />}
                        </button>
                        <div className="border_old_warning">
                            16+
                        </div>
                        <div className="border_old_warning">
                            <IoGameController/>
                        </div>
                    </div>
                </div>

                <div className="bottom_shadow">

                </div>
            </div>
            <div className="box_slide-review">
                <RenderSlideImage />
            </div>
            <div className="body_home">

                <RenderViewBoxChannle />



                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
                home<br></br>
            </div>
        </div>
    )
}

export default Home;