import React, { useEffect, useRef, useState } from 'react';
import Video_traller_lookism from "../../../assets/video-trallers/lookism-traller.mp4";
import Picture_poster_traller_lookism from "../../../assets/photo-box/lookism/picture_traller_lookism.webp";
import Picture_name_poster_lookism from "../../../assets/photo-box/lookism/picture_name_lookism.png";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";


function Home() {

    const [controlTogglePPVideoTraller, setcontrolTogglePPVideoTraller] = useState(false);
    const [scrollPPVideoTraller, setscrollPPVideoTraller] = useState(false);

    const videoTrallerRef = useRef();

    useEffect(() => {
        if (controlTogglePPVideoTraller) {
            videoTrallerRef.current.play();
        } else {
            videoTrallerRef.current.pause();
        }
    })

    useEffect(() => {
        const handeleScrollVideo = () => {
            setscrollPPVideoTraller(window.scrollY > 200);
        }
        window.addEventListener('scroll', handeleScrollVideo);
        return () => { window.removeEventListener('scroll', handeleScrollVideo) };
    });


    if (scrollPPVideoTraller) {
        videoTrallerRef.current.pause();
    }

    const handleToggleVideoTraller = () => {
        setcontrolTogglePPVideoTraller(!controlTogglePPVideoTraller);
    }

    return (
        <div className="wrap__home">
            <div class="video_traller">

                <video
                    ref={videoTrallerRef}
                    loop
                    autoPlay
                    src={Video_traller_lookism}
                    poster={Picture_poster_traller_lookism}
                    title="lookism - Chủ nghĩa ngoại hình " />

                <div className="box_btn_control--work">
                    <div className="size-bozing_control">
                        <img src={Picture_name_poster_lookism} />
                        <div className="row-footer">
                            <div className="text_introduce_traller">
                                In a society that favors good looks,
                                a high school outcast leads a double life switching between his
                                two bodies that are polar opposites in appearance.
                            </div>
                        </div>
                        <div className="row block-btn__control">
                            <div class="button-mixin border__btn_play--list btn btn-5 hover-border-11">
                                <span>
                                    <FaPlay />
                                    PLAY
                                </span>
                            </div>
                            <div className="button-mixin border__btn_play_info">
                                <BsFillInfoCircleFill />
                                MORE INFOMATION
                            </div>
                        </div>

                    </div>
                    <div className="control_btn_traller-sion">
                        <div onClick={handleToggleVideoTraller} className="borderPP-traller">
                            {controlTogglePPVideoTraller ?
                                <FaPause className="an_icon_pp-traller" /> :
                                <FaPlay className="an_icon_pp-traller" />}
                        </div>
                        <div className="border_old_warning">
                            16+
                        </div>
                    </div>
                </div>

                <div className="bottom_shadow">

                </div>
            </div>
            <div className="box_slide-review">

            </div>
            <div>
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