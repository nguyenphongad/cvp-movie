import { Modal, Skeleton } from "antd";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextFromTabPlaying } from "../TabBookTickets/ContextTabBookTicketsPlaying";
import { RxDotFilled } from "react-icons/rx"
import { AiFillLike } from "react-icons/ai";
import { useEffect } from "react";
import { BsCardText } from "react-icons/bs";


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
                    <div className="flex__nth-firts">
                        <div className="box_image_poster">
                            <img
                                src={returnListPreviewMovie.srcImagePoster}
                                alt={returnListPreviewMovie.titleFilm.toUpperCase()}
                                title={returnListPreviewMovie.titleFilm.toUpperCase()}
                                className="image_preview_size"
                            />
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
                                <BsCardText/>
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
                                    <div className="heading_state">MOVIE DATE</div>
                                    <div className="result_state">{returnListPreviewMovie.dateMovieFilm}</div>
                                </div>
                                <div className="item_state">
                                    <div className="heading_state">AGE LIMIT</div>
                                    <div className="result_state">{returnListPreviewMovie.limitOld}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <Skeleton
                        active
                        className='line-skeleton-title' />
                    <Skeleton
                        active
                        className='line-skeleton-title' />
                    <Skeleton
                        active
                        className='line-skeleton-title' />
                    <Skeleton
                        active
                        className='line-skeleton-title' />
                </div>
            </div>
        </Modal>
    )
}

export default RenderModalPreviewPlaying