import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}</div>
      <div id="project-list">
        {/* <div id="project-list">{projectElements}</div> */}
        {/* myprojects = (projects.name) */}
        <div>
          {projects.map(project =>{
            return (
              // <div className="d-flex align-items-center">
              //   <p className="font-weight-bold mx-5">{project.about}</p>
              //   <p>{project.name}</p>
              //   <p>{project.technologies}</p>

              // </div>
              
                <table>
                  <div>
                <h2>{project.about}</h2>
                <p>{project.name}</p>
                <span>{project.technologies}</span>

              </div>
              </table>

            )
          })}
          {/* }) */}
        </div>


      </div>
    </div>
  );
}

export default ProjectList;
