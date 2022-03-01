import React from "react";
// import Carousel from 'react-bootstrap/Carousel';
import Poster from '../../assets/images/poster.jpg'
import HeaderVideo from '../../assets/images/header-2.mp4'
// import Image from 'react-bootstrap/Image'
export default function Banner({ history }) {
    return(
        <>
            <div className="banner-video">
                <video
                    id="header-video"
                    className="d-block w-100 banner-image"
                    src={HeaderVideo}
                    // width="1000"
                    height="1000"
                    controls={false}
                    autoPlay={true}
                    playsInline={true}
                    preload="none"
                    loop={true}
                    muted={true}
                    poster={Poster}
                />
            </div>
        </>
        )

}