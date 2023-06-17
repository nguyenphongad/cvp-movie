import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import RenderFuncGetIdMovies from '../../FunctionGetIdMovies/RenderFuncGetIdMovies';
import RenderHandleBookSeats from './HandleBookSeats/RenderHandleBookSeats';
import RenderBookingSteps from './BookingSteps/RenderBookingSteps';

const RenderLayoutBookSeats = () => {

    const { getIdMovies, LIST_ARRAY_MOVIE } = RenderFuncGetIdMovies(12);

    const toNavigate = useNavigate();
    useEffect(() => {
        if (getIdMovies === "") {
            toNavigate("../book-tickets");
        } else {
            document.title = `DAT CHO NGOI ${LIST_ARRAY_MOVIE.titleFilm.toUpperCase()}` + " | CVP-MOVIE";
        }
    }, [getIdMovies]);

    return (
        <>
            <RenderBookingSteps />
            <div className='wrap_book_seat animation_scale-lg'>
                <RenderHandleBookSeats />
            </div>

        </>
    )
}

export default RenderLayoutBookSeats;