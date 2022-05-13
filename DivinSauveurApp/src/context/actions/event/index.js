import axiosInstance from '../../../helpers/axiosInstance';
import {EVENT_CREATE_FAIL} from '../../../constants/actionTypes';

//http://localhost:3000/Events/create

export const create = event => {

  console.log("create event =>", event);
  return axiosInstance
    .post('/Events/create', event)
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      dispatch({
        type: EVENT_CREATE_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Une erreur est survenue.. Réessayez'},
      });
    });
};
