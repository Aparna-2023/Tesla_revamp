import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

export const LandingPage = () => {
    return (
        <>
            {/* Banner */}
            <section className="banner-container">
                <div className="banner-background ">
                    <div className="banner-content">
                        <h2 className="banner-heading">MATTE BLACK TESLA MODEL S</h2>
                        <div className="banner-buttons">
                            <Button className="me-2 btn-book-ride">Book a Ride</Button>
                            <Button className="btn-reserve-now">Reserve Now</Button>
                        </div>
                    </div>
                </div>
            </section>
            {/* section-2 */}
            <section className="cybertruck-banner">
                <div className="cybertruck-container">
                    <div>
                        <img src="/images/cybertruck.png" alt="Cybertruck Logo" className="cybertruck-logo" />
                    </div>
                    <div>
                        <Button>Book a Ride</Button>
                        <Button>Learn More</Button>
                    </div>
                </div>
            </section>

            {/* section-3 */}

            <section className="tesla-banner">
                <div className="heading-container">
                    <h3 className="banner-heading">
                        THE FUTURE IS <span className="heading-highlight">AUTONOMOUS</span>
                    </h3>
                    <p className="subheading">
                        Experience <span className="subheading-highlight">Full Self-Driving</span> In Any Tesla Vehicle With A Test Drive
                    </p>
                </div>
                {/* glassmorphism */}
                <div className="cta-container">
                    <p className="cta-text">
                        Take a Supervised Demo Drive Of Tesla's Full Self Driving In Any Model
                    </p>
                    <Link to="/" className="cta-button">EXPERIENCE NOW</Link>
                </div>
            </section>
            {/* section 4 */}
            <section className="model-x-banner">
                <div className="model-x-container">
                    <div>
                        <h1 className="banner-heading">Model X</h1>
                        <h3 className="text-light">From $65,900 </h3>
                    </div>
                    <div>
                        <Button color="primary">Order Now</Button>
                        <Button color="light">Learn More</Button>
                    </div>
                </div>
            </section>
            {/* section 5 */}
            <section className="model-3-banner">
                <div className="model-x-container">
                    <div>
                        <h1 className="banner-heading">Model 3</h1>
                        <h3 className="text-light">$299/mo Leasing</h3>
                    </div>
                    <div>
                        <Button color="primary">Order Now</Button>
                        <Button color="light">Learn More</Button>
                    </div>
                </div>
            </section>
            <section className="footer-wrap">
                <Row>
                    <Col md={2} className="footer-logo">
                        <img src="/images/footer-img.png" alt="Tesla Logo" />
                    </Col>

                    <Col md={10} className="footer-text">
                        <div>
                            <p>"Driving innovation accelerating sustainability. At Tesla, we are committed to transforming the way the world moves. From cutting-edge electric vehicles to sustainable energy solutions, we empower individuals and communities to embrace a cleaner, greener future."</p>
                            <p className="text-end">Tesla - where the future moves with you</p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
} 