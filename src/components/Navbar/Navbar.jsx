import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import './Navbar.scss'

function Navbar() {

	if (window.innerWidth < 768) {
		return <MobileNavbar />;
	}
	else {
		return (
			<DesktopNavbar />
		)
	}
}

export default Navbar;