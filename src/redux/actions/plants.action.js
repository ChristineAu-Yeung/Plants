import plantsService from "../services/plants.service";

const getPlants = () => {
  return (dispatch) => {
    plantsService
      .getPlants()
      .then((res) => {
        dispatch(success(res));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function success(payload) {
    return { type: "GET_PLANTS_SUCCESS", payload };
  }
  function failure(error) {
    return { type: "GET_PLANTS_FAILURE", error };
  }
};

const getPlantsbyType = (plantType) => {
  return (dispatch) => {
    plantsService
      .getPlantsbyType(plantType)
      .then((res) => {
        dispatch(success(res));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
  function success(payload) {
    return { type: "GET_PLANTS_BY_TYPE_SUCCESS", payload };
  }
  function failure(error) {
    return { type: "GET_PLANTS_BY_TYPE_FAILURE", error };
  }
};

const addPlant = (plantInfo) => {
  return (dispatch) => {
    plantsService
      .addPlant(plantInfo)
      .then((res) => {
        dispatch(success(res));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
  function success(payload) {
    return { type: "ADD_PLANT_SUCCESS", payload };
  }
  function failure(error) {
    return { type: "ADD_PLANT_FAILURE", error };
  }
};

const updatePlant = (id, plantInfo) => {
  return (dispatch) => {
    plantsService
      .updatePlant(id, plantInfo)
      .then((res) => {
        dispatch(success(res));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };
  function success(payload) {
    return { type: "UPDATE_PLANT_SUCCESS", payload };
  }
  function failure(error) {
    return { type: "UPDATE_PLANT_FAILURE", error };
  }
};

const plantsActions = {
  getPlants,
  getPlantsbyType,
  addPlant,
  updatePlant,
};

export default plantsActions;
