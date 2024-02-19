// src/components/Footer.tsx

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowRight } from 'react-icons/bs';

const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <Container>
                <div className="first-row">
                    <div>
                        <h3 className="consultant-header">SEARCHING FOR A FIRST</h3>
                        <h3 className="consultant-question"><span className="color-white">CLASS </span>CONSULTANT?</h3>
                    </div>
                    <div>
                        <BsArrowRight className="right-arrow" size={60} />
                    </div>
                </div>
                <Row className="second-row color-white">
                    <Col md={2} xs={12}>
                        <ul>
                            <li className="footer-list color-white"><strong>Quick Links</strong></li>
                            <li className="footer-list">Home</li>
                            <li className="footer-list">About Us</li>
                            <li className="footer-list">Services</li>
                            <li className="footer-list">Clients</li>
                            <li className="footer-list">Contact Us</li>
                        </ul>
                    </Col>
                    <Col md={2} xs={12}>
                        <div>
                            <ul>
                                <li className="footer-list color-white"><strong>Services</strong></li>
                                <li className="footer-list">Air Freight</li>
                                <li className="footer-list">Sea Freight</li>
                                <li className="footer-list">Land Freight</li>
                                <li className="footer-list">Warehouse Storage</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={2} xs={12}>
                        <div>
                            <ul>
                                <li className="footer-list"></li>
                                <li className="footer-list">Door to Door</li>
                                <li className="footer-list">Airline GSSA</li>
                                <li className="footer-list">Land Freight</li>
                                <li className="footer-list">Warehouse Storage</li>
                            </ul>

                        </div>
                    </Col>
                    <Col md={2} xs={12}>
                        <div>
                            <ul>
                                <li className="footer-list color-white"><strong>Contact Info</strong></li>
                                <li className="footer-list">CONTACT@PILOTF.COM</li>
                                <li className="footer-list">+97142248673</li>
                            </ul>
                            <ul>
                                <li className="footer-list color-white"><strong>Address</strong></li>
                                <li className="footer-list">4089/ CMT BUILDING.</li>
                                <li className="footer-list">DUBAI CARGO VILLAGE,</li>
                                <li className="footer-list">DUBAI, UAE</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} xs={12}>
                        <div className="subscribe-form">
                            <label htmlFor="email" className="footer-list color-white" style={{ marginBottom: '10px' }}>Subscribe Newsletter</label>
                            <div className="input-group">
                                <input type="email" id="email" placeholder="Enter Email" className="subscribe-input marginNone" />
                                <button className="subscribe-button">Send</button>
                            </div>
                            <div className="input-group sub-gq-btn-holder">
                                <button className="subscribe-get-quote-button">Get Quote</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
