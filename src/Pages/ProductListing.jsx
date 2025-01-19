import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Input, Row, Col } from "reactstrap";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/mockData.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching mock data:", error);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/vehicles/${id}`);
  };

  const filteredProducts = products.filter((product) =>
    product.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      </div>
      {filteredProducts.length === 0 ? (
        <div className="no-data-message">No data found</div>
      ) : (
        <Row className="mt-4">
          {filteredProducts.map((product) => (
            <Col key={product.id} md={3} className="mb-4">
              <div
                className="product-card"
              >
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
