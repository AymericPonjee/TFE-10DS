import {LOGIN_FAIL} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';

export const login = ({password: password, mail: mail}) => {
  return axiosInstance
    .post('/Users/login', {
      password,
      mail,
    })
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(error => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response
          ? error.response.data
          : {error: 'Erreur.. Veuillez recommencez'},
      });
    });
};
