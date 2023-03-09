import React from 'react'
import { Link } from 'react-router-dom'
import Image_notification_1 from "../../../assets/image_notification/picture_notification_1.jpeg"
import Image_notification_2 from "../../../assets/image_notification/picture_notification_2.jpeg"
import Image_notification_3 from "../../../assets/image_notification/picture_notification_3.jpeg"
import Image_notification_4 from "../../../assets/image_notification/picture_notification_4.jpeg"

const LIST_ITEM_NOTIFICATION = [
    {
        id: 1,
        srcImage: Image_notification_1,
        titleFilm: "Wednesday",
        productionYearFilm: 2022,
        timeAgo: "Just released : 10 day ago",
        toLink: "#"
    },
    {
        id: 2,
        srcImage: Image_notification_2,
        titleFilm: "Avatar 2",
        productionYearFilm: 2022,
        timeAgo: "Coming soon : 1 more week",
        toLink: "#"
    },
    {
        id: 3,
        srcImage: Image_notification_3,
        titleFilm: "Peaky bliders",
        productionYearFilm: 2022,
        timeAgo: "Coming soon : 2 more week",
        toLink: "#"
    },
    {
        id: 4,
        srcImage: Image_notification_4,
        titleFilm: "new arrival the lody",
        productionYearFilm: 2022,
        timeAgo: "Coming soon : 1 more week",
        toLink: "#"
    },
]

function RenderBoxNotification() {

    const returnListItemNotification = LIST_ITEM_NOTIFICATION.map((index) => {
        return (
            <div className="item_list--noti" key={index.id}>
                <Link to={index.toLink}>
                    <img src={index.srcImage} alt="image_noti"/>
                    <div className="heading_noti-public">
                        <div className="title-heading">{index.titleFilm} | {index.productionYearFilm}</div>
                        <div className="font-exp_day">{index.timeAgo}</div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="body__drop">
            {returnListItemNotification}
        </div>
    )
}

export default RenderBoxNotification