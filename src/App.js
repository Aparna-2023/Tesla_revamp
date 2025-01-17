import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppNavbar } from "./Components/Navbar/Navbar";
import { LandingPage } from "./Pages/LandingPage";
import { ProductListing } from "./Pages/ProductListing";
import { CarDetails } from "./Pages/CarDetails";
import "./App.css";


function App() {
  return (
    <>
      <Router>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/vehicles" element={<ProductListing />} />
          <Route path="/vehicles/:id" element={<CarDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
