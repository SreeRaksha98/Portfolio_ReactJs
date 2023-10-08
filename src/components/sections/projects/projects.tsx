import React, { useState } from 'react';
import projectsStyle from "./projects.module.scss";
import { getFormattedCurrentDate } from './util/currentDate';
import ProjectComponent from "./ProjectComponent/ProjectComponent"
import {MyProjectList} from "./MyProjects"

const Projects: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const handleViewChange = (newView: 'grid' | 'list') => {
    setView(newView);
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  const toggleMessagesSection = () => {
    const messagesSection = document.querySelector('.messages-section');
    if (messagesSection) {
      messagesSection.classList.toggle('show');
    }
  };

  
  return (
    <div className={projectsStyle["projects-section"]}>
      <div className={projectsStyle["projects-section-header"]}>
        <p>Projects</p>
        <p className={projectsStyle.time}>{getFormattedCurrentDate()}</p>
      </div>
      <div className={projectsStyle["projects-section-line"]}>
        <div className={projectsStyle["projects-status"]}>
          <div className={projectsStyle["item-status"]}>
            <span className={projectsStyle["status-number"]}>2</span>
            <span className={projectsStyle["status-type"]}>In Progress</span>
          </div>
          <div className={projectsStyle["item-status"]}>
            <span className={projectsStyle["status-number"]}>24</span>
            <span className={projectsStyle["status-type"]}>Upcoming</span>
          </div>
          <div className={projectsStyle["item-status"]}>
            <span className={projectsStyle["status-number"]}>62</span>
            <span className={projectsStyle["status-type"]}>Total Projects</span>
          </div>
        </div>
        <div className={projectsStyle["view-actions"]}>
          <button
            className={`${projectsStyle["view-btn"]} ${projectsStyle["list-view"]} ${view === 'list' ? projectsStyle["active"] : ''}`}
            title="List View"
            onClick={() => handleViewChange('list')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={projectsStyle["feather"]}>
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button
            className={`${projectsStyle["view-btn"]} ${projectsStyle["grid-view"]} ${view === 'grid' ? projectsStyle.active : ''}`}
            title="Grid View"
            onClick={() => handleViewChange('grid')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={projectsStyle["feather"]}>
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${projectsStyle["project-boxes"]} jsGridView ${view==='grid'?projectsStyle["jsGridView"]:''}`}>
        {/* each box */}
        {MyProjectList.map( (project, key) => { return <ProjectComponent project = {project} key = {key} />})}
      </div>

    </div>
  );
};

export default Projects;
