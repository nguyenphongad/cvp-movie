import { Modal, Skeleton } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextFromTabPlaying } from "../TabBookTickets/ContextTabBookTicketsPlaying";
import { RxDotFilled } from "react-icons/rx"
import { AiFillLike, AiOutlineClose } from "react-icons/ai";
import { BsCardText } from "react-icons/bs";
import RenderBookGetDateFilm from "../TabBookTickets/GetDateBookTickets/RenderBookGetDateFilm";
import RenderCommentReviewFilm from "../MovieReviewComment/RenderCommentReviewFilm";

const RenderModalPreviewPlaying = () => {
    const useOpenModalPreview = useContext(ContextFromTabPlaying);

    const LIST_BOOK_TICKETS_PLAYING = useOpenModalPreview.LIST_FILM_BOOK_PLAYING

    const getPathname = useLocation();
    const getIdMovies = getPathname.pathname.slice(14)
    const getIndexArrayListPlaying = LIST_BOOK_TICKETS_PLAYING.findIndex(
        item => item.titleFilmEnglish.replace(/ /g, '-') + "-" + item.id === getIdMovies
    )
    const returnListPreviewMovie = LIST_BOOK_TICKETS_PLAYING[getIndexArrayListPlaying]

    document.title = `${returnListPreviewMovie.titleFilm.toUpperCase()}` + " | CVP-MOVIE"

    const handleGoBackModal = useNavigate();
    const handleCloseModalPreview = () => {
        useOpenModalPreview.setIsModalPreviewMovies(false)
        setTimeout(() => handleGoBackModal("/book-tickets"), 300)
    }

    const [isOpenModalInTrailer, setisOpenModalInTrailer] = useState(false)

    const handleOpenModalTrailer = () => {
        setisOpenModalInTrailer(true)
    }
    const handleCloseModalTrailer = () => {
        setisOpenModalInTrailer(false)
    }

    const [isTimeSkeleton, setIsTimeSkeleton] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsTimeSkeleton(false)
        }, 1500)
    })

    return (
        <Modal
            title="MOVIES INFORMATION"
            open={useOpenModalPreview.isModalPreviewMovies}
            footer={null}
            className="modal__preview--movies"
            onCancel={handleCloseModalPreview}
        >
            <div className="content__preview">
                <div className="body__information-single--film">
                    {
                        isTimeSkeleton ?
                            <>
                                <div className="skeleton__component--modal">
                                    <div className="width__image_intro">
                                        <Skeleton
                                            active
                                            className='line-skeleton-image' />
                                    </div>
                                    <div className="width__title--line">
                                        <Skeleton
                                            active
                                            className='line-skeleton-title-film' />
                                        <Skeleton
                                            active
                                            className='line-skeleton-title' />
                                        <Skeleton
                                            active
                                            className='line-skeleton-preview' />
                                        <Skeleton
                                            active
                                            className='line-skeleton-infor' />
                                    </div>


                                </div>
                                <Skeleton
                                    active
                                    className='line-skeleton-test' />
                            </>

                            :
                            <>
                                <div className="flex__nth-firts">
                                    <div className="box_image_poster">
                                        <img
                                            src={returnListPreviewMovie.srcImagePoster}
                                            alt={returnListPreviewMovie.titleFilm.toUpperCase()}
                                            title={returnListPreviewMovie.titleFilm.toUpperCase()}
                                            className="image_preview_size"
                                        />
                                        <div className="border__postiton_btn--trailer">
                                            <button className="btn__trailer" onClick={handleOpenModalTrailer}>
                                                TRAILER
                                            </button>
                                            <div
                                                className={`modal__trailer_item_book--w ${isOpenModalInTrailer ? "display-block" : "display-none"}`}
                                            >
                                                <div className="wrap__close_modal--trailer"
                                                    onClick={handleCloseModalTrailer}
                                                >
                                                    <button id="border__close_modal-trailer">
                                                        <AiOutlineClose />
                                                    </button>
                                                </div>

                                                <div className="border__iframe">
                                                    {
                                                        isOpenModalInTrailer
                                                            ?
                                                            <iframe
                                                                src={returnListPreviewMovie.srcYoutubeTrailer}
                                                                title={returnListPreviewMovie.titleFilm.toUpperCase()}
                                                                rameborder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                                allowfullscreen="1"
                                                            >
                                                            </iframe>
                                                            : ""
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line_information-film">
                                        <div className="size_title-film">
                                            {returnListPreviewMovie.titleFilm.toUpperCase()}
                                        </div>
                                        <div className="title_film-EL">
                                            {returnListPreviewMovie.titleFilmEnglish.toUpperCase()}
                                            <RxDotFilled />
                                            {returnListPreviewMovie.movieDuration} MINUTE
                                        </div>
                                        <div className="leading_relaxed">
                                            <BsCardText />
                                            <div className="content_leadding-rel">
                                                {returnListPreviewMovie.leading_relax.toUpperCase()}
                                            </div>

                                        </div>
                                        <div className="state-information">
                                            <div className="item_state">
                                                <div className="heading_state">FAVORITE</div>
                                                <div className="result_state">
                                                    <AiFillLike />
                                                    {returnListPreviewMovie.favoriteDegree}
                                                </div>
                                            </div>
                                            <div className="item_state">
                                                <div className="heading_state">SHOW DATE</div>
                                                <div className="result_state">{returnListPreviewMovie.dateMovieFilm}</div>
                                            </div>
                                            <div className="item_state">
                                                <div className="heading_state">AGE LIMIT</div>
                                                <div className="result_state">{returnListPreviewMovie.limitOld}</div>
                                            </div>
                                            <div className="item_state">
                                                <div className="heading_state">NATION</div>
                                                <div className="result_state">{returnListPreviewMovie.nationFilm.toUpperCase()}</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {<RenderBookGetDateFilm/>}
                            </>
                    }

                    {/* <RenderCommentReviewFilm/> */}

                    <Skeleton
                        active
                        className='line-skeleton-test' />
                    <Skeleton
                        active
                        className='line-skeleton-test' />
                    <Skeleton
                        active
                        className='line-skeleton-test' />
                </div>
            </div>
        </Modal>
    )
}

export default RenderModalPreviewPlaying