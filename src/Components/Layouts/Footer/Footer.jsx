import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";

export const Footer = () => {
    return (
        <Container className="footer-container">
            <Row className="justify-content-center ">
                <Col xs="auto">
                    <Link to="" className="footer-links">Tesla &copy; 2025</Link>
                </Col>
                <Col xs="auto">
                    <Link to="" className="footer-links">Privacy & Legal </Link>

                </Col>
                <Col xs="auto">
                    <Link to="" className="footer-links">Vehicle Recalls</Link>

                </Col>
                <Col xs="auto">
                    <Link to="" className="footer-links">Contact</Link>

                </Col>
                <Col xs="auto">
                    <Link to="" className="footer-links">News</Link>

                </Col>
                <Col xs="auto">
                    <Link to="" className="footer-links">Get Updates</Link>
                </Col>
                <Col xs="auto">
                    <Link to="" className="footer-links">Locations</Link>
                </Col>
            </Row>
        </Container>
    );
};
