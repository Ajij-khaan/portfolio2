import React from "react";
import { ProgressBar } from "react-bootstrap";

const Skills = () => {
  return (
    <div className=" global-bg">
      <div className="container">
        <h1
          id="projects"
          className="fw-bolder text-white text-uppercase py-5"
          data-aos="zoom-in-down"
        >
          My Skills
        </h1>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="row mt-3">
              <div className="col-3 text-white text-center">HTML</div>
              <div className="col-9 mt-1">
                <ProgressBar now={90} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3 text-white text-center">CSS</div>
              <div className="col-9 mt-1">
                <ProgressBar now={88} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3 text-white text-center">JS</div>
              <div className="col-9 mt-1">
                <ProgressBar now={80} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3 text-white text-center">PHOTOSHOP</div>
              <div className="col-9 mt-1">
                <ProgressBar now={70} />
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6">
            <div className="row mt-3">
              <div className="col-3 text-white text-center">REACT</div>
              <div className="col-9 mt-1">
                <ProgressBar now={85} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3 text-white text-center">EXPRESS JS</div>
              <div className="col-9 mt-1">
                <ProgressBar now={70} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3 text-white text-center">MONGODB</div>
              <div className="col-9 mt-1">
                <ProgressBar now={50} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-3 text-white text-center">ILLUSTRATOR</div>
              <div className="col-9 mt-1">
                <ProgressBar now={90} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="container row d-flex justify-content-center global-bg g-2">
    //   <div className="col-12 col-sm-12 col-md-6 ">
    //     <div className="text-white d-flex justify-content-center align-items-center mt-2">
    //       <p>HTML</p>
    //       <ProgressBar now={60} className="ms-3 w-50" />
    //     </div>
    //     <div className="text-white d-flex justify-content-center align-items-center mt-2">
    //       <p>HTML</p>
    //       <ProgressBar now={60} className="ms-3 w-50" />
    //     </div>
    //     <div className="text-white d-flex justify-content-center align-items-center mt-2">
    //       <p>HTML</p>
    //       <ProgressBar now={60} className="ms-3 w-50" />
    //     </div>
    //   </div>
    //   <div className="col-12 col-sm-12 col-md-6 ">
    //     <div className="text-white d-flex justify-content-center align-items-center mt-2">
    //       <p>HTML</p>
    //       <ProgressBar now={60} className="ms-3 w-50" />
    //     </div>
    //     <div className="text-white d-flex justify-content-center align-items-center mt-2">
    //       <p>HTML</p>
    //       <ProgressBar now={60} className="ms-3 w-50" />
    //     </div>
    //     <div className="text-white d-flex justify-content-center align-items-center mt-2">
    //       <p>HTML</p>
    //       <ProgressBar now={60} className="ms-3 w-50" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skills;
