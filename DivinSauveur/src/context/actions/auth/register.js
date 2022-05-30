import axiosInstance from '../../../helpers/axiosInstance';
import {REGISTER_FAIL} from '../../../constants/actionTypes';

export const register = user => {
  return axiosInstance
    .post('/Users/register', user)
    .then(res => {
      if (res) {
        return res;
      }
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
