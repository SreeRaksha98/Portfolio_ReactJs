import React from 'react'
import projectsStyle from "../projects.module.scss";

const ProjectComponent = (props: any) => {
    const {date, title, status, link} = props.project
  return (
    <div className={projectsStyle["project-box-wrapper"]}>
    <div className={projectsStyle["project-box"]} style={{ backgroundColor: '#fee4cb' }}>
      <div className={projectsStyle["project-box-header"]}>
        <span>{date}</span>
      </div>
      <div className={projectsStyle["project-box-content-header"]}>
        <p className={projectsStyle["box-content-header"]}>Web Designing</p>
        <p className={projectsStyle["box-content-subheader"]}>{title}</p>
      </div>
      <div className={projectsStyle["box-progress-wrapper"]}>
        <p className={projectsStyle["box-progress-header"]}>{status}</p>
        <div className={projectsStyle["box-progress-bar"]}>
          <span className={projectsStyle["box-progress"]} style={{ width: '100%', backgroundColor: '#ff942e' }}></span>
        </div>
        <p className={projectsStyle["box-progress-percentage"]}>100%</p>
      </div>
      <div className={projectsStyle["project-box-footer"]}>
        <div className={projectsStyle["participants"]}>
          <img src="https://media.licdn.com/dms/image/D5603AQENjXzzoiDdpA/profile-displayphoto-shrink_800_800/0/1667288792114?e=1701907200&v=beta&t=mLIqbC8Nb7f_wq8SOjYUdnSF7pUvLvb4ULTf9QdEwY0" alt="participant" />
        </div>
        <div className={projectsStyle["days-left"]} style={{ color: '#ff942e' }}>
          Done
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProjectComponent