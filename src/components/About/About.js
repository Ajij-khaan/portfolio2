import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div className="global-bg text-white text-start pt-5">
            <h1 id="about" className="text-center pt-5">ABOUT</h1>
            <Container className="">
                <Row className="d-flex align-items-center">
                    <Col md={5}>
                        <Image src="https://i.ibb.co/TYpfwND/Du-PIC1.png" className=" rounded-circle"></Image>
                    </Col>
                    <Col md={1}>
                        <div style={{ borderLeft: '2px solid white', height: '300px' }}></div>
                    </Col>
                    <Col md={6}>

                        <h1>Wanna Know me?</h1>
                        <p>Hi, This is Ajij Khan. I am a front-end developer. I create responsive websites for my clients using HTML, CSS, JavaScript, React JS, React-Router, Bootstrap, Tailwind CSS & Material UI. Besides, I use Node JS, Express JS & MongoDB for backend development.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;