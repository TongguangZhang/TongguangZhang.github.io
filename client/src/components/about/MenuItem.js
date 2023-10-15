import React from "react"
import classNames from "classnames"
import "../../styles/aboutMenu.scss"

const MenuItem = ({ title, active, on_click }) => {
    return (
        <div className={classNames("item", { active })} onClick={on_click}>
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default MenuItem

