// About.tsx

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import aboutusImg from '../assets/about-us.png';
import serviceImg1 from '../assets/service-img1.png';
import serviceImg2 from '../assets/service-img2.png';
import serviceImg3 from '../assets/service-img3.png';
import serviceImg4 from '../assets/service-img4.png';

const About = () => {
    return (
        <div className="about-container">
            <Row className="paddingNone marginNone">
                <Col md={2} className="about-us-bg-container">

                </Col>
                <Col md={2} className="paddingNone about-us-bg-image-holder">
                    <img className="about-us-bg-image" src={aboutusImg} />
                </Col>
                <Col md={7} className="about-text">
                    <div>
                        <span className="about-us-text">ABOUT US</span>
                        <h3>Lorem Ipsum is simply dummy</h3>
                        <p>
                            Pilot Freight LLC is an augmenting global organization providing General Sales and Services to Airlines globally. As a privately owned independent GSSA, we have established partnership with over eight airlines across 70+ countries. With our comprehensive range of time-definite, guaranteed and cost-saving options, Pilot Freight LLC can meet your air freight requirements with reliability and professionalism. We are professional cargo management team servicing the airline and aviation community since 2015. We also handle the transshipment across the world. Pilot Freight LLC is currently ranked among one of the Top 10 Air freight agents in Duba. UAE. Having headquarters at Dubai, U.A.E., we act as an International Service provider offering a complete range of logistics & Integrated Supply Chain Solutions.
                        </p>
                        <div className="client-details">
                            <Row>
                                <Col sm={4}>
                                    <div className="client-info">
                                        <span className="count">25<span className="about-us-plus">+</span></span>
                                        <span className="about-us-count-txt">YEARS OF EXPERIENCE</span>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="client-info">
                                        <span className="count">12K<span className="about-us-plus">+</span></span>
                                        <span className="about-us-count-txt">TRUSTED CLIENTS</span>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="client-info">
                                        <span className="count">30<span className="about-us-plus">+</span></span>
                                        <span className="about-us-count-txt">HONORS & AWARDS</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <Container className="about-us-offer-container">
                <span className="text-orange-color">
                    WHAT WE OFFER
                </span>
                <h2>
                    Our Comprehensive suite of service includes...
                </h2>
            </Container>
            <Row className="paddingNone marginNone">
                <div style={{ width: '30%', padding: 0 }}>
                    <img src={serviceImg1} alt="Service 1" style={{ width: '100%', height: '200px', padding: 0, cursor: 'pointer' }} />
                    <img src={serviceImg2} alt="Service 2" style={{ width: '100%', height: '200px', padding: 0, cursor: 'pointer' }} />
                    <img src={serviceImg3} alt="Service 3" style={{ width: '100%', height: '200px', padding: 0, cursor: 'pointer' }} />
                </div>
                <div style={{ width: '70%', padding: 0 }}>
                    <img src={serviceImg4} alt="Service 4" style={{ width: '100%', height: '600px', padding: 0, cursor: 'pointer' }} />
                </div>
            </Row>
        </div>
    );
};

export default About;
