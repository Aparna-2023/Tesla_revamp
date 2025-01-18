import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LayoutContainer } from '../../Components/Layouts';

export const BrowserRouterProvider = ({ children} ) => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutContainer/>}>
                    {children}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}