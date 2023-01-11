import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from "../../components/"
import NotFound from '../../components/pages/NotFound/NotFound'
// import RenderMyList from '../../components/pages/MyList/RenderMyList'
// import RenderBookTickets from '../../components/pages/BookTickets/RenderBookTickets'

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../../components/Error/RenderErrorBounDary'
import RenderSearchMain from '../../components/pages/SearchMain/RenderSearchMain'
import RenderSetting from '../../components/Setting/RenderSetting'
import RenderYourAccount from '../../components/YourAccount/RenderYourAccount'
import LoadingRoute from '../../views/LoadingRoute';
import RenderBookTicketsHistory from '../../components/pages/BookTickets/BookTicketsHistory/RenderBookTicketsHistory';

const LazyHome = lazy(() => import('../../components/pages/Home/Home'))
const LazyMyList = lazy(() => import('../../components/pages/MyList/RenderMyList'))
const LazyBookTickets = lazy(() => import('../../components/pages/BookTickets/RenderBookTickets'))
const LazyMovies = lazy(() => import('../../components/pages/Movies/RenderMovies'))
const LazyMenu = lazy(()=> import('../../components/pages/Menu/RenderMenu'))

function RouterBody() {

    return (
        <div className="stl-routes">
            <Routes>
                <Route path="/" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyHome />
                    </React.Suspense>
                } />
                <Route path="/home" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyHome />
                    </React.Suspense>
                } />

                <Route path="/movies" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyMovies />
                    </React.Suspense>
                } />
                <Route path="/my-list" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyMyList />
                    </React.Suspense>
                } />
                <Route path="/book-tickets" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyBookTickets />
                    </React.Suspense>
                } />
                <Route path="/menu" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyMenu />
                    </React.Suspense>
                } />

                
                <Route path="book-tickets/booking-tickets-history" element={<RenderBookTicketsHistory/> } />

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