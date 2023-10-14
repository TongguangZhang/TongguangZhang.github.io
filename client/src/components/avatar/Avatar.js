import React from "react"
import PropTypes from "prop-types"
import avatar_image from "../../assets/avatar.png"
import "../../styles/avatar.scss"

const Avatar = ({ current_page }) => {
    const avatar_class = `avatar ${current_page}`
    const span_class = `shadow-overlay-${current_page}`

    return (
        <>
            <span className={span_class}></span>
            <img src={avatar_image} className={avatar_class} alt="avatar" />
        </>
    )
}

Avatar.propTypes = {
    current_page: PropTypes.string.isRequired,
}

export default Avatar

