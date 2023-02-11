import React, { createContext } from 'react'
import image_poster_1 from "../../assets/LIST-FILM-SYSTEM/image_poster/img1.jpg"
import image_poster_2 from "../../assets/LIST-FILM-SYSTEM/image_poster/img2.jpg"
import image_poster_3 from "../../assets/LIST-FILM-SYSTEM/image_poster/img3.jpg"
import image_poster_4 from "../../assets/LIST-FILM-SYSTEM/image_poster/img4.jpg"
import image_poster_5 from "../../assets/LIST-FILM-SYSTEM/image_poster/img5.jpg"
import image_poster_6 from "../../assets/LIST-FILM-SYSTEM/image_poster/img6.jpg"
import image_poster_7 from "../../assets/LIST-FILM-SYSTEM/image_poster/img7.jpg"
import image_poster_8 from "../../assets/LIST-FILM-SYSTEM/image_poster/img8.jpg"
import image_poster_9 from "../../assets/LIST-FILM-SYSTEM/image_poster/img9.jpg"
import image_poster_10 from "../../assets/LIST-FILM-SYSTEM/image_poster/img10.jpg"
import image_poster_11 from "../../assets/LIST-FILM-SYSTEM/image_poster/img11.jpg"
import image_poster_12 from "../../assets/LIST-FILM-SYSTEM/image_poster/img12.jpg"
import image_poster_13 from "../../assets/LIST-FILM-SYSTEM/image_poster/img13.jpg"
import image_poster_14 from "../../assets/LIST-FILM-SYSTEM/image_poster/img14.jpg"

export const ListFilmSystem = createContext()

function RenderListFilmSystem({children}) {
    const session = " SESSION";
    const f = false;
    const t = true;
    const listFilmSystem = [
        {
            id: 1,
            titleFilm: "all of us are deard",
            productionYearFilm: "2022",
            timeFilm: "1"+session,
            limitOld: "16+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_1,
            onClickPP: "",
            onClickInfo: "",
            comingSoon:f,
            myList : f,
            newFilm : f,
        },
        {
            id:2,
            titleFilm: "uncle from anthor word",
            productionYearFilm: "2021",
            timeFilm: "1H 40M",
            limitOld: "12+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_2,
            onClickPP: "",
            onClickInfo: "",
            comingSoon:f,
            myList : f,
            newFilm : f,
        },
        {
            id: 3,
            titleFilm: "look ism",
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
            titleFilm: "troll hunters",
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
            titleFilm: "arriety",
            productionYearFilm: "2019",
            timeFilm: "1"+session,
            limitOld: "12+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_5,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : f,
            newFilm : f,
        },
        {
            id: 6,
            titleFilm: "lavar island",
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
            titleFilm: "squid game",
            productionYearFilm: "2021",
            timeFilm: "3"+session,
            limitOld: "16+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_7,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : t,
            newFilm : f,
        },
        {
            id: 8,
            titleFilm: "tomorow",
            productionYearFilm: "2020",
            timeFilm: "7"+session,
            limitOld: "14+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_8,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : f,
            newFilm : f,
        },
        {
            id: 9,
            titleFilm: "my neighbor tomorow",
            productionYearFilm: "2018",
            timeFilm: "2H 10P",
            limitOld: "8+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_9,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : t,
            newFilm : f,
        },
        {
            id: 10,
            titleFilm: "the silent sea",
            productionYearFilm: "2020",
            timeFilm: "1" + session,
            limitOld: "18+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_10,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : f,
            newFilm : f,
        },
        {
            id: 11,
            titleFilm: "oggy cock",
            productionYearFilm: "2022",
            timeFilm: "4" + session,
            limitOld: "6+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_11,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : f,
            newFilm : f,
        },
        {
            id: 12,
            titleFilm: "the king",
            productionYearFilm: "2019",
            timeFilm: "1H 50M",
            limitOld: "16+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_12,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : t,
            newFilm : f,
        },
        {
            id: 13,
            titleFilm: "the dark scystal",
            productionYearFilm: "2022",
            timeFilm: "1" + session,
            limitOld: "16+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_13,
            onClickPP: "",
            onClickInfo: "",
            comingSoon: f,
            myList : f,
            newFilm : f,
        },
        {
            id: 14,
            titleFilm: "wednessday",
            productionYearFilm: "2022",
            timeFilm: "1" + session,
            limitOld: "16+",
            ptrackContentFilm: "content bio",
            srcPosterView : image_poster_14,
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