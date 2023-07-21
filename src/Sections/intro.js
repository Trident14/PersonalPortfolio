import React from "react";
import "../Style/introduction.css"
import MainPic from "../Asset/MainPic.png"

const Introduction = () => {
  return (
    <>
      <div className="main-container">
                <div className="text-contianer">
                        <h1>Hello, Iam</h1> 
                        <h1 className="spl">Inesh Sekar</h1>
                        <h1>Techie, Developer </h1>

                </div>
                <div className="Photo">
                <h1 className="spl">
                  <img src={MainPic} alt="inesh sekar"></img>
                </h1>
                </div>
            </div>
    </>
  );
};

export default Introduction;
