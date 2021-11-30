import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Contact from '../Contact/Contact';
import ContactInfo from '../ContactInfo/ContactInfo';

const Footer = () => {
    return (
        <div className="global-bg">
            <Container className="py-5 pt-5">
                <Row className="py-5">
                    <Col sm={4} md={5}>
                        <ContactInfo></ContactInfo>
                    </Col>
                    <Col sm={8} md={7}>
                        <Contact></Contact>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;