import { Row, Col } from "reactstrap";

export const FeatureModal = ({ image, description }) => {
    return (
        <div className="feature-modal-content">
            <Row>
                <Col md={6} className="feature-image">
                    <img src={image} alt="Car" style={{ width: "100%" }} />
                </Col>
                <Col md={6} className="feature-description">
                    <h3>Car Features</h3>
                    <p>{description}</p>
                </Col>
            </Row>
        </div>
    );
};
