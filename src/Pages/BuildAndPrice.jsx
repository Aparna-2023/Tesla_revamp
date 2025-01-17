import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button, Col, Row } from "reactstrap"

export const BuildAndPrice = () => {
    const { id } = useParams();
    const location = useLocation();
    const car = location?.state?.car;
    const [CarDetails, setCarDetails] = useState(null);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedWheel, setSelectedWheel] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    const [carPrice, setCarPrice] = useState("")



    useEffect(() => {
        axios
            .get("/BuildAndPriceData.json")
            .then((response) => {
                const carData = response.data.find((item) => item.id === parseInt(id));
                setCarDetails(carData)
                if (carData) {
                    const basePrice = parseFloat(carData.basePrice.replace(/[^0-9.-]+/g, ""));
                    const defaultColor = carData.colors[0];
                    const defaultWheel = carData.wheels[0]?.color;

                    setSelectedColor(defaultColor);
                    setSelectedWheel(defaultWheel);

                    setCurrentImage(
                        `/images/${carData.model.toLowerCase().replace(" ", "-")}-${defaultColor.toLowerCase()}-wheel-${defaultWheel.toLowerCase()}.jpg`
                    );

                    const colorPrice = carData.priceAdditions.color[defaultColor] || 0;
                    const wheelPrice = carData.priceAdditions.wheels[defaultWheel] || 0;
                    setCarPrice(basePrice + colorPrice + wheelPrice);
                }
            })
            .catch((error) => {
                console.error("Error fetching mock data:", error);
            });
    }, [id])


    const handleColorChange = (color) => {
        setSelectedColor(color);
        const imageName = car?.model.toLowerCase().replace(" ", "-");
        setCurrentImage(`/images/${imageName}-${color.toLowerCase()}.jpg`);
        const colorPrice = CarDetails.priceAdditions.color[color] || 0;
        const wheelPrice = CarDetails.priceAdditions.wheels[selectedWheel] || 0;
        const basePrice = parseFloat(CarDetails.basePrice.replace(/[^0-9.-]+/g, ""));
        setCarPrice(basePrice + colorPrice + wheelPrice);
    };

    const handleWheelChange = (wheelColor) => {
        setSelectedWheel(wheelColor);
        if (selectedColor) {
            const imageName = car?.model.toLowerCase().replace(" ", "-");
            setCurrentImage(`/images/${imageName}-${selectedColor.toLowerCase()}-wheel-${wheelColor.toLowerCase()}.jpg`);
        }
        const colorPrice = CarDetails.priceAdditions.color[selectedColor] || 0;
        const wheelPrice = CarDetails.priceAdditions.wheels[wheelColor] || 0;
        const basePrice = parseFloat(CarDetails.basePrice.replace(/[^0-9.-]+/g, ""));
        setCarPrice(basePrice + colorPrice + wheelPrice);
    };

    return (
        <div className="build-container">
            <Row>
                <Col md={8} className="car-image">
                    {currentImage && <img src={currentImage} alt="Selected Car" className="selected-car-image" />}
                </Col>

                <Col md={4} className="car-details">
                    <h2 className="text-center">{CarDetails?.model}</h2>
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
                    </div>

                    <h5 className="color-heading">Included</h5>
                    <div className="color-selector">
                        {CarDetails?.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`color-circle ${selectedColor === color ? "selected" : ""}`}
                                style={{ backgroundColor: color.toLowerCase() }}
                                onClick={() => handleColorChange(color)}
                            ></div>
                        ))}
                    </div>
                    <div className="wheel-image-section text-center">
                        <h5 className="color-heading">Included</h5>
                        <div className="wheel-options">
                            {CarDetails?.wheels.map((wheel, index) => (
                                <div
                                    key={index}
                                    className={`wheel-option ${selectedWheel === wheel.color ? "selected" : ""}`}
                                    onClick={() => handleWheelChange(wheel?.color)}
                                >
                                    <img
                                        src={wheel?.image}
                                        alt={`${wheel.color} wheel`}
                                        className="wheel-image"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-button-wrap">
                        <h3>${carPrice}</h3>
                        <Button className="order-button">Order Now</Button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}  