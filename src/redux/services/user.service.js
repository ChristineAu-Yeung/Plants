import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL;

const signUp = async ({ name, email, password }) => {
  return await axios
    .post(`${url}/users/signUp`, { name, email, password })
    .then((data) => {
      // console.log(data);
      return data.data;
    })
    .catch((error) => {
      return error;
    });
};

const userService = {
  signUp,
};

export default userService;
