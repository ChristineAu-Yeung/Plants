import React, { useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import Input from "../Button/Input";

function MobileDropdown(props) {
  const [active, setActive] = useState(false);

  return (
    <div className="mdropDown">
      <div className="mdropDownTitle">
        <FontAwesomeIcon onClick={() => setActive(!active)} icon={faBars} />
      </div>
      <div className={`mdropDownContent ${active ? "active" : ""}`}>
        <div href="/Types">Types</div>
        <div href="/Genus">Genus</div>
        <Button className="mButton" name={"Add a Plant"} />
        <div className="mInputSearch">
          <Input placeholder={"Enter value"} />
          <Button name={"Search"} />
        </div>
      </div>
    </div>
  );
}

export default MobileDropdown;
