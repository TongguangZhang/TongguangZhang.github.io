import React, { Component } from "react"
import { Link, useLocation } from "react-router-dom"
import "./nav.scss"
import about_icon from "../../assets/about.png"
import projects_icon from "../../assets/projects.png"
import skills_icon from "../../assets/skills.png"
import contact_icon from "../../assets/contact.png"

export default function Nav() {
    const location = useLocation()
    const get_position_class = () => {
        switch (location.pathname) {
            case "/":
                return "nav-about"
            case "/projects":
                return "nav-projects"
            case "/skills":
                return "nav-skills"
            case "/contact":
                return "nav-contact"
            default:
                return ""
        }
    }

    const position_class = get_position_class()

    const render_nav_link = (to, img_src, name, nav_class) => {
        const nav_item_class = position_class === nav_class ? "nav-item current" : "nav-item"
        return (
            <div>
                <Link to={to} className={nav_item_class}>
                    <img className="icon" src={img_src} alt={name} />
                    <h1>{name}</h1>
                </Link>
            </div>
        )
    }

    return (
        <nav className={`nav ${position_class}`}>
            {render_nav_link("/", about_icon, "ABOUT", "nav-about")}
            {render_nav_link("/projects", projects_icon, "PROJECTS", "nav-projects")}
            {render_nav_link("/skills", skills_icon, "SKILLS", "nav-skills")}
            {render_nav_link("/contact", contact_icon, "CONTACT", "nav-contact")}
        </nav>
    )
}

