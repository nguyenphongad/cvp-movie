import React, { createContext } from 'react'
import image_poster_1 from "../../assets/LIST-FILM-SYSTEM/image_poster/img1.jpg"
import image_poster_2 from "../../assets/LIST-FILM-SYSTEM/image_poster/img2.jpg"
import image_poster_3 from "../../assets/LIST-FILM-SYSTEM/image_poster/img3.jpg"
import image_poster_4 from "../../assets/LIST-FILM-SYSTEM/image_poster/img4.jpg"
import image_poster_5 from "../../assets/LIST-FILM-SYSTEM/image_poster/img5.jpg"
import image_poster_6 from "../../assets/LIST-FILM-SYSTEM/image_poster/img6.jpg"
import image_poster_7 from "../../assets/LIST-FILM-SYSTEM/image_poster/img7.jpg"

export const ListFilmSystem = createContext()

function RenderListFilmSystem({children}) {
    const session = " SESSION";
    const f = false;
    const t = true;
    const listFilmSystem = [
        {
            id: 1,
            titleFilm: "ALL OF US ARE DEAD",
            productionYearFilm: "2022",
            timeFilm: "1"+session,
            limitOld: "16+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_1,
            onClickPP: "",
            onClickInfo: "",
            comingSoon:f,
            myList : t,
            newFilm : f,
        },
        {
            id:2,
            titleFilm: "UNCLE FROM ANTHOR WORLD",
            productionYearFilm: "2021",
            timeFilm: "1H 40M",
            limitOld: "12+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_2,
            onClickPP: "",
            onClickInfo: "",
            comingSoon:f,
            myList : t,
            newFilm : f,
        },
        {
            id: 3,
            titleFilm: "LOOK ISM",
            productionYearFilm: "2022",
            timeFilm: "2"+session,
            limitOld: "16+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_3,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList :t,
            newFilm : f,
        },
        {
            id: 4,
            titleFilm: "TROLL HUNTERS",
            productionYearFilm: "2021",
            timeFilm: "5"+session,
            limitOld: "12+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_4,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : f,
            newFilm : f,
        },
        {
            id: 5,
            titleFilm: "ARRIETTY",
            productionYearFilm: "2019",
            timeFilm: "1"+session,
            limitOld: "12+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_5,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : t,
            newFilm : f,
        },
        {
            id: 6,
            titleFilm: "LARVAR ISLAND",
            productionYearFilm: "2021",
            timeFilm: "4H 30M",
            limitOld: "8+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_6,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : t,
            newFilm : f,
        },
        {
            id: 7,
            titleFilm: "SQUID GAME",
            productionYearFilm: "2021",
            timeFilm: "1"+session,
            limitOld: "16+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_7,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : t,
            newFilm : f,
        },
    ]

    const valueList = {listFilmSystem}

    return (
        <ListFilmSystem.Provider value={valueList}>
            {children}
        </ListFilmSystem.Provider>
    )
}

export default RenderListFilmSystem