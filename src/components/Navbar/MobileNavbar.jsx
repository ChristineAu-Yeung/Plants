import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import MobileDropdown from "./MobileDropdown";
import "./Navbar.scss";

function MobileNavbar({ setSearchCriteria }) {
  const [active, setActive] = useState(false);

  return (
    <Row>
      <Col>
        <div onClick={() => setActive(!active)}>Hamburger</div>
        {console.log(active)}
        <div className={`mdropDownContent ${active ? "active" : ""}`}>
          <div href="/myPlants">myPlants</div>
          <div href="/Genus">Genus</div>
          <input href="/Search" />
          <button className="navBarButton">Search</button>
        </div>
      </Col>
    </Row>
  );
}

export default MobileNavbar;
