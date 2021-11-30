import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import ContactInfo from '../ContactInfo/ContactInfo';

const Footer = () => {
    return (
        <div className="global-bg">
            <Container className="py-5 mt-5">
                <Row className="py-5">
                    <Col sm={4} md={4}>
                        <ContactInfo></ContactInfo>
                    </Col>
                    <Col sm={8} md={8}>
                        <Contact></Contact>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;