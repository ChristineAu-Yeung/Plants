import userService from "../services/user.service";

const signUp = ({ name, email, password }) => {
  return (dispatch) => {
    userService
      .signUp({ name, email, password })
      .then((res) => {
        dispatch(success(res));
      })
      .catch((error) => {
        dispatch(failure(error));
      });
  };

  function success(payload) {
    return { type: "SIGN_UP_SUCCESS", payload };
  }
  function failure(error) {
    return { type: "SIGN_UP_FAILURE", error };
  }
};

export const userActions = {
  signUp,
};
