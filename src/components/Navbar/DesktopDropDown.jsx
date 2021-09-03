import { useState } from "react";
import { useSelector } from "react-redux";

function DropDown() {
  const [active, setActive] = useState(false);
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
    <div className="dropDown" onMouseLeave={() => setActive(false)}>
      <div className="dropDownTitle" onClick={() => setActive(!active)}>
        Types
      </div>
      <div className={`dropDownContent ${active ? "active" : ""}`}>
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
    </div>
  );
}

export default DropDown;
