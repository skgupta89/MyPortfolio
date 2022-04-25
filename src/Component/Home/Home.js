import React, { useState, useEffect } from "react";
import "./Home.css";
import profile from "../../assets/profile.jpg";
// import profilebackground from "../../assets/img1.png";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import resume from '../../assets/SandeepGuptaResume.pdf'

function Home() {
  const [name, setname] = useState("Frontend Developer");
 

  useEffect(() => {
    setInterval(() => {
      if (name === "Frontend Developer") {
        setname("React Developer");
      } else if (name === "React Developer") {
        setname("Frontend Developer");
      }
      
    }, 2000);
  }, [name]);

  return (
    <>
      <div className="Container homediv">
        <div className="row homerow">
          <div className="offset-lg-1 col-lg-5 imgdiv">
            <img
              className="profileImg"
              src={profile}
              alt="profile"
              width={300}
              height={300}
            />
          </div>

          <div className="col-lg-5 intro">
            <h5> Hello, my name is</h5>
            <h1>
              {" "}
              <span>Sandeep Gupta</span>
            </h1>
            <h4>
              {" "}
              And I'm a <span className="work"> {name} </span>
            </h4>
            <p>
            I'm an Software developer with excellent problem solving skills and ability to perform well in a team.Passionate about coding and developing challenging projects.
            </p>

            <a href={resume} target='_blank' rel="noreferrer" download>
            <button className=" btn btn-primary shadow-lg p-2 px-5  rounded " >
            <DownloadForOfflineIcon className="mx-2" />
               Download Resume
            </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
