import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./About.css";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="global-bg text-white text-start pt-5">
      <div data-aos="fade-up"></div>
      <h1 id="about" className="text-center pt-5" data-aos="fade-up">
        ABOUT
      </h1>
      <Container className="" data-aos="zoom-in">
        <Row className="d-flex align-items-center">
          <Col sm={12} md={5} className="imgW">
            <Image
              src="https://i.ibb.co/TYpfwND/Du-PIC1.png"
              className=" rounded-circle"
            ></Image>
            <div className="d-done d-sm-block pb-5"></div>
          </Col>
          <Col md={1} className="d-none d-md-block">
            <div
              style={{ borderLeft: "2px solid white", height: "300px" }}
            ></div>
          </Col>
          <Col sm={12} md={6}>
            <h1>Hi There,</h1>
            <p>
              This is Ajij Khan. I am a front-end developer. I create responsive
              websites for my clients using HTML, CSS, JavaScript, React JS,
              React-Router, Bootstrap, Tailwind CSS & Material UI. Besides, I
              use Node JS, Express JS & MongoDB for backend development.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
