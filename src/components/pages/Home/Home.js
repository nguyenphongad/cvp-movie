import React, { useEffect, useRef, useState } from 'react';
import Video_trailer_lookism from "../../../assets/video-trailers/lookism-trailer.mp4";
import Picture_poster_trailer_lookism from "../../../assets/photo-box/lookism/picture_trailer_lookism.webp";
import Picture_name_poster_lookism from "../../../assets/photo-box/lookism/picture_name_lookism.png";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import RenderSlideImage from './SlideImage/RenderSlideImage';
import RenderViewBoxChannle from './ViewBoxChannel/RenderViewBoxChanle';

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
            <div class="video_trailer">

                <video
                    ref={videoTrailerRef}
                    loop
                    autoPlay
                    src={Video_trailer_lookism}
                    poster={Picture_poster_trailer_lookism}
                    title="lookism - Chủ nghĩa ngoại hình " />

                <div className="box_btn_control--work">
                    <div className="size-bozing_control">
                        <img src={Picture_name_poster_lookism} />
                        <div className="row-footer">
                            <div className="text_introduce_trailer">
                                In a society that favors good looks,
                                a high school outcast leads a double life switching between his
                                two bodies that are polar opposites in appearance.
                            </div>
                        </div>
                        <div className="row block-btn__control">
                            <button class="button-mixin border__btn_play--list btn btn-5 hover-border-11">
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
                    </div>
                </div>

                <div className="bottom_shadow">

                </div>
            </div>
            <div className="box_slide-review">
                <RenderSlideImage/>
            </div>
            <div className="body_home">
                
                <RenderViewBoxChannle/>

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