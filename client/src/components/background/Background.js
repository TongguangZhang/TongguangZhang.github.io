import React from "react"
import "../../styles/background.scss"
import background_video from "../../assets/background.mp4"
import background_fallback from "../../assets/background_fallback.png"

const Background = () => {
    return (
        <>
            <div className="shadow-overlay"></div>
            <video
                playsInline
                autoPlay
                muted
                loop
                preload="auto"
                id="bg"
                poster={background_fallback}
            >
                <source src={background_video} type="video/mp4" />
            </video>
        </>
    )
}

export default Background

