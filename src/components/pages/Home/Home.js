import React, { useContext, useEffect, useRef, useState } from 'react';

// import Video_trailer_lookism from "../../../assets/video-trailers/lookism-trailer.mp4";
// import Picture_poster_trailer_lookism from "../../../assets/photo-box/lookism/picture_trailer_lookism.webp";
// import Picture_name_lookism from "../../../assets/photo-box/lookism/picture_name_lookism.png";

// import Video_trailer_eldenring from "../../../assets/video-trailers/eldenring-trailer.mp4";
// import Picture_poster_trailer_eldenring from "../../../assets/photo-box/eldenring/picture_trailer_eldenring.webp";
// import Picture_name_eldenring from "../../../assets/photo-box/eldenring/picture_name_eldenring.png";

// import Video_trailer_wednesday from "../../../assets/video-trailers/wednesday-trailer.mp4";
// import Picture_poster_trailer_wednesday from "../../../assets/photo-box/wednesday/picture_trailer_wednesday.webp";
// import Picture_name_wednesday from "../../../assets/photo-box/wednesday/picture_name_wednesday.png";

// import Video_trailer_bird_box from "../../../assets/video-trailers/bird_box-trailer.mp4";
// import Picture_poster_trailer_bird_box from "../../../assets/photo-box/bird_box/picture_trailer_bird_box.webp";
// import Picture_name_bird_box from "../../../assets/photo-box/bird_box/picture_name_bird_box.png";

import Video_trailer_train_to_busan from "../../../assets/video-trailers/train_to_busan-trailer.mp4";
import Picture_poster_trailer_train_to_busan from "../../../assets/photo-box/train_to_busan/picture_trailer_train_to_busan.webp";
import Picture_name_train_to_busan from "../../../assets/photo-box/train_to_busan/picture_name_train_to_busan.png";

import Video_trailer_lavar_island from "../../../assets/video-trailers/lavar_island-trailer.mp4";
import Picture_poster_trailer_lavar_island from "../../../assets/photo-box/lavar-island/picture_trailer_lavar_island.webp";
import Picture_name_lavar_island from "../../../assets/photo-box/lavar-island/picture_name_lavar_island.png";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";

import RenderViewBoxChannle from './ViewBoxChannel/RenderViewBoxChanle';
import RenderMylistSlick from './RenderMyList_Slick/RenderMylistSlick';
import RenderListTrending from './ListTrening/RenderListTrending';
import AppLearn from './learnHook/AppLearn';
import { ContextFromWindowResize } from '../../../views/RenderGetWindowResize';

import { Player } from 'video-react';
// import "../../../../node_modules/video-react/dist/video-react.css";

function Home() {

    useEffect(() => {
        document.title = "Home" + " | CVP-MOVIE"
    })

    const [controlTogglePPVideoTrailer, setcontrolTogglePPVideoTrailer] = useState(false);
    const [scrollPPVideoTrailer, setscrollPPVideoTrailer] = useState(false);
    const videoTrailerRef = useRef();

    // useEffect(() => {
    //     const hanleTimeOutplayVideo = setTimeout(() => {
    //         setcontrolTogglePPVideoTrailer(true)
    //     }, 1000);
    //     return () => clearTimeout(hanleTimeOutplayVideo)
    // }, [])

    useEffect(() => {
        if (controlTogglePPVideoTrailer) {
            videoTrailerRef.current.play();
        } else {
            videoTrailerRef.current.pause();
        }
    })

    useEffect(() => {
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === 'visible') {
                // setcontrolTogglePPVideoTrailer(true)
            } else {
                setcontrolTogglePPVideoTrailer(false)
            }
        })
    });

    useEffect(() => {
        const handeleScrollVideo = () => {
            setscrollPPVideoTrailer(window.scrollY > 400);
        }
        window.addEventListener('scroll', handeleScrollVideo);
        return () => { window.removeEventListener('scroll', handeleScrollVideo) };
    }, []);

    if (scrollPPVideoTrailer) {
        videoTrailerRef.current.load()
    }

    const handleEventEndedVideo = () => {
        setTimeout(() => {
            videoTrailerRef.current.load()
        }, 200)
    }

    const handleToggleVideoTrailer = () => {
        setcontrolTogglePPVideoTrailer(!controlTogglePPVideoTrailer);
    }

    const ContentBioTrailer = () => {
        return (
            <>
                {/* In a society that favors good looks,
                a high school outcast leads a double life switching between
                his two bodies that are polar opposites in appearance. */}

                {/* Five years after an ominous unseen presence drives
                most of society to suicide, a survivor and her two children
                make a desperate bid to reach safety. */}
                {/* As a zombie outbreak sweeps the country,
                a dad and his daughter take a harrowing train journey
                in an attempt to reach the only city that's still safe. */}
                Stranded on a tropical island,
                two silly larva buddies find slapstick
                fun in everything from discovering
                food to meeting new animal friends.
            </>
        )
    }
    const videoInfoTrailerVideoHome = {
        id: 1,
        srcVideoTrailer: Video_trailer_lavar_island,
        srcPosterTrailer: Picture_poster_trailer_lavar_island,
        srcImageNameInTrail: Picture_name_lavar_island,
        contentBioTrailer: <ContentBioTrailer />,
        ageLimit: "16+",
        categoryGame: false
    }

    const useContextFromWindowSide = useContext(ContextFromWindowResize);

    const handlePlayPlayVideoTrailer = () => {

    }
    const handlePlayPauseVideoTrailer = () => {

    }





    return (
        <div className="wrap__home">
            <div className="video_trailer">
                {/* <video
                    ref={videoTrailerRef}
                    // loop
                    src={videoInfoTrailerVideoHome.srcVideoTrailer}
                    poster={videoInfoTrailerVideoHome.srcPosterTrailer}

                /> */}

                <Player
                    onPlay={handlePlayPlayVideoTrailer}
                    onPause={handlePlayPauseVideoTrailer}
                    ref={videoTrailerRef}
                    onEnded={handleEventEndedVideo}
                    src={videoInfoTrailerVideoHome.srcVideoTrailer}
                    poster={videoInfoTrailerVideoHome.srcPosterTrailer}
                    controls={false}
                    loop={false}

                />

                <div className="background__front-video"></div>
                <div className="box_btn_control--work">
                    <div className="size-bozing_control">
                        <div className="border__content">
                            <img src={videoInfoTrailerVideoHome.srcImageNameInTrail} />
                            <div className="row-footer">
                                <div className="text_introduce_trailer">
                                    {videoInfoTrailerVideoHome.contentBioTrailer}
                                </div>
                            </div>

                            <div className="block-btn__control">
                                <button className="button-mixin border__btn_play--list btn btn-5 hover-border-11">
                                    <FaPlay />
                                    <div>
                                        WATCH
                                    </div>
                                </button>
                                <button className="button-mixin border__btn_play_info">
                                    <BsFillInfoCircleFill />
                                    <div>
                                        MORE INFOMATION
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="control_btn_trailer-sion">
                            <div className="tr-control_btn_trailer-sion">
                                {
                                    useContextFromWindowSide.getWidthWindow <= 425 ?
                                        "" :
                                        <button onClick={handleToggleVideoTrailer} className="minxin_PP-right borderPP-trailer" >
                                            {controlTogglePPVideoTrailer ?
                                                <FaPause /> :
                                                <FaPlay />}
                                        </button>
                                }


                                <div className="minxin_PP-right border_old_warning">
                                    {videoInfoTrailerVideoHome.ageLimit}
                                </div>
                                {
                                    videoInfoTrailerVideoHome.categoryGame ?
                                        <div className="minxin_PP-right border_old_warning">
                                            <IoGameController />
                                        </div> : ""}
                            </div>

                        </div>

                    </div>

                </div>

                <div className="bottom_shadow"></div>
            </div>

            <div className="body_home">
                <RenderViewBoxChannle />
                <RenderMylistSlick />
                <RenderListTrending />

                {/* <AppLearn /> */}


            </div>
        </div>
    )
}

export default Home;