import React, { useEffect } from "react"
import "../../styles/header.scss"

const Header = () => {
    const progress_width = () => {
        const start_date = new Date("2022-09-05")
        const end_date = new Date("2027-04-30")
        const current_date = new Date()
        // const rem = 10.5
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
        </div>
    )
}

export default Header

