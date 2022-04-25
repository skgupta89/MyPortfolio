import React from "react";
import "./work.css";

import covid from "../../assets/covid.jpg";
import bank from "../../assets/bank.png";
import cal from "../../assets/cal.png";
import counterapp from "../../assets/counterapp.jpg";
// import login from "../../assets/login.jpg";
import resume from "../../assets/modern.png";
import curd from "../../assets/curdapp.png";
import valid from "../../assets/valid.png";
function Work(props) {
  return (
    <div id={props.id}>
      <div className="container workdiv">
        <div className="row">
        <div className="title">
<h1>My Recent <span className="work">Work </span></h1>
        </div>
          <div className="col-lg-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img src={covid} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Covid-Live Tracker</h5>
                <p className="card-text">
                  Technology: React Js, HTML, CSS, Bootstrap,Javascript. <br />
                  <a
                    className="linkpro"
                    href="https://github.com/skgupta89/Covid-Live-Tracker-React-js-"
                  >
                    click here to open Project{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="offset-col-1 col-lg-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img src={bank} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Banking App</h5>
                <p className="card-text">
                  Technology: Javascript, HTML, CSS, Bootstrap,jQuery. <br />
                  <a
                    className="linkpro"
                    href="https://github.com/skgupta89/Banking-App"
                  >
                    click here to open Project{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="offset-col-1 col-lg-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img src={curd} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CURD(ReactJs)</h5>
                <p className="card-text">
                  Technology: React Js, HTML, CSS,Javascript,Material UI <br />
                  <a
                    className="linkpro"
                    href="https://github.com/skgupta89/employeedata"
                  >
                    click here to open Project{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="offset-col-1 col-lg-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src={counterapp}
                className="card-img-top"
                alt="..."
                width={150}
                height={132}
              />
              <div className="card-body">
                <h5 className="card-title">CounterApp </h5>
                <p className="card-text">
                  Technology: React Js, HTML, CSS, Bootstrap,Javascript. <br />
                  <a
                    className="linkpro"
                    href="https://github.com/skgupta89/CunterApp-In-React-Js"
                  >
                    click here to open Project{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="offset-col-1 col-lg-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src={cal}
                width={150}
                height={132}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Calculator</h5>
                <p className="card-text">
                  Technology:Javascript,HTML, CSS, Bootstrap,. <br />
                  <a
                    className="linkpro"
                    href="https://github.com/skgupta89/Digital-clock"
                  >
                    click here to open Project{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="offset-col-1 col-lg-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src={resume}
                width={150}
                height={132}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Resume Generator</h5>
                <p className="card-text">
                  Technology:Javascript, HTML, CSS, Bootstrap,jQuery. <br />
                  <a
                    className="linkpro"
                    href="https://github.com/skgupta89/PortFolio-Generator"
                  >
                    click here to open Project{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="offset-col-1 col-lg-3">
            <div className="card" style={{ width: "18rem;" }}>
              <img
                src={valid}
                width={150}
                height={132}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Form Validation</h5>
                <p className="card-text">
                  Technology: React Js, HTML, CSS, Bootstrap,Javascript. <br />
                  <a
                    className="linkpro"
                    href="https://github.com/skgupta89/Login-And-Sign-Up-Page-with-form-Validation"
                  >
                    click here to open Project{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
