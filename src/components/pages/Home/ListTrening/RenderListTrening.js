import React, { useContext } from 'react'
import RenderItemBoxFilm from '../../../ItemBoxFilm/RenderItemBoxFilm'
import { ListFilmSystem } from '../../../ListFilmSystem/RenderListFilmSystem'

import {RiMovie2Fill} from "react-icons/ri"

function RenderListTrening() {
    const useContextFromListFilm = useContext(ListFilmSystem)
    const returnListFormMyListComponentTrening = useContextFromListFilm.listFilmSystem.map((index) => {
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
        <div className="wrap__trening-box--film">
            <di className="heading_text">
                <RiMovie2Fill/>
                TRENING
            </di>
            <div className="body__trening-film">
                {returnListFormMyListComponentTrening}
            </div>
        </div>
    )
}

export default RenderListTrening