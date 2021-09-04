import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import plantsActions from "../../redux/actions/plants.action";

function DropDown() {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(plantsActions.getAllTypes());
  }, []);

  let { types } = useSelector((state) => state.plants);

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
