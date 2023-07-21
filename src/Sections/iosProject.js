import React from "react";
import "../Style/IosProject.css";
import { Link } from "react-router-dom";
const IosProject = ({ title, description, imageUrl, fontColor,bgColor,fontsize,LinkTo,flag }) => {
 
  return (
    <>
      <div className="Project-section-ios" style={{backgroundColor: bgColor, backgroundImage: `url(${imageUrl})`, backgroundPositionY:flag }}>
      <Link to={LinkTo} className="link-class">
          <div className="project-text-ios">
            <h1 style={{color: fontColor}}>{title}</h1>
            <div className="project-cont-ios">
              <h1 style={{color:fontColor}}>{description}</h1>
            
            </div>
          </div>
        </Link>
       
      </div>
    </>
  );
};

export default IosProject;
