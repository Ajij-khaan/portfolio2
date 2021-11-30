import React, { useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
        AOS.init(({ duration: 2000 }));

    }, [])

    return (
        <div id="home" className="global-bg">
            <Container>
                <Row className="text-start pt-5">
                    <Col sm={12} md={6}>
                        <h3 className="text-white" data-aos="zoom-in-right">Hi,</h3>
                        <h1 className="text-white pt-3" data-aos="zoom-in-right">I'M <span className="fw-bolder text-green">AJIJ KHAN.</span></h1>
                        <h1 className="text-white pt-3 fw-bolder" data-aos="zoom-in-right">MERN Stack Developer</h1>
                        <div className="button">
                            <a href="https://drive.google.com/file/d/1F3N2jWk8TB3v0GFvvT6I7hXRs4wabTqf/view?usp=sharing" target="_blank">
                                <button className="mt-5 py-2 px-4 rounded-pill fw-bold" data-aos="zoom-in-right pb-5">GET RESUME</button></a>
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="text-center imgW" data-aos="zoom-in-left">
                        <div className="d-done d-sm-block pb-5"></div>
                        <img src='https://i.ibb.co/2vQFKSm/3657404.png' />

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Banner;