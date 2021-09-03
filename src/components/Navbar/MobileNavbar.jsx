import React, { useState } from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Button from "../Reusable/Button";
import Input from "../Reusable/Input";

function MobileNavbar(props) {
  const [mobileActive, setMobileActive] = useState(false);
  const [typesActive, setTypesActive] = useState(false);

  const { plants } = useSelector((state) => state.plants);
  const types = [];
  for (let plant of plants) {
    if (types.indexOf(plant.type.trim()) === -1) {
      types.push(plant.type.trim());
    }
  }

  function MouseOver(event) {
    event.target.style.color = "rgba(88, 117, 81, 0.938)";
  }
  function MouseOut(event) {
    event.target.style.color = "black";
  }

  return (
    <div className="mdropDown unselectable">
      <div className="mdropDownTitle">
        <FontAwesomeIcon
          onClick={() => setMobileActive(!mobileActive)}
          icon={faBars}
        />
      </div>
      <div className={`mdropDownContent ${mobileActive ? "mobileActive" : ""}`}>
        <a href="/myPlants" className="NavBarLinks">
          myPlants
        </a>
        <div onClick={() => setTypesActive(!typesActive)}>Types</div>
        <div className={`mtypesDropDown ${typesActive ? "typesActive" : ""}`}>
          {types.map((type) => {
            return (
              <a
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                key={type}
                href={`/${type}`}
              >
                {type}
              </a>
            );
          })}
        </div>
        <a href="/AllTypes" className="NavBarLinks">
          Genus
        </a>
        <Button content={"Add a Plant"} />
        <div className="mInputSearch">
          <Input placeholder={"Enter value"} />
          <Button content={"Search"} />
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
