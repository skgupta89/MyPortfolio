import React from "react";
import "./about.css";

function About() {
  return (
    <>
      <div className="about container">
        <div className="row ">
          <div className="aboutme">
            <h1>About <span>Me </span></h1>
          </div>
          <div className="col-lg-5 aboutinfo">
            <h3>
              {" "}
              Name: <span className="name">Sandeep Gupta</span>
            </h3>
            <h3>
              {" "}
              Age: <span className="name">26</span>
            </h3>
            <h3>
              {" "}
              Qualification: <span className="name">BE</span>
            </h3>
            <h3>
              {" "}
              Post: <span className="name">React Developer</span>
            </h3>
            <h3>
              {" "}
              Language: <span className="name">English, Marathi, Hindi</span>
            </h3>
          </div>
          <div className="offset-lg-1 col-lg-5 aboutinfo" >
          <h3>
              {" "}
              Website: <span className="name"></span>
            </h3>
            <h3>
              {" "}
              Email: <span className="name">skgupta8909@gmail.com</span>
            </h3>
            <h3>
              {" "}
              City: <span className="name">Pune</span>
            </h3>
           
          </div>
         
        </div>
      </div>
    </>
  );
}

export default About;
