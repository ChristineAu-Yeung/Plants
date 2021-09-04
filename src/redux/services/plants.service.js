import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

const getPlants = async () => {
  return await axios
    .get(`${url}/plants`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};

const getPlantsbyType = async (plantType) => {
  return await axios
    .get(`${url}/plants?type=${plantType}`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};

const getAllTypes = async () => {
  return await axios
    .get(`${url}/plants/types`)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};

const addPlant = async (plantInfo) => {
  return await axios
    .post(`${url}/plants`, plantInfo)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};

const updatePlant = async (id, plantInfo) => {
  return await axios
    .post(`${url}/plants/${id}`, plantInfo)
    .then((data) => {
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};

const plantService = {
  getPlants,
  getPlantsbyType,
  getAllTypes,
  addPlant,
  updatePlant,
};
export default plantService;
