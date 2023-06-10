import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import RenderFuncGetIdMovies from '../../FunctionGetIdMovies/RenderFuncGetIdMovies';

const RenderBookSeats = () => {

    const returnFuncListMovies = RenderFuncGetIdMovies(12);

    const toNavigate = useNavigate();
    useEffect(() => {
        if (returnFuncListMovies.getIdMovies === "") {
            toNavigate("../book-tickets");
        } else {
            document.title = `DAT CHO NGOI | ${returnFuncListMovies.LIST_ARRAY_MOVIE.titleFilm.toUpperCase()}` + " | CVP-MOVIE";
        }
    }, [returnFuncListMovies.getIdMovies]);

    return (
        <div className='wrap_book_seat'>
            RenderBookSeats
            <div>
                {returnFuncListMovies.getIdMovies === "" ? undefined : returnFuncListMovies.LIST_ARRAY_MOVIE.titleFilm.toUpperCase()}
            </div>
        </div>
    )
}

export default RenderBookSeats