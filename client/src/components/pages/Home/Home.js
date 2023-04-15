import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';

import Video_trailer_lookism from "../../../assets/video-trailers/lookism-trailer.mp4";
import Picture_poster_trailer_lookism from "../../../assets/photo-box/lookism/picture_trailer_lookism.webp";
import Picture_name_lookism from "../../../assets/photo-box/lookism/picture_name_lookism.png";

import Video_trailer_wednesday from "../../../assets/video-trailers/wednesday-trailer.mp4";
import Picture_poster_trailer_wednesday from "../../../assets/photo-box/wednesday/picture_trailer_wednesday.webp";
import Picture_name_wednesday from "../../../assets/photo-box/wednesday/picture_name_wednesday.png";

import Video_trailer_bird_box from "../../../assets/video-trailers/bird_box-trailer.mp4";
import Picture_poster_trailer_bird_box from "../../../assets/photo-box/bird_box/picture_trailer_bird_box.webp";
import Picture_name_bird_box from "../../../assets/photo-box/bird_box/picture_name_bird_box.png";

import Video_trailer_train_to_busan from "../../../assets/video-trailers/train_to_busan-trailer.mp4";
import Picture_poster_trailer_train_to_busan from "../../../assets/photo-box/train_to_busan/picture_trailer_train_to_busan.webp";
import Picture_name_train_to_busan from "../../../assets/photo-box/train_to_busan/picture_name_train_to_busan.png";

import Video_trailer_lavar_island from "../../../assets/video-trailers/lavar_island-trailer.mp4";
import Picture_poster_trailer_lavar_island from "../../../assets/photo-box/lavar-island/picture_trailer_lavar_island.webp";
import Picture_name_lavar_island from "../../../assets/photo-box/lavar-island/picture_name_lavar_island.png";

import { ImPause2, ImPlay3 } from "react-icons/im";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import RenderViewBoxChannle from './ViewBoxChannel/RenderViewBoxChanle';
import RenderMylistSlick from './RenderMyList_Slick/RenderMylistSlick';
import RenderListTrending from './ListTrening/RenderListTrending';
import { ContextFromWindowResize } from '../../../views/RenderGetWindowResize';

import { Player } from 'video-react';

function Home() {

    useEffect(() => {
        document.title = "Home" + " | CVP-MOVIE"
    })

    const [controlTogglePPVideoTrailer, setcontrolTogglePPVideoTrailer] = useState(false);
    const [scrollPPVideoTrailer, setscrollPPVideoTrailer] = useState(false);
    const videoTrailerRef = useRef();

    useEffect(() => {
        if (controlTogglePPVideoTrailer) {
            videoTrailerRef.current.play();
        } else {
            videoTrailerRef.current.pause();
        }
    }, [controlTogglePPVideoTrailer])

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
            } else {
                setcontrolTogglePPVideoTrailer(false)
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

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
        setcontrolTogglePPVideoTrailer(false)
    }

    const handleToggleVideoTrailer = () => {
        setcontrolTogglePPVideoTrailer(!controlTogglePPVideoTrailer);
    }

    const ContentBioTrailer = () => {
        return (
            <>
                Stranded on a tropical island,
                two silly larva buddies find slapstick
                fun in everything from discovering
                food to meeting new animal friends.
            </>
        )
    }

    const VIDEOS_INFOR_TRAILER_VIDEO_HOME = [
        {
            id: 0,
            titleFilm: "Larvar island",
            srcVideoTrailer: Video_trailer_lavar_island,
            srcPosterTrailer: Picture_poster_trailer_lavar_island,
            srcImageNameInTrail: Picture_name_lavar_island,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "16+",
            categoryGame: false
        },
        {
            id: 1,
            titleFilm: "lookism",
            srcVideoTrailer: Video_trailer_lookism,
            srcPosterTrailer: Picture_poster_trailer_lookism,
            srcImageNameInTrail: Picture_name_lookism,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "6+",
            categoryGame: false
        },
        {
            id: 2,
            titleFilm: "wednesday",
            srcVideoTrailer: Video_trailer_wednesday,
            srcPosterTrailer: Picture_poster_trailer_wednesday,
            srcImageNameInTrail: Picture_name_wednesday,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "18+",
            categoryGame: false
        },
        // {
        //     id: 3,
        //     titleFilm : "bird box",
        //     srcVideoTrailer: Video_trailer_bird_box,
        //     srcPosterTrailer: Picture_poster_trailer_bird_box,
        //     srcImageNameInTrail: Picture_name_bird_box,
        //     contentBioTrailer: <ContentBioTrailer />,
        //     ageLimit: "16+",
        //     categoryGame: false
        // },
        {
            id: 4,
            titleFilm : "train to busan",
            srcVideoTrailer: Video_trailer_train_to_busan,
            srcPosterTrailer: Picture_poster_trailer_train_to_busan,
            srcImageNameInTrail: Picture_name_train_to_busan,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "16+",
            categoryGame: false
        },
    ]

    //get array get information trailer front
    const [numberArrayDetermine, setNumberArrayDetermine] = useState(0);
    const [booleanDisabledBtnChange, setBooleanDisabledBtnChange] = useState(false)
    const [booleanDisabledBtnChange_balance, setBooleanDisabledBtnChange_balance] = useState(true)

    let getInfoTrailer = VIDEOS_INFOR_TRAILER_VIDEO_HOME[numberArrayDetermine];
    const [changeAnimationFrontBgr, setchangeAnimationFrontBgr] = useState(false);

    const ChangeAnimationLoadSke = () => {
        setTimeout(() => {
            setchangeAnimationFrontBgr(true)
            setTimeout(() => {
                setchangeAnimationFrontBgr(false)
            }, 600)
        }, 0);
    }

    const handleSlickNextChangeTrailer = () => {
        setTimeout(() => {
            setNumberArrayDetermine(numberArrayDetermine + 1)
            setcontrolTogglePPVideoTrailer(false)
        }, 300)
        ChangeAnimationLoadSke();
    };

    const handleSlickPrevChangeTrailer = () => {
        setTimeout(() => {
            setNumberArrayDetermine(numberArrayDetermine - 1)
            setcontrolTogglePPVideoTrailer(false)
        }, 300)
        ChangeAnimationLoadSke();
    };

    useEffect(() => {
        if (numberArrayDetermine === 0) {
            setBooleanDisabledBtnChange(false)
            setBooleanDisabledBtnChange_balance(true)
        } else if (numberArrayDetermine === (VIDEOS_INFOR_TRAILER_VIDEO_HOME.length - 1))
            setBooleanDisabledBtnChange_balance(false)
        else {
            setBooleanDisabledBtnChange(true)
            setBooleanDisabledBtnChange_balance(true)
        }
    }, [numberArrayDetermine])


    const useContextFromWindowSide = useContext(ContextFromWindowResize);


    return (
        <div className="wrap__home">
            <div className="video_trailer">

                <Player
                    ref={videoTrailerRef}
                    onEnded={handleEventEndedVideo}
                    src={getInfoTrailer.srcVideoTrailer}
                    poster={getInfoTrailer.srcPosterTrailer}
                    controls={false}
                    loop={false}

                />

                <div
                    className={`background__front-video 
                ${changeAnimationFrontBgr ? "unactive_background__front-video" : ""}`}>
                </div>

                <div className="box_btn_control--work">
                    <div className="size-bozing_control">
                        <div className="border__content">
                            <img src={getInfoTrailer.srcImageNameInTrail} />
                            <div className="row-footer">
                                <div className="text_introduce_trailer">
                                    {getInfoTrailer.contentBioTrailer}
                                </div>
                            </div>
                            {/* control btn */}
                            <div className="block-btn__control">
                                <button className="button-mixin border__btn_play--list btn btn-5 hover-border-11">
                                    <ImPlay3 />
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

                                <div className="minxin_PP-right border_old_warning">
                                    {getInfoTrailer.ageLimit}
                                </div>
                                {
                                    booleanDisabledBtnChange ?
                                        <div
                                            className="minxin_PP-right border_handler-trailer"
                                            onClick={handleSlickPrevChangeTrailer}
                                        >
                                            <GrLinkPrevious />
                                        </div> : ""
                                }
                                {/* --- */}
                                {
                                    booleanDisabledBtnChange_balance ?
                                        <div
                                            className="minxin_PP-right border_handler-trailer"
                                            onClick={handleSlickNextChangeTrailer}
                                        >
                                            <GrLinkNext />
                                        </div> : ""
                                }

                            </div>

                        </div>

                    </div>
                    {
                        useContextFromWindowSide.getWidthWindow <= 425 ?
                            "" :
                            <div className="handle_toggle--PP">
                                <button onClick={handleToggleVideoTrailer} className="borderPP-trailer" >
                                    {controlTogglePPVideoTrailer ?
                                        <ImPause2 /> :
                                        <ImPlay3 />}
                                </button>
                            </div>
                    }

                </div>

                <div className="bottom_shadow"></div>
            </div>

            <div className="body_home">
                <RenderViewBoxChannle />
                <RenderMylistSlick />
                <RenderListTrending />
            </div>
        </div>
    )
}

export default Home;