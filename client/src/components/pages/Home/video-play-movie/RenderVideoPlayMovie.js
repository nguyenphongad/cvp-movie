import React from 'react';
import { Player } from "video-react"
import video_play_movie from '../../../../assets/video-play-movie/video-play-movie.mp4'

const RenderVideoPlayMovie = () => {
    return (
        <div>
            <Player
                src={video_play_movie}
                controls={false}
            >

            </Player>
        </div>
    )
}

export default RenderVideoPlayMovie