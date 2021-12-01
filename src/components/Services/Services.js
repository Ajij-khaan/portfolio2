
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init(({ duration: 3000 }));
    }, [])

    const { serviceId } = useParams();
    console.log(serviceId);

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [serviceId])

    const myService = services.find(service => service.id === parseInt(serviceId));

    return (
        <div className="global-bg">
            <Header></Header>
            <h1 id="projects" className="fw-bolder text-white text-uppercase pt-5" data-aos="zoom-in-down">Project Details</h1>
            <Container >
                <Row className="d-flex align-items-center py-5">
                    <Col xs={12} sm={12} md={6} lg={6} className="imgSize">
                        <img src={myService?.imgUrl} className="" data-aos="zoom-in-down" />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className="text-start " data-aos="zoom-in-up">
                        <h1 className="text-white fw-bold ">{myService?.name}</h1>
                        <h5 className="text-white ">{myService?.tagline}</h5>
                        <p className="text-white mt-5">• {myService?.bullet1}</p>
                        <p className="text-white">• {myService?.bullet2}</p>
                        <p className="text-white">• {myService?.bullet3}</p>
                        <p className="text-white"> <span className="fw-bold text-green">Technologies: </span>{myService?.technoligies}</p>
                        <Row className="mt-5">
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="d-sm-block d-md-block pt-3"></div>
                                <button className="btn bg-green rounded-pill"> <a className="w-100 bg-green px-4 text-dark fw-bold rounded-pill py-2 text-decoration-none" href={myService?.live} target="_blank">Live Site</a></button>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="d-sm-block d-md-block pt-3"></div>
                                <button className="btn bg-green rounded-pill "> <a className="w-100 bg-green px-4 text-dark fw-bold rounded-pill py-2 text-decoration-none" href={myService?.githubClient} target="_blank">Client Code</a></button>
                            </Col>
                            <Col xs={12} sm={12} md={4} lg={4}>
                                <div className="d-sm-block d-md-block pt-3"></div>
                                <button className="btn bg-green rounded-pill "> <a className="w-100 bg-green px-4 text-dark fw-bold rounded-pill py-2 text-decoration-none" href={myService?.githubServer} target="_blank">Server Code</a></button>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row>
                    <h1 id="projects" className="fw-bolder text-white text-uppercase pt-5" data-aos="zoom-in-down">More Screenshot</h1>
                </Row>
                <Row className="imgSize">
                    <Col xs={12} sm={12} md={4} lg={4} className="mt-3"><Image src={myService?.ss1} /></Col>
                    <Col xs={12} sm={12} md={4} lg={4} className="mt-3"><Image src={myService?.ss2} /></Col>
                    <Col xs={12} sm={12} md={4} lg={4} className="mt-3"><Image src={myService?.ss3} /></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div >
    );
};

export default Services;

