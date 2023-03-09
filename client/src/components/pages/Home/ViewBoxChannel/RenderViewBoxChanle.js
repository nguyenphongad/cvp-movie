import React from 'react'
import { Link } from 'react-router-dom';

import Gif_view_box_channel_disney from "../../../../assets/gif_viewBox/gif_viewBox_disney.gif";
import Gif_view_box_channel_marvel from "../../../../assets/gif_viewBox/gif_viewBox_marvel.gif";
import Gif_view_box_channel_cartoon_network from "../../../../assets/gif_viewBox/gif_viewBox_cartoon_network.gif";
import Gif_view_box_channel_national_geo from "../../../../assets/gif_viewBox/gif_viewBox_national-geo.gif";
import Gif_view_box_channel_netflix from "../../../../assets/gif_viewBox/gif_viewBox_netflix.gif";


import Picture_view_box_channel_disney from "../../../../assets/photo-box/image_view_box_channel/disney.jpg";
import Picture_view_box_channel_marvel from "../../../../assets/photo-box/image_view_box_channel/marvel.png";
import Picture_view_box_channel_cartoon_network from "../../../../assets/photo-box/image_view_box_channel/cartoon_network.png";
import Picture_view_box_channel_national_geo from "../../../../assets/photo-box/image_view_box_channel/national-geographic.jpg";
import Picture_view_box_channel_netflix from "../../../../assets/photo-box/image_view_box_channel/netflix.png";

import { MdScanner } from "react-icons/md";

function RenderViewBoxChannle() {

    const list_view_box_channel = [
        {
            id: 1,
            src_img: Picture_view_box_channel_disney,
            scr_gif: Gif_view_box_channel_disney,
            linkTo: "#1"
        },
        {
            id: 2,
            src_img: Picture_view_box_channel_marvel,
            scr_gif: Gif_view_box_channel_marvel,
            linkTo: "#2"
        },
        {
            id: 3,
            src_img: Picture_view_box_channel_cartoon_network,
            scr_gif: Gif_view_box_channel_cartoon_network,
            linkTo: "#3"
        },
        {
            id: 4,
            src_img: Picture_view_box_channel_national_geo,
            scr_gif: Gif_view_box_channel_national_geo,
            linkTo: "#4"
        },
        {
            id: 5,
            src_img: Picture_view_box_channel_netflix,
            scr_gif: Gif_view_box_channel_netflix,
            linkTo: "#5"
        },
    ];

    const renderList = list_view_box_channel.map((index) => {
        return (
            <div className="item_box-view" key={index.id}>
                <img 
                className="img-bgr_play" 
                src={index.scr_gif} 
                alt="gif_view_box"
                loading="lazy"
                />
                <div className="box_view-chition" >
                    <Link to={index.linkTo}>
                        <img src={index.src_img} alt="image" />
                    </Link>
                </div>
            </div>
        )
    });

    return (
        <div className="render_view_box_channle">
            <div className="heading_text">
                    <MdScanner />
                    FAMOUS TV CHANNEL
                </div>
            <div className="body_tr-view">
                {renderList}
            </div>
        </div>
    )
}

export default RenderViewBoxChannle;