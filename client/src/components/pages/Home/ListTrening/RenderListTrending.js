import React, { useContext } from 'react'
import RenderItemBoxFilm from '../../../ItemBoxFilm/RenderItemBoxFilm'
import { ListFilmSystem } from '../../../ListFilmSystem/RenderListFilmSystem'

import {RiGitRepositoryCommitsFill} from "react-icons/ri"

function RenderListTrending() {
    const useContextFromListFilm = useContext(ListFilmSystem)
    const returnListFormMyListComponentTrending = useContextFromListFilm.listFilmSystem.map((index) => {
        return (
            <RenderItemBoxFilm
                key={index.id}
                srcPosterView={index.srcPosterView}
                productionYearFilm={index.productionYearFilm}
                titleFilm={index.titleFilm}
                timeFilm={index.timeFilm}
                limitOld={index.limitOld}
            />
        )

    })
    return (
        <div className="wrap__trending-box--film animation_scale-lg">
            <div className="heading_text">
                <RiGitRepositoryCommitsFill/>
                TRENDING FILM
            </div>
            <div className="body__trending-film">
                {returnListFormMyListComponentTrending}
            </div>
        </div>
    )
}

export default RenderListTrending