import React from "react";
import "../Style/navbar.css"
import logo1 from "../Asset/logo1.png"
import { Link } from "react-router-dom";


const Navbar = () => {
  
  return (

      <>
      <div className="nav">
        <a className="logo-wrapper">
         <Link to="/" href="/" ><img src={logo1} loading="lazy" alt="Inesh Sekar" class="logo-name"/></Link>
        </a>
         
          <div className="nav-menu" id="nav-link">
             <div className="nav-item-child">
               <Link to="/" href="/">Home</Link>
             </div>
             <div className="nav-item-child">
              <a href="#project">Project</a>
             </div>
             <div className="nav-item-child">
             <a href="#contact">Contact</a>
             </div>
          </div>
        </div>

      </>
    );
  };

export default Navbar

