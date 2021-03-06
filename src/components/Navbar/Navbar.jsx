import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useState } from "react";
import "./Navbar.scss";

function Navbar(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const { setSearchCriteria } = props;

  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  if (width < 768) {
    return <MobileNavbar setSearchCriteria={setSearchCriteria} />;
  } else {
    return <DesktopNavbar setSearchCriteria={setSearchCriteria} />;
  }
}

export default Navbar;
