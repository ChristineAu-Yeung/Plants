import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Kaisa from "../Images/Kaisa.jpg";
import DropDown from "./DesktopDropDown";
import AddPlantModal from "./AddPlantModal";

function NavBar(props) {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState("");
  const { setSearchCriteria } = props;

  const checkKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearchCriteria(value);
    }
  };

  return (
    <div className="relative">
      {showModal && (
        <AddPlantModal
          showModal={showModal}
          setShowModal={(showModal) => setShowModal(showModal)}
        />
      )}
      <div>
        <Row>
          <Col>
            <div className="tempNavBar">
              <div className="leftNavBar">
                <a href="/myPlants" className="NavBarLinks">
                  myPlants
                </a>
                <DropDown />
                <a href="/AllTypes" className="NavBarLinks genusTitle">
                  Genuses
                </a>
              </div>
              <div className="rightNavBar">
                {/* {console.log(showModal)} */}
                <button
                  className="navBarButton"
                  onClick={() => setShowModal(true)}
                >
                  Add a Plant
                </button>
                <img alt="" className="avatarImage" src={Kaisa} />
                <input
                  className="navBarInput"
                  onChange={(e) => setValue(e.target.value)}
                  onKeyDown={(e) => checkKeyDown(e)}
                  placeholder="Search"
                />
                <button
                  className="navBarButton"
                  onClick={() => {
                    setSearchCriteria(value);
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default NavBar;
