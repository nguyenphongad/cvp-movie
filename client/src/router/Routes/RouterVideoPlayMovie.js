import React, { lazy } from 'react'
import { Route, Routes, } from 'react-router-dom'

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../../components/error/RenderErrorBounDary';
import LoadingRoute from '../../views/LoadingRoute';

const LazyVideoPlayMovie = lazy(() => import('../../components/pages/Home/video-play-movie/RenderVideoPlayMovie'));

function RouterVideoPlayMovie() {

    return (
        <div >
            <Routes>
                <Route path="/play/wacthing-intro" element={
                    <React.Suspense fallback={<LoadingRoute />}>
                        <LazyVideoPlayMovie />
                    </React.Suspense>
                } />

            </Routes>
        </div>
    )
}

export default withErrorBoundary(RouterVideoPlayMovie, {
    FallbackComponent: RenderErrorBounDary
});