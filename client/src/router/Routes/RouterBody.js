import React, { lazy } from 'react'
import { Route, Routes, } from 'react-router-dom'
import NotFound from '../../components/pages/NotFound/NotFound'

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../../components/error/RenderErrorBounDary'
import RenderSearchMain from '../../components/pages/SearchMain/RenderSearchMain'
import RenderSetting from '../../components/Setting/RenderSetting'
import RenderYourAccount from '../../components/YourAccount/RenderYourAccount'
import LoadingRoute from '../../views/LoadingRoute';
import { useContext } from 'react';
import { ContextFromTabPlaying } from '../../components/pages/BookTickets/TabBookTickets/ContextTabBookTicketsPlaying';
import RenderModalPreviewPlaying from '../../components/pages/BookTickets/ModalPreviewFilms/RenderModalPreviewPlaying';

const LazyHome = lazy(() => import('../../components/pages/Home/Home'));
const LazyVideoPlayMovie = lazy(() => import('../../components/pages/Home/video-play-movie/RenderVideoPlayMovie'));
const LazyMyList = lazy(() => import('../../components/pages/MyList/RenderMyList'));
const LazyBookTickets = lazy(() => import('../../components/pages/BookTickets/RenderBookTickets'));
const LazyLayoutBookSeats = lazy(() => import('../../components/pages/BookTickets/TabBookTickets/BookSeats/RenderLayoutBookSeats'));
const LazyMovies = lazy(() => import('../../components/pages/Movies/RenderMovies'));
const LazyMenu = lazy(() => import('../../components/pages/Menu/RenderMenu'));
const LazyBookTicketsHistory = lazy(() => import('../../components/pages/BookTickets/BookTicketsHistory/RenderBookTicketsHistory'));


function RouterBody() {
    const useOpenModalPreview = useContext(ContextFromTabPlaying);

    const returnRouteListBookTicketsPlaying = useOpenModalPreview.LIST_FILM_BOOK_PLAYING.map(index => {
        const pathTitleToLower = index.titleFilmEnglish;
        return (
            <Route
                key={index.id}
                path={`${pathTitleToLower.replace(/ /g, '-')}-${index.id}`}
                element={<RenderModalPreviewPlaying />} />
        )
    })

    return (
        <div className="component-routes">
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
                <Route path="/play/wacthing-intro" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyVideoPlayMovie />
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
                <Route path="/cinema/book-tickets" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyBookTickets />
                    </React.Suspense>
                } >
                    {returnRouteListBookTicketsPlaying}
                </Route>

                <Route path="/cinema/book-seats" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyLayoutBookSeats />
                    </React.Suspense>
                } >
                    {returnRouteListBookTicketsPlaying}
                </Route>

                <Route path="/cinema/booking-tickets-history" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyBookTicketsHistory />
                    </React.Suspense>
                } />

                <Route path="/menu" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyMenu />
                    </React.Suspense>
                } />

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