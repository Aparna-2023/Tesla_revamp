import { Button } from "reactstrap";
import { Link } from "react-router-dom";

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
        </>
    )
} 