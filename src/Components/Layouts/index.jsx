import { AppNavbar } from "./Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import { Footer } from "./Footer/Footer";


export const LayoutContainer = () => {
    return (
		<>
			<AppNavbar />
			<div>
				<Outlet />
			</div>
			<Footer />
		</>
	);
} 