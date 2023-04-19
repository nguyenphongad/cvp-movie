import React, { useEffect } from 'react'
import { FaRegListAlt } from 'react-icons/fa'

function RenderMovies() {
    useEffect(()=>{
        document.title = "Movies" + " | CVP-MOVIE"
    })
    return (
        <div className="wrap__movies animation_scale-lg">
            <div className="body__movie">
                <div className="heading_text">
                    <FaRegListAlt /> LIST MOVIES
                </div>
                <div>
                    <div className="noti_unContent">
                        UNRELEASED MOVIE CONTENT
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RenderMovies