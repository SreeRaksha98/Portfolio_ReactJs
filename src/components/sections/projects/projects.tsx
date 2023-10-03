import React, { useState } from 'react';
import projectsStyle from "./projects.module.scss";
import { getFormattedCurrentDate } from './util/currentDate';

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
        <div className={projectsStyle["project-box-wrapper"]}>
          <div className={projectsStyle["project-box"]} style={{ backgroundColor: '#fee4cb' }}>
            <div className={projectsStyle["project-box-header"]}>
              <span>October 01, 2023</span>
            </div>
            <div className={projectsStyle["project-box-content-header"]}>
              <p className={projectsStyle["box-content-header"]}>Web Designing</p>
              <p className={projectsStyle["box-content-subheader"]}>Prototyping</p>
            </div>
            <div className={projectsStyle["box-progress-wrapper"]}>
              <p className={projectsStyle["box-progress-header"]}>Completed</p>
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
      </div>

    </div>
  );
};

export default Projects;
