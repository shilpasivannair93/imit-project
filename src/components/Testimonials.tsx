
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";


interface Testimonial {
    id: number;
    name: string;
    image: string;
    content: string;
    stars: number;
}
const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "John",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 5
    },
    {
        id: 2,
        name: "Jane",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 4
    },
    {
        id: 3,
        name: "Anna",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 5
    },
    {
        id: 4,
        name: "Mike",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 3
    },
    {
        id: 5,
        name: "Rose",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 4
    },
    {
        id: 6,
        name: "Liam",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 5
    },
    {
        id: 7,
        name: "Ella",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 4
    },
    {
        id: 8,
        name: "Adam",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 5
    },
    {
        id: 9,
        name: "Alex",
        image: "https://via.placeholder.com/80",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        stars: 4
    }
];


const Testimonials: React.FC = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleNext = () => {
        setStartIndex((prevIndex) => Math.min(prevIndex + 3, testimonialsData.length - 3));
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => Math.max(prevIndex - 3, 0));
    };

    const renderStars = (stars: number) => {
        const filledStars = [];
        for (let i = 0; i < stars; i++) {
            filledStars.push(<FaStar key={i} style={{ color: 'gold' }} />);
        }
        return filledStars;
    };

    return (
        <div className="testimonials-container">
            <Row className="paddingNone marginNone">
                <Row className="paddingNone marginNone">
                    <Col className="paddingNone marginNone">
                        <h2 className="testimonials-header">Testimonials</h2>
                    </Col>
                </Row>
                <Row className="paddingNone marginNone">
                    <Col className="d-flex align-items-center justify-content-center paddingNone marginNone">
                        <div onClick={handlePrev} className={startIndex === 0 ? "arrow-disabled" : ""}>
                            <SlArrowLeft />
                        </div>
                    </Col>
                    {testimonialsData.slice(startIndex, startIndex + 3).map((testimonial) => (
                        <Col key={testimonial.id}>
                            <div className="testimonial-tile">
                                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                                <p className="testimonial-name">{testimonial.name}</p>
                                <p className="testimonial-content">{testimonial.content}</p>
                                <div className="testimonial-stars">{renderStars(testimonial.stars)}</div>
                            </div>
                        </Col>
                    ))}
                    <Col className="d-flex align-items-center justify-content-center paddingNone marginNone">
                        <div onClick={handleNext} className={startIndex + 3 >= testimonialsData.length ? "arrow-disabled" : ""}>
                            <SlArrowRight />
                        </div>
                    </Col>
                </Row>
            </Row>
        </div>
    );
};

export default Testimonials;