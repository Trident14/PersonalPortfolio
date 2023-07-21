import React from "react";
import "../Style/project.css";
import deploy from "../Asset/deploy.svg"

const Project = ({ title, description, imageUrl, altText, bgColor, fontsize, txtcolor ,urlTo}) => {
  
    
  return (
    <>
      <div className="Project-section" style={{backgroundColor:bgColor}}>
        <div className="project-text">
          <h1 style={{color: txtcolor, fontSize:fontsize}}>{title}</h1>
          <div className="project-cont">
            <h1 style={{color: txtcolor}}>{description}</h1>
          </div>
          <div className="project-view">
            <a href={urlTo}> <img src={deploy} alt="Deployment"></img></a>
          </div>
        </div>
        <div className="project-image">
          <img src={imageUrl} alt={altText} />
        </div>

      </div>
    </>
  );
};

export default Project;
