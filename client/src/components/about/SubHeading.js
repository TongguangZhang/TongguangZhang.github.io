import React from "react"
import classNames from "classnames"
import "../../styles/aboutMenu.scss"

const SubHeading = ({ title, content, active, on_click, menu_item }) => {
    const sub_container_class = `sub-container-${menu_item}`
    return (
        <div className={classNames(sub_container_class, { "active-subheading": active })}>
            <h3 onClick={on_click}>{title}</h3>
            <div className="p-container">{content}</div>
        </div>
    )
}

export default SubHeading

