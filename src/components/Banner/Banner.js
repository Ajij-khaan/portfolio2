import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';


const Banner = () => {
    return (
        <div id="home" className="global-bg">
            <Container>
                <Row className="text-start pt-5">
                    <Col>
                        <h3 className="text-white">Hi,</h3>
                        <h1 className="text-white pt-3 ">I'M <span className="fw-bolder text-green">AJIJ KHAN.</span></h1>
                        <h1 className="text-white pt-3 fw-bolder">MERN Stack Developer</h1>
                        <div className="button">
                            <a href="https://drive.google.com/file/d/1F3N2jWk8TB3v0GFvvT6I7hXRs4wabTqf/view?usp=sharing" target="_blank">
                                <button className="mt-5 py-2 px-4 rounded-pill fw-bold">GET RESUME</button></a>
                        </div>
                    </Col>
                    <Col className="text-center" >
                        <Image src='https://i.ibb.co/2vQFKSm/3657404.png' />

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Banner;