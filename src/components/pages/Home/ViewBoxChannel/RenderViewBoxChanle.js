import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import Video_view_box_channel_disney from "../../../../assets/video_viewBox/video_viewBox_disney.mp4";
import Video_view_box_channel_marvel from "../../../../assets/video_viewBox/video_viewBox_marvel.mp4";
import Video_view_box_channel_cartoon_network from "../../../../assets/video_viewBox/video_viewBox_cartoon_network.mp4";
import Video_view_box_channel_national_geo from "../../../../assets/video_viewBox/video_viewBox_national-geo.mp4";
import Video_view_box_channel_netflix from "../../../../assets/video_viewBox/video_viewBox_netflix.mp4";


import Picture_view_box_channel_disney from "../../../../assets/photo-box/image_view_box_channel/disney.jpg";
import Picture_view_box_channel_marvel from "../../../../assets/photo-box/image_view_box_channel/marvel.png";
import Picture_view_box_channel_cartoon_network from "../../../../assets/photo-box/image_view_box_channel/cartoon_network.png";
import Picture_view_box_channel_national_geo from "../../../../assets/photo-box/image_view_box_channel/national-geographic.jpg";
import Picture_view_box_channel_netflix from "../../../../assets/photo-box/image_view_box_channel/netflix.png";

function RenderViewBoxChannle() {

    

    const list_view_box_channel = [
        {
            id :1,
            src_img : Picture_view_box_channel_disney,
            scr_video : Video_view_box_channel_disney,
            linkTo : "#"
        },
        {
            id :2,
            src_img : Picture_view_box_channel_marvel,
            scr_video : Video_view_box_channel_marvel,
            linkTo : "#"
        },
        {
            id :3,
            src_img : Picture_view_box_channel_cartoon_network,
            scr_video : Video_view_box_channel_cartoon_network,
            linkTo : "#"
        },
        {
            id :4,
            src_img : Picture_view_box_channel_national_geo,
            scr_video : Video_view_box_channel_national_geo,
            linkTo : "#"
        },
        {
            id :5,
            src_img : Picture_view_box_channel_netflix,
            scr_video : Video_view_box_channel_netflix,
            linkTo : "#"
        },
    ];

    const renderList = list_view_box_channel.map((index)=>{
        return (
            <>
                <div className="item_box-view" key={index.id}>
                    <video
                        src={index.scr_video}
                        autoPlay={"autoPlay"}
                        preload={true}
                        loop
                    />
                    <div  className="box_view-chition" >
                        <Link to={index.linkTo}>
                            <img src={index.src_img} alt="image"/>
                        </Link>
                    </div>
                </div>
            </>
        )
    })

    return (
        <div className="render_view_box_channle">
            <div class="body_tr-view">
                {renderList}
            </div>
        </div>
    )
}

export default RenderViewBoxChannle;