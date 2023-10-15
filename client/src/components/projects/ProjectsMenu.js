import React, { useState } from "react"
import classNames from "classnames"
import projects from "./ProjectsData"
import "../../styles/projectsMenu.scss"

const ProjectsMenu = () => {
    const [active_project, set_active_project] = useState(1)

    const handle_project_click = (project) => {
        set_active_project(project)
    }

    const project_items = ["WARG", "WEBCOACH", "MYBLOGS"]

    const render_content = (projects) => {
        return projects.map((project, index) => (
            <div key={index} className={`project-sub-container-${index + 1}`}>
                <img src={project.image} alt={project.title}></img>
                <div>{project.description}</div>
                <div className="link-container">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        GITHUB
                    </a>
                </div>
            </div>
        ))
    }

    return (
        <div className="project-menu">
            <div className="project-items-container">
                {project_items.map((item, index) => (
                    <div
                        key={index}
                        className={classNames("project-item", {
                            activeProject: active_project === index + 1,
                        })}
                        onClick={() => handle_project_click(index + 1)}
                    >
                        <h2 className="title">{item}</h2>
                    </div>
                ))}
            </div>
            <div className="project-sub-container">
                {render_content([projects[active_project]])}
            </div>
        </div>
    )
}

export default ProjectsMenu

