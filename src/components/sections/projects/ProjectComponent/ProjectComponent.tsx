import React from 'react'
import projectsStyle from "../projects.module.scss";
import Image from "next/image";
import ProfilePic from "./Images/profilepic.jpeg";
const ProjectComponent = (props: any) => {
    const {date, title, status, link, superfix, bg = '#ff942e', cardBg = '#fee4cb'} = props.project
  return (
    <div className={projectsStyle["project-box-wrapper"]} key = {props.key}>
    <div className={projectsStyle["project-box"]} style={{ backgroundColor: cardBg }}>
      <div className={projectsStyle["project-box-header"]}>
        <span>{date}</span>
      </div>
      <div className={projectsStyle["project-box-content-header"]}>
        <p className={projectsStyle["box-content-header"]}>{superfix}</p>
        <p className={projectsStyle["box-content-subheader"]}>{title}</p>
      </div>
      <div className={projectsStyle["box-progress-wrapper"]}>
        <p className={projectsStyle["box-progress-header"]}>{status}</p>
        <div className={projectsStyle["box-progress-bar"]}>
          <span className={projectsStyle["box-progress"]} style={{ width: '100%', backgroundColor: bg}}></span>
        </div>
        <p className={projectsStyle["box-progress-percentage"]}>100%</p>
      </div>
      <div className={projectsStyle["project-box-footer"]}>
        <div className={projectsStyle["participants"]}>
          <Image src={ProfilePic} alt="participant" />
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className={projectsStyle["days-left"]} style={{ color: bg }}>
          Go to Project
        </div></a>
      </div>
    </div>
  </div>
  )
}

export default ProjectComponent