import { Route  } from "react-router-dom"
import { BrowserRouterProvider } from "./BrowserRouterProvider"
import { LandingPage } from "../Pages/LandingPage"
import { ProductListing } from "../Pages/ProductListing"
import { CarDetails } from "../Pages/CarDetails"
import { BuildAndPrice } from "../Pages/BuildAndPrice"

export const Routeshandler = () => {
    return (
        <BrowserRouterProvider>
            
                <Route path="/" element={<LandingPage />} />
                <Route path="/vehicles" element={<ProductListing />} />
                <Route path="/vehicles/:id" element={<CarDetails />} />
                <Route path="/vehicles/design/:id" element={<BuildAndPrice />} />
           
        </BrowserRouterProvider>
    )
}