import React, { useContext, useEffect, useState } from 'react'

import Slider from 'react-slick'
import RenderItemBookTickets from '../ItemBoxBookTickets/RenderItemBookTickets'
import { ContextFromWindowResize } from '../../../../views/RenderGetWindowResize'
import { ContextFromTabPlaying } from './ContextTabBookTicketsPlaying'
import { Outlet } from 'react-router-dom'

function RenderBookTicketsPlaying() {
    const useContextFromtabPlaying = useContext(ContextFromTabPlaying);

    const returnListBookTicketsPlaying = useContextFromtabPlaying.LIST_FILM_BOOK_PLAYING.map((index) => {
    

        return (
            <RenderItemBookTickets
                key={index.id}
                srcImagePoster={index.srcImagePoster}
                title={index.titleFilm}
                titleFilm={index.titleFilm}
                dateMovieFilm={index.dateMovieFilm}
                favoriteDegree={index.favoriteDegree}
                limitOld={index.limitOld}
                toLink={`./${index.titleFilmEnglish.replace(/ /g,'-')}-${index.id}`}
                handleClickModal={() => useContextFromtabPlaying.setIsModalPreviewMovies(true)}
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
                <Outlet />


                {/* <Modal
                    title="MOVIES INFORMATION"
                    open={useContextFromtabPlaying.isModalPreviewMovies}
                    onCancel={useContextFromtabPlaying.handleCloseModalPreview}
                    footer={null}
                    className="modal__preview--movies"
                >
                    {useContextFromtabPlaying.contentModalPreviewInfomation}
                    <div className='loading-skeleton'>
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
                </Modal> */}
            </div>
        </>
    )
}

export default RenderBookTicketsPlaying