import React, { useEffect } from "react"
import github_icon from "../../assets/github.png"
import linkedin_icon from "../../assets/linkedin.png"
import email_icon from "../../assets/email.png"
import "../../styles/header.scss"

const Header = () => {
    const progress_width = () => {
        const start_date = new Date("2022-09-05")
        const end_date = new Date("2027-04-30")
        const current_date = new Date()
        const progress = (current_date - start_date) / (end_date - start_date)
        return progress
    }

    useEffect(() => {
        document.documentElement.style.setProperty("--progress", `${progress_width()}`)
    }, [])

    return (
        <div id="header">
            <h1>Tong Zhang</h1>
            <div id="lines">
                <span id="lines_thick"></span>
                <span id="lines_thin"></span>
            </div>
            <h2>Engineering Student</h2>
            <div className="link-icons">
                <a href="https://github.com/TongguangZhang" target="_blank">
                    <img className="link-icon" src={github_icon} alt="github"></img>
                </a>
                <a href="https://www.linkedin.com/in/tongzh/" target="_blank">
                    <img className="link-icon" src={linkedin_icon} alt="linkedin"></img>
                </a>
                <a href="mailto:tong.zhang@uwaterloo.ca" target="_blank">
                    <img className="link-icon" src={email_icon} alt="email"></img>
                </a>
            </div>
        </div>
    )
}

export default Header
