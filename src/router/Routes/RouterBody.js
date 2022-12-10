import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../components/pages/Home/Home'
import RenderMovies from '../../components/Movies/RenderMovies'
import NotFound from '../../components/pages/NotFound/NotFound'
import RenderMyList from '../../components/pages/MyList/RenderMyList'
import RenderBookTickets from '../../components/pages/BookTickets/RenderBookTickets'

function RouterBody() {
    return (
        <div className="stl-routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/movies" element={<RenderMovies />} />
                <Route path="/my-list" element={<RenderMyList />} />
                <Route path="/book-tickets" element={<RenderBookTickets />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default RouterBody;