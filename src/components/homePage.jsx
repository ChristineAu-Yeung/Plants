import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlantCard from "./PlantCard/PlantCard";
import plantsActions from "../redux/actions/plants.action";

function HomePage(props) {
  const dispatch = useDispatch();
  let { plants } = useSelector((state) => state.plants);
  const { searchCriteria } = props;

  if (searchCriteria !== "") {
    plants = plants.filter((plant) => {
      return plant.name.includes(searchCriteria);
    });
  }

  useEffect(() => {
    setInterval(() => {
      dispatch(plantsActions.getPlants());
    }, 60000);
  }, []);

  useEffect(() => {
    dispatch(plantsActions.getPlants());
  }, []);

  const getHomepagePlants = () => {
    const plantNumber = plants.length;
    const plantThird = Math.ceil(plantNumber / 3);

    return (
      <div>
        <div className={"flexyRow"}>
          <div>
            {plants.map((plant, index) => {
              if (index < plantThird) {
                return (
                  <PlantCard
                    _id={plant._id}
                    key={plant.name}
                    name={plant.name}
                    photo={plant.photos[0]}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <div>
            {plants.map((plant, index) => {
              if (index >= plantThird && index < 2 * plantThird) {
                return (
                  <PlantCard
                    _id={plant._id}
                    key={plant.name}
                    name={plant.name}
                    photo={plant.photos[0]}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
          <div>
            {plants.map((plant, index) => {
              if (index >= 2 * plantThird) {
                return (
                  <PlantCard
                    _id={plant._id}
                    key={plant.name}
                    name={plant.name}
                    photo={plant.photos[0]}
                  />
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
    );
  };
  return <>{getHomepagePlants()}</>;
}

export default HomePage;
