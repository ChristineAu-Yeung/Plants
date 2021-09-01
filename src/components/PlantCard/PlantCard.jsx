import React from "react";
import { useState } from "react";
import UpdatePlantModal from "./UpdatePlantModal";
import "./PlantCard.scss";

const PlantCard = (props) => {
  const [plantCardHover, setPlantCardHover] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleMouseOver = () => {
    if (plantCardHover !== true) {
      setPlantCardHover(true);
    }
  };

  const handleMouseOut = (e) => {
    setPlantCardHover(false);
  };

  const updatePlantButton = () => {
    return (
      <button onClick={() => setShowModal(true)} className="updatePlantButton">
        Update Plant
      </button>
    );
  };

  return (
    <div>
      <div
        className="plantCard"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        {!showModal && plantCardHover && updatePlantButton()}
        <img
          alt=""
          className={`undraggable ${plantCardHover ? "greyscale" : ""}`}
          src={props.photo}
        />
        <div className="name unselectable">{props.name}</div>
        <div className="info">{props.info}</div>
      </div>
      <div>
        {showModal && (
          <UpdatePlantModal
            _id={props._id}
            showModal={showModal}
            setShowModal={(showModal) => setShowModal(showModal)}
          />
        )}
      </div>
    </div>
  );
};

export default PlantCard;
