import React, { useContext } from 'react'
import { ListFilmSystem } from '../../ListFilmSystem/RenderListFilmSystem'
import { GoChecklist } from "react-icons/go"
import RenderItemBoxFilm from '../../ItemBoxFilm/RenderItemBoxFilm'

function RenderMyList() {

    const indexFromList = useContext(ListFilmSystem)

    const returnListMyListComponent = indexFromList.listFilmSystem.map((index) => {
        return index.myList ? (
            <RenderItemBoxFilm
                key={index.id}
                srcPosterView={index.srcPosterView}
                productionYearFilm={index.productionYearFilm}
                titleFilm={index.titleFilm}
                timeFilm={index.timeFilm}
                limitOld={index.limitOld}
            />
        ) : ""
    })

    return (
        <div className="wrap__my-list">
            <div className="body_my-list">
                <div className="tr_heading">
                    <div className="heading_text">
                        <GoChecklist /> MY LIST
                    </div>
                </div>
                <div className="body_product-film">
                    {returnListMyListComponent}
                </div>

            </div>
        </div>
    )
}

export default RenderMyList