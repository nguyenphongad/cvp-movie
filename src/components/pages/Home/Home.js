import React, { useCallback, useEffect, useRef, useState } from 'react';

// import Video_trailer_lookism from "../../../assets/video-trailers/lookism-trailer.mp4";
// import Picture_poster_trailer_lookism from "../../../assets/photo-box/lookism/picture_trailer_lookism.webp";
// import Picture_name_lookism from "../../../assets/photo-box/lookism/picture_name_lookism.png";

// import Video_trailer_eldenring from "../../../assets/video-trailers/eldenring-trailer.mp4";
// import Picture_poster_trailer_eldenring from "../../../assets/photo-box/eldenring/picture_trailer_eldenring.webp";
// import Picture_name_eldenring from "../../../assets/photo-box/eldenring/picture_name_eldenring.png";

import Video_trailer_wednesday from "../../../assets/video-trailers/wednesday-trailer.mp4";
import Picture_poster_trailer_wednesday from "../../../assets/photo-box/wednesday/picture_trailer_wednesday.webp";
import Picture_name_wednesday from "../../../assets/photo-box/wednesday/picture_name_wednesday.png";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

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
    const ContentBioTrailer= ()=>{
        return (
            <>
                Smart, sarcastic and a little dead inside, 
                Wednesday Addams investigates a murder spree while 
                making new friends — and foes — at Nevermore Academy.
            </>
        )
    }
    const videoInfoTrailerVideoHome = {
        id : 1,
        srcVideoTrailer : Video_trailer_wednesday,
        srcPosterTrailer : Picture_poster_trailer_wednesday,
        srcImageNameInTrail : Picture_name_wednesday,
        contentBioTrailer : <ContentBioTrailer/>,
        ageLimit : "16+",
        categoryGame : false

    }

    return (
        <div className="wrap__home">
            <div className="video_trailer">

                <video
                    ref={videoTrailerRef}
                    loop
                    src={videoInfoTrailerVideoHome.srcVideoTrailer}
                    poster={videoInfoTrailerVideoHome.srcPosterTrailer} />

                <div className="box_btn_control--work">
                    <div className="size-bozing_control">
                        <div className="border__content">
                            <img src={videoInfoTrailerVideoHome.srcImageNameInTrail} />
                            <div className="row-footer">
                                <div className="text_introduce_trailer">
                                {videoInfoTrailerVideoHome.contentBioTrailer}
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
                            <div className="tr-control_btn_trailer-sion">
                                <button onClick={handleToggleVideoTrailer} className="borderPP-trailer" >
                                    {controlTogglePPVideoTrailer ?
                                        <FaPause className="an_icon_pp-trailer" /> :
                                        <FaPlay className="an_icon_pp-tralier" />}
                                </button>
                                <div className="border_old_warning">
                                    {videoInfoTrailerVideoHome.ageLimit}
                                </div>
                                {
                                videoInfoTrailerVideoHome.categoryGame ? 
                                <div className="border_old_warning">
                                    <IoGameController />
                                </div> : ""}
                            </div>

                        </div>

                    </div>

                </div>

                <div className="bottom_shadow"></div>
            </div>

            <div className="box_slide-review">
                <RenderSlideImage />
            </div>
            <div className="body_home">
                <RenderViewBoxChannle />



                {/* 
                <FullScreen
                    handle={handle}
                >
                    <div style={{ background: "red" }}>
                        First

                        <button onClick={handle.active ? handle.exit : handle.enter}>
                            First
                        </button>
                    </div>
                </FullScreen> */}


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
        </div >
    )
}

export default Home;