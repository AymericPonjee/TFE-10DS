import axiosInstance from '../../../helpers/axiosInstance';
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE
} from '../../../constants/actionTypes';

export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
    name: name,
    firstname: firstname,
    totem: totem,
    quali: quali,
    mail: mail,
    password: password,
  }) =>
  dispatch =>
  onSuccess => {
    dispatch({
      type: REGISTER_LOADING,
    });
    axiosInstance
      .post('/Users/signup', {
        name,
        firstname,
        totem,
        quali,
        mail,
        password,
      })
      .then(res => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });

        onSuccess(res.data);
      })
      .catch(err => {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Une erreur est survenue.. Réessayez'},
        });
      });
  };