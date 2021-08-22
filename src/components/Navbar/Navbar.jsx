import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { useEffect, useState } from 'react';
import './Navbar.scss'

function Navbar() {

	const [width, setWidth] = useState();

	useEffect(() => { 
		const updateWindowWidth = () => {
			const newWidth = window.innerWidth;
			setWidth(newWidth);
			// console.log(newWidth);
		};
		window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth) 
	}, [])

	if (width < 768) {
		return <MobileNavbar />;
	}
	else {
		return (
			<DesktopNavbar />
		)
	}
}

export default Navbar;