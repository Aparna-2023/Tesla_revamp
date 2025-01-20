import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Input, Row, Col, Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { CustomSpinner } from "../Components/Spinner/CustomSpinner";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const toggle = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/mockData.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mock data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/vehicles/${id}`);
  };

  const filteredProducts = products.filter((product) => {
    const searchresult = product.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModel = selectedModel ? product.model === selectedModel : true;
    return searchresult && matchesModel;
  });

  const handleModelSelect = (model) => {
    setSelectedModel(model);
    setDropdownOpen(false);
  };

  return (
    <div className="product-listing">
      <div className="search-bar mb-3">
        <Input
          type="text"
          name="search"
          placeholder="Search.."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="filter-dropdown">
          <DropdownToggle
            tag="i"
            title="Filter"
            className="bi bi-funnel"
            onClick={toggle}
          ></DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setSelectedModel("")}>
              All
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect("Model S")}>
              Model S
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect("Model 3")}>
              Model 3
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect("Model X")}>
              Model X
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect("Model Y")}>
              Model Y
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect("Cybertruck")}>
              Cybertruck
            </DropdownItem>
            <DropdownItem onClick={() => handleModelSelect("Roadster")}>
              Roadster
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <i className="bi bi-arrow-clockwise" title="Reset" onClick={() => setSelectedModel("")}></i>
      </div>
      {loading ? (
        <div className="spinner-wrapper">
          <CustomSpinner />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="no-data-message">No data found</div>
      ) : (
        <Row className="mt-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} md={3} className="mb-4">
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.model}
                  className="product-image"
                  onClick={() => handleClick(product.id)}
                />
                <div className="product-info">
                  <h3 className="product-model">{product.model}</h3>
                  <div className="learn-more-wrap">
                    <Link to="" className="learn-more">
                      Learn More
                    </Link>
                    <button to="" className="order-now-btn button-link" onClick={() => handleClick(product.id)}>
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}

    </div>
  );
};
