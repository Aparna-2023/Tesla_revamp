import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input, InputGroup } from "reactstrap";

export const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const navigate = useNavigate();

  // Fetch data from mockData.json
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

  const handleCarClick = (id) => {
    navigate(`/vehicles/${id}`);
  };

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.model.toLowerCase().includes(searchQuery.toLowerCase()) // Match the search query with product model (case-insensitive)
  );

  return (
    <div className="product-listing">
      <div>
        <InputGroup>
          <Input
            type="text"
            name="search"
            placeholder="Search.."
            className="form-control"
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </InputGroup>
      </div>
      <div className="product-cards">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCarClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.model}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-model">{product.model}</h3>
              <div className="price-wrap">
                <p className="product-price">{product.price}</p>
                <button className="view-details-button">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
