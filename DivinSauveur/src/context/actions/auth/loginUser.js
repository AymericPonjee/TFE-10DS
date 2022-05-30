import axiosInstance from '../../../helpers/axiosInstance';
import {LOGIN_FAIL} from '../../../constants/actionTypes';

export const login = ({password: password, mail: mail}) => {
  return axiosInstance
    .post('/Users/login', {
      password,
      mail,
    })
    .then(res => res);
  //.catch(error => {
  //       return dispatchEvent({
  //         type: LOGIN_FAIL,
  //         payload: error.response
  //           ? error.response.data
  //           : {error: 'Erreur.. Veuillez recommencez'},
  //       });
  //     });
};
