import React, { useState } from "react"
import classNames from "classnames"
import skills from "./SkillsData"
import languages_icon from "../../assets/languages.png"
import framework_icon from "../../assets/framework.png"
import tools_icon from "../../assets/tools.png"
import "../../styles/skillsMenu.scss"

const SkillsMenu = () => {
    const [active_menu_item, set_active_menu_item] = useState(1)

    const menu_items = ["LANGUAGES", "LIBRARIES", "DEV TOOLS"]

    const currentIcon =
        active_menu_item === 1
            ? languages_icon
            : active_menu_item === 2
            ? framework_icon
            : tools_icon

    const handle_menu_item_click = (menu_item) => {
        set_active_menu_item(menu_item)
    }

    const render_content = (skills) => {
        return skills.map((skill, index) => (
            <div key={index} className={`skill-sub-container-${active_menu_item}`}>
                <h3>{skill.title}</h3>
                <div className="level-container">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`level-point ${i < skill.level ? "filled" : "unfilled"}`}
                        />
                    ))}
                </div>
            </div>
        ))
    }

    return (
        <div className="skill-menu">
            {menu_items.map((item, index) => (
                <div
                    key={index}
                    className={classNames("skill-item", {
                        activeSkill: active_menu_item === index + 1,
                    })}
                    onClick={() => handle_menu_item_click(index + 1)}
                >
                    <h2 className="skill-title">{item}</h2>
                </div>
            ))}
            <img className="skill-icon" src={currentIcon} alt="current skill" />
            <div className="skill-sub-container">{render_content(skills[active_menu_item])}</div>
        </div>
    )
}
export default SkillsMenu

