import React from 'react';
import { Container, Row, Col, Button, Carousel, Dropdown } from 'react-bootstrap';
import { FaPlay, FaFacebookF, FaInstagram } from 'react-icons/fa';
import carImg from '../assets/carImg.jpg';
import serImg from '../assets/service-delivery.png';
import gssa1 from '../assets/gssa1.png'
import gssa2 from '../assets/gssa2.png'
import gssa3 from '../assets/gssa3.png'
import gssa4 from '../assets/gssa4.png'
import gssa5 from '../assets/gssa5.png'

const Services: React.FC = () => {
    return (
        <div className="service-holder">
            <Container>
                <Row className="paddingNone marginNone">
                    <Col md={5} xs={12} className="paddingNone marginNone">
                        <h1>A PARTNERSHIP BASED ON TRUST</h1>
                    </Col>
                    <Col md={7} xs={12} className="paddingNone marginNone">
                        <div className="button-container">
                            <Button className="sv-srv-btn">Our Services</Button>
                            <Button className="sv-cnt-btn">Contact Us</Button>
                        </div>
                    </Col>
                </Row>
                <Row className="paddingNone marginNone">
                    <Col xs={12} className="paddingNone marginNone">
                        <Carousel>
                            <Carousel.Item>
                                <div className="carousel-item-content">
                                    <img src={carImg} alt="Slide 1" className="car-image" />
                                    <Button className="watch-video-btn">
                                        <FaPlay className="play-icon" /> Watch Video
                                    </Button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item-content">
                                    <img src={carImg} alt="Slide 1" className="car-image" />
                                    <Button className="watch-video-btn">
                                        <FaPlay className="play-icon" /> Watch Video
                                    </Button>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className="carousel-item-content">
                                    <img src={carImg} alt="Slide 1" className="car-image" />
                                    <Button className="watch-video-btn">
                                        <FaPlay className="play-icon" /> Watch Video
                                    </Button>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                        <div className="follow-us">
                            <span>Follow Us</span>
                            <div className="social-icons">
                                <FaFacebookF className="srv-crs-icon" />
                                <FaInstagram className="srv-crs-icon" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ padding: '50px 0px' }}>
                    <h1>Services</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusry's standard dummy text ever since the 1500.</p>
                </Row>
                <Row className="paddingNone marginNone">
                    <div className="dropdown-container">
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="secondary">
                                Door To Door
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="secondary">
                                Airline GSSA
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="secondary">
                                Air Freight
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="secondary">
                                Sea Freight
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="secondary">
                                Land Freight
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="secondary">
                                Warehouse Storage
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="secondary">
                                Air Charter
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="secondary">
                                Dangerous Goods
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Action</Dropdown.Item>
                                <Dropdown.Item>Another action</Dropdown.Item>
                                <Dropdown.Item>Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Row>
                <Row style={{ padding: '50px 0px' }}>
                    <Col xs={12} md={4}>
                        <img src={serImg} alt="" style={{ width: '100%', height: '400px', borderRadius: '22px' }} />
                    </Col>
                    <Col xs={12} md={8}>
                        <h1>Door to Door</h1>
                        <p>One of the specialities of Pilot Frieght LLC is Door TO Door Cargo Service from Dubai to rest of the world. We have a professional team who packs your items with utmost care. We at Pilot Frieght manage your shipmeny every step of the way from your premises to wherever in the world. We at Pilot Freight manage your shipment right from picking up the cargo from your door and delivering to the customer door. Our team plans the most reliable and cost effective solutions to handle door to door shippment.</p>
                        <Button className="sv-srv-btn">Our Services</Button>
                    </Col>
                </Row>
                <Row style={{ padding: '50px 0px' }}>
                    <Col xs={12} md={12}>
                        <h1 className="text-center">Airline GSSA</h1>
                    </Col>
                </Row>
                <Row className="paddingNone marginNone">
                    {/* Five columns for images */}
                    <Col xs={2} className="paddingNone marginNone">
                        <img src={gssa1} alt="Image 1" className="img-fluid" />
                    </Col>
                    <Col xs={2} className="paddingNone marginNone">
                        <img src={gssa2} alt="Image 2" className="img-fluid" />
                    </Col>
                    <Col xs={2} className="paddingNone marginNone">
                        <img src={gssa3} alt="Image 3" className="img-fluid" />
                    </Col>
                    <Col xs={2} className="paddingNone marginNone">
                        <img src={gssa4} alt="Image 4" className="img-fluid" />
                    </Col>
                    <Col xs={2} className="paddingNone marginNone">
                        <img src={gssa5} alt="Image 5" className="img-fluid" />
                    </Col>
                    <Col xs={2} className="paddingNone marginNone">
                        <img src={gssa1} alt="Image 5" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;
