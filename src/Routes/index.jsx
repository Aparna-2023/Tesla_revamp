import { Route  } from "react-router-dom"
import { BrowserRouterProvider } from "./BrowserRouterProvider"
import { LandingPage } from "../Pages/LandingPage"
import { ProductListing } from "../Pages/ProductListing"
import { CarDetails } from "../Pages/CarDetails"

export const Routeshandler = () => {
    return (
        <BrowserRouterProvider>
            
                <Route path="/" element={<LandingPage />} />
                <Route path="/vehicles" element={<ProductListing />} />
                <Route path="/vehicles/:id" element={<CarDetails />} />
           
        </BrowserRouterProvider>
    )
}