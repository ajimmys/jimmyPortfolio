import React from "react";

export default function WorkHistoryContainer(props) {
    let counter = 1
    return(<ul className="workHistory">
        {props.projects.map(project => {
            let classID = counter%2===0 ? "project even" : "project odd"
            counter++;
            return (
                <li key={project.title}>
                    <div className="title">
                        <a target="_blank" rel="noopener noreferrer" href={project.link}>
                            {project.title}
                        </a>
                    </div>
                    <div className={classID}>
                        <span className="description"> {project.description} </span>
                        <a target="_blank" rel="noopener noreferrer" href={project.link}>
                            <img className="picture" src={`../img/${project.image}.png`} alt={project.title}/>
                        </a>
                    </div>
                </li>
            );
        })}
    </ul>);
}

