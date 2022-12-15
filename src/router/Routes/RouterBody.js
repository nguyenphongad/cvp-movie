import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../components/pages/Home/Home'
import RenderMovies from '../../components/pages/Movies/RenderMovies'
import NotFound from '../../components/pages/NotFound/NotFound'
import RenderMyList from '../../components/pages/MyList/RenderMyList'
import RenderBookTickets from '../../components/pages/BookTickets/RenderBookTickets'

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../../components/Error/RenderErrorBounDary'
import RenderSearchMain from '../../components/pages/SearchMain/RenderSearchMain'
import RenderSetting from '../../components/Setting/RenderSetting'
import RenderYourAccount from '../../components/YourAccount/RenderYourAccount'

function RouterBody() {

    return (
        <div className="stl-routes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/movies" element={<RenderMovies />} />
                <Route path="/my-list" element={<RenderMyList />} />
                <Route path="/book-tickets" element={<RenderBookTickets />} />

                <Route path="/search" element={<RenderSearchMain />} />

                <Route path="/your-account" element={<RenderYourAccount />} />
                <Route path="/setting" element={<RenderSetting />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default withErrorBoundary(RouterBody, {
    FallbackComponent: RenderErrorBounDary
});