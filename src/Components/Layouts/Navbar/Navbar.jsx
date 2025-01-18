import { Navbar, NavbarBrand, Nav, NavItem, Collapse, NavbarToggler, Button } from "reactstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export const AppNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Navbar expand="md">
            <NavbarBrand href="/">
                <img src="/images/logo.png" alt="Tesla Logo" className="navbar-logo" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem className="nav-item">
                        <Link to="/vehicles" className="nav-link">VEHICLES</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link to="#Energy" className="nav-link">ENERGY</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link to="#Charging" className="nav-link">CHARGING</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link to="#Discover" className="nav-link">DISCOVER</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Link to="#Discover" className="nav-link">SHOP</Link>
                    </NavItem>
                    <NavItem className="nav-item">
                        <Button href="#contact" className="nav-button">SIGN IN</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};
