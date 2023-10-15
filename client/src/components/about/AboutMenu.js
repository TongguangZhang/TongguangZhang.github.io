import React, { useState } from "react"
import MenuItem from "./MenuItem"
import SubData from "./SubData"
import SubHeading from "./SubHeading"
import personal_icon from "../../assets/personal.png"
import education_icon from "../../assets/education.png"
import career_icon from "../../assets/experience.png"

const AboutMenu = () => {
    const [active_menu_item, set_active_menu_item] = useState(1)
    const [active_subheading, set_active_subheading] = useState(1)

    const handle_menu_item_click = (menu_item) => {
        set_active_menu_item(menu_item)
        set_active_subheading(1)
    }

    const handle_subheading_click = (subheading) => {
        set_active_subheading(subheading)
    }

    const menu_items = ["PERSONAL", "EDUCATION", "WORK EXPERIENCE"]
    const active_menu_title = menu_items[active_menu_item - 1]

    const active_menu_icon =
        active_menu_title === "PERSONAL"
            ? personal_icon
            : active_menu_title === "EDUCATION"
            ? education_icon
            : career_icon

    const subheadings = SubData[active_menu_item]

    return (
        <>
            <div className="menu">
                {menu_items.map((item, index) => (
                    <MenuItem
                        key={index}
                        title={item}
                        active={active_menu_item === index + 1}
                        on_click={() => handle_menu_item_click(index + 1)}
                    />
                ))}
            </div>
            <div className="sub-container">
                <div className="icon-title-container">
                    <img src={active_menu_icon} alt={active_menu_title} className="about-icon" />
                    <h3>{active_menu_title}</h3>
                </div>
                {subheadings.map((subheading, index) => (
                    <SubHeading
                        key={index}
                        title={subheading.title}
                        content={subheading.content}
                        active={active_subheading === index + 1}
                        on_click={() => handle_subheading_click(index + 1)}
                        menu_item={active_menu_item}
                    />
                ))}
            </div>
        </>
    )
}

export default AboutMenu

