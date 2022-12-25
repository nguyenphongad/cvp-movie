import React, { useContext } from 'react'
import { ListFilmSystem } from '../../ListFilmSystem/RenderListFilmSystem'
import {GoChecklist} from "react-icons/go"

function RenderMyList() {

    const indexFromList = useContext(ListFilmSystem)

    const returnListMyListComponent = indexFromList.listFilmSystem.map((index) => {
        return index.myList ? (
            <div className="item_box_film">
                <img src={index.srcPosterView} />
                {index.titleFilm}
            </div>
        ) : ""
    })

    return (
        <div className="wrap__my-list">
            <div className="body_my-list">
                <div className="tr_heading">
                    <div className="heading_text">
                        <GoChecklist/> MY LIST
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