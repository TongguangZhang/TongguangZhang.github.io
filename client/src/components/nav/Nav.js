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

    const get_page_title = () => {
        switch (location.pathname) {
            case "/":
                return "ABOUT"
            case "/projects":
                return "PROJECTS"
            case "/skills":
                return "SKILLS"
            case "/contact":
                return "CONTACT"
            default:
                return ""
        }
    }

    const position_class = get_position_class()
    const page_title = get_page_title()

    const is_current_page = (nav_class) => {
        return nav_class === position_class
    }

    const render_nav_link = (to, img_src, alt_text, nav_class) => {
        const link_class = is_current_page(nav_class) ? "nav-link current" : "nav-link"

        return (
            <Link to={to} className={link_class}>
                <img className="icon" src={img_src} alt={alt_text} />
                {is_current_page(nav_class) && <h1 className="page-title">{page_title}</h1>}
            </Link>
        )
    }

    return (
        <nav className={`nav ${position_class}`}>
            {render_nav_link("/", about_icon, "about_icon", "nav-about")}
            {render_nav_link("/projects", projects_icon, "projects-icon", "nav-projects")}
            {render_nav_link("/skills", skills_icon, "skills_icon", "nav-skills")}
            {render_nav_link("/contact", contact_icon, "contact-icon", "nav-contact")}
        </nav>
    )
}

