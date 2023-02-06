import React, { useContext, useEffect, useState } from 'react'

import Image_poster_playing_1 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-avatar-the-way-of-water.jpg"
import Image_poster_playing_2 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-big-trip-2-special-delivery.jpg"
import Image_poster_playing_3 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-bup-be-goi-hon.jpg"
import Image_poster_playing_4 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-gangnam-zombie.jpg"
import Image_poster_playing_5 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-jackpot-island.jpg"
import Image_poster_playing_6 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-oh-my-girl.jpg"
import Image_poster_playing_7 from "../../../../assets/LIST-FILM-BOOK-TICKETS/LIST-FILM-PLAYING/image_poster-puss-in-boots-the-last-wish.jpg"

import Slider from 'react-slick'
import RenderItemBookTickets from '../ItemBoxBookTickets/RenderItemBookTickets'
import LoadingRoute from '../../../../views/LoadingRoute'
import { ContextFromWindowResize } from '../../../../views/RenderGetWindowResize'
import { Modal, Skeleton } from 'antd'

const listFilmBookPlaying = [
    {
        id: 1,
        titleFilm: "avatar : dong chay cua nuoc",
        srcImagePoster: Image_poster_playing_1,
        limitOld: "18+",

        favoriteDegree: "90%",
        dateMovieFilm: "19/01",
        toPage: "#",
    },
    {
        id: 2,
        titleFilm: "chuyen di nho doi : tieu doi gau bay",
        srcImagePoster: Image_poster_playing_2,
        limitOld: "6+",

        favoriteDegree: "60%",
        dateMovieFilm: "11/03",
        toPage: "#",
    },
    {
        id: 3,
        titleFilm: "bup be goi hon",
        srcImagePoster: Image_poster_playing_3,
        limitOld: "18+",

        favoriteDegree: "45%",
        dateMovieFilm: "27/02",
        toPage: "#",
    },
    {
        id: 4,
        titleFilm: "gangnam - that thu",
        srcImagePoster: Image_poster_playing_4,
        limitOld: "16+",

        favoriteDegree: "28%",
        dateMovieFilm: "09/08",
        toPage: "#",
    },
    {
        id: 5,
        titleFilm: "dao doc dac",
        srcImagePoster: Image_poster_playing_5,
        limitOld: "18+",

        favoriteDegree: "90%",
        dateMovieFilm: "18/02",
        toPage: "#",
    },
    {
        id: 6,
        titleFilm: "quyet tam cua em",
        srcImagePoster: Image_poster_playing_6,
        limitOld: "16+",

        favoriteDegree: "39%",
        dateMovieFilm: "11/03",
        toPage: "#",
    },
    {
        id: 7,
        titleFilm: "meo di hia : dieu uoc cuoi cung",
        srcImagePoster: Image_poster_playing_7,
        limitOld: "6+",

        favoriteDegree: "96%",
        dateMovieFilm: "11/03",
        toPage: "#",
    },
]

function RenderBookTicketsPlaying() {
    const [isModalPreviewMovies, setIsModalPreviewMovies] = useState(false)
    const [contentModalPreviewInfomation, setContentModalPreviewInfomation] = useState([])
    const [titleModal_film, setTitleModal_film] = useState('')

    const handleOpenModalPreview = (contentPrevew, titleModal) => {
        setIsModalPreviewMovies(true)
        setContentModalPreviewInfomation(contentPrevew)
        setTitleModal_film(titleModal)
    }
    const handleCloseModalPreview = () => {
        setIsModalPreviewMovies(false)
    }

    const returnListBookTicketsPlaying = listFilmBookPlaying.map((index) => {
        const handleClickModal = ()=>{
            handleOpenModalPreview([
                <div>content {index.titleFilm}</div>
            ])
            setTitleModal_film(index.titleFilm)
        }
        return (
            <RenderItemBookTickets
                key={index.id}
                srcImagePoster={index.srcImagePoster}
                title={index.titleFilm}
                titleFilm={index.titleFilm}
                dateMovieFilm={index.dateMovieFilm}
                favoriteDegree={index.favoriteDegree}
                limitOld={index.limitOld}
                handleClickModal={handleClickModal}
            >
            </RenderItemBookTickets>
        )
    })

    const useContextFromWindowSize = useContext(ContextFromWindowResize)
    const [numberToSlide, setnumberToSlide] = useState(5)
    useEffect(() => {
        if (useContextFromWindowSize.getWidthWindow <= 1150 && useContextFromWindowSize.getWidthWindow > 1050) {
            setnumberToSlide(4)
        } else if (useContextFromWindowSize.getWidthWindow <= 1050) {
            setnumberToSlide(3)
        } else {
            setnumberToSlide(5)
        }
    }, [useContextFromWindowSize.getWidthWindow])



    return (
        <>
            <div className="wrap_border_content-tab-booking animation_scale-lg">
                <Slider
                    dots={true}
                    slidesToScroll={1}
                    slidesToShow={numberToSlide}
                    infinite={false}
                    swipeToSlide={true}
                >
                    {returnListBookTicketsPlaying}
                </Slider>


                <Modal
                    title={titleModal_film}
                    open={isModalPreviewMovies}
                    onCancel={handleCloseModalPreview}
                    footer={null}
                    className="modal-1"
                    maskStyle={{borderRadius:'30%'}}
                >
                    {contentModalPreviewInfomation}
                    <div className='loading-sek'>
                        <Skeleton active />
                        <Skeleton active />
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default RenderBookTicketsPlaying