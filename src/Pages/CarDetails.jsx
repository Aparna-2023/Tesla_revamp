import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Row, Col } from "reactstrap";
import { ModalContainer } from "../Components/Modal/ModalContainer";
import { FeatureModal } from "./FeatureModal";
import { CustomSpinner } from "../Components/Spinner/CustomSpinner";

export const CarDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [selectedColor, setSelectedColor] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .get("/mockData.json")
            .then((response) => {
                const carData = response.data.find((item) => item.id === parseInt(id));
                setCar(carData);
                setSelectedColor(carData?.colors[0]);
                setCurrentImage(carData?.image);
            })
            .catch((error) => {
                console.error("Error fetching car details:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        const imageName = car?.model.toLowerCase().replace(" ", "-");
        setCurrentImage(`/images/${imageName}-${color.toLowerCase()}.jpg`);
    };

    const handleBuildAndPrice = () => {
        navigate(`/vehicles/design/${car.id}`, { state: { car } });
    };

    if (loading) {
        return (
            <div className="loading-container">
                <CustomSpinner />
            </div>
        );
    }

    if (!car) {
        return <p>Car details not found.</p>;
    }

    return (
        <div className="car-details-container">
            <Row>
                <Col md={8} className="car-image">
                    <img src={currentImage} alt={car?.model} />
                </Col>
                <Col md={4} className="car-details">
                    <h2 className="text-center">{car?.model}</h2>
                    <div className="features-container">
                        <div>
                            <h5 className="feature-item">{car?.range}</h5>
                            <p className="feature-name">Range (est.)</p>
                        </div>
                        <div>
                            <h5 className="feature-item">{car?.top_speed}</h5>
                            <p className="feature-name">Top Speed</p>
                        </div>
                        <div>
                            <h5 className="feature-item">{car?.mph}</h5>
                            <p className="feature-name">0-60 mph</p>
                        </div>
                    </div>
                    <div className="features-wrap">
                        {car.features.map((feature, index) => (
                            <div key={index} className="features">{feature}</div>
                        ))}
                    </div>
                    <div className="lease-purchase">
                        <p>
                            Lease purchase option available.{" "}
                            <span className="car-description">See More</span>
                        </p>
                        <p>{car?.lease_purchase}</p>
                        <p>Include est. incentives of $7,500 and 5-year</p>
                        <p>gas savings of $5,000</p>
                        <p className="car-description">Edit Terms & Savings</p>
                        <button className="feature-btn" onClick={() => setIsOpen(true)}>Feature Details</button>
                    </div>
                    <h5 className="color-heading">Included</h5>
                    <div className="color-selector">
                        {car?.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`color-circle ${selectedColor === color ? "selected" : ""}`}
                                style={{ backgroundColor: color.toLowerCase() }}
                                onClick={() => handleColorChange(color)}
                            ></div>
                        ))}
                    </div>
                    <div className="order-button-wrap">
                        <h3>{car?.price}</h3>
                        <Button className="order-button" onClick={handleBuildAndPrice}>Build and Price</Button>
                    </div>
                </Col>
            </Row>
            <ModalContainer isOpen={isOpen} setIsopen={setIsOpen} title="">
                <FeatureModal
                    image={car?.image}
                    description={car?.description} />
            </ModalContainer>
        </div>
    );
};
