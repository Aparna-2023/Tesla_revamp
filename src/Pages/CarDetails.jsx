import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "reactstrap";


export const CarDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [selectedColor, setSelectedColor] = useState("");
    const [currentImage, setCurrentImage] = useState("");
    useEffect(() => {
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
            });
    }, [id]);

    const handleColorChange = (color) => {
        setSelectedColor(color);
        const imageName = car?.model.toLowerCase().replace(" ", "-");
        setCurrentImage(`/images/${imageName}-${color.toLowerCase()}.jpg`);
    };
    if (!car) {
        return <p>Loading...</p>;
    }

    return (
        <div className="car-details-container">
            {/* Car Image Section */}
            <div className="car-image">
                <img
                    src={currentImage}
                    alt={car?.model}
                    style={{ width: "100%", borderRadius: "10px" }}
                />
            </div>
            {/* Car Details Section */}
            <div className="car-details">
                <h2 className="car-model text-center">{car?.model}</h2>
                <p className="car-description">{car?.description}</p>
                <div className="features-container">
                    {car.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            {feature}
                        </div>
                    ))}
                </div>
                <ul>
                    {car.variants.map((variant, index) => (
                        <li key={index}>{variant}</li>
                    ))}
                </ul>
                <h5>Colors:</h5>
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
                    <h3 className="me-2">{car?.price}</h3>
                    <Button className="btn-reserve-now">Order Now</Button>
                </div>
            </div>
        </div>
    );
};
