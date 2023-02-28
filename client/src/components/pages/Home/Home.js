import React, { useContext, useEffect, useRef, useState } from 'react';

import Video_trailer_lookism from "../../../assets/video-trailers/lookism-trailer.mp4";
import Picture_poster_trailer_lookism from "../../../assets/photo-box/lookism/picture_trailer_lookism.webp";
import Picture_name_lookism from "../../../assets/photo-box/lookism/picture_name_lookism.png";

import Video_trailer_eldenring from "../../../assets/video-trailers/eldenring-trailer.mp4";
import Picture_poster_trailer_eldenring from "../../../assets/photo-box/eldenring/picture_trailer_eldenring.webp";
import Picture_name_eldenring from "../../../assets/photo-box/eldenring/picture_name_eldenring.png";

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
import { IoGameController } from "react-icons/io5";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

import RenderViewBoxChannle from './ViewBoxChannel/RenderViewBoxChanle';
import RenderMylistSlick from './RenderMyList_Slick/RenderMylistSlick';
import RenderListTrending from './ListTrening/RenderListTrending';
import AppLearn from './learnHook/AppLearn';
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
    })

    useEffect(() => {
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === 'visible') {
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
        setcontrolTogglePPVideoTrailer(false)
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
    const VIDEOS_INFOR_TRAILER_VIDEO_HOME = [
        {
            id: 0,
            titleFilm : "Larvar island",
            srcVideoTrailer: Video_trailer_lavar_island,
            srcPosterTrailer: Picture_poster_trailer_lavar_island,
            srcImageNameInTrail: Picture_name_lavar_island,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "16+",
            categoryGame: false
        },
        {
            id: 1,
            titleFilm : "lookism",
            srcVideoTrailer: Video_trailer_lookism,
            srcPosterTrailer: Picture_poster_trailer_lookism,
            srcImageNameInTrail: Picture_name_lookism,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "6+",
            categoryGame: false
        },
        {
            id: 2,
            titleFilm : "eldenring (game)",
            srcVideoTrailer: Video_trailer_eldenring,
            srcPosterTrailer: Picture_poster_trailer_eldenring,
            srcImageNameInTrail: Picture_name_eldenring,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "18+",
            categoryGame: true
        },
        {
            id: 3,
            titleFilm : "wednesday",
            srcVideoTrailer: Video_trailer_wednesday,
            srcPosterTrailer: Picture_poster_trailer_wednesday,
            srcImageNameInTrail: Picture_name_wednesday,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "18+",
            categoryGame: false
        },
        {
            id: 4,
            titleFilm : "bird box",
            srcVideoTrailer: Video_trailer_bird_box,
            srcPosterTrailer: Picture_poster_trailer_bird_box,
            srcImageNameInTrail: Picture_name_bird_box,
            contentBioTrailer: <ContentBioTrailer />,
            ageLimit: "16+",
            categoryGame: false
        },
        {
            id: 5,
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

    const [changeAnimationFrontBgr, setchangeAnimationFrontBgr] = useState(false)
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
        }, 300)
        ChangeAnimationLoadSke();
    }
    const handleSlickPrevChangeTrailer = () => {
        setTimeout(() => {
            setNumberArrayDetermine(numberArrayDetermine - 1)
        },300)
        ChangeAnimationLoadSke();
    }

    useEffect(() => {
        if (numberArrayDetermine === 0) {
            setBooleanDisabledBtnChange(false)
            setBooleanDisabledBtnChange_balance(true)
        } else if (numberArrayDetermine === VIDEOS_INFOR_TRAILER_VIDEO_HOME.length - 1)
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
                                    getInfoTrailer.categoryGame ?
                                        <div className="minxin_PP-right border_old_warning">
                                            <IoGameController />
                                        </div> : ""
                                }
                                {
                                    booleanDisabledBtnChange ?
                                        <div
                                            className="minxin_PP-right border_handler-trailer"
                                            onClick={handleSlickPrevChangeTrailer}
                                        >
                                            <GrLinkPrevious />
                                        </div> : ""
                                }
                                {/* ---- */}
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

                {/* <AppLearn /> */}


            </div>
        </div>
    )
}

export default Home;