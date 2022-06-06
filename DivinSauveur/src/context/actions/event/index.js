import axiosInstance from '../../../helpers/axiosInstance';
import {
  EVENT_CREATE_FAIL,
  EVENT_LIST_FAIL,
} from '../../../constants/actionTypes';

//http://localhost:3000/Events/create
export const create = event => {
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

//http://localhost:3000/Events/list
export const fetchEvents = params => {
  return axiosInstance
    .get('/Events/list', {params})
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      dispatch({
        type: EVENT_LIST_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'Une erreur est survenue.. Réessayez'},
      });
    });
};

//http://localhost:3000/Events/
export const deleteEvent = params => {
  return axiosInstance
    .delete(`/Events/${params}`)
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      // dispatch({
      //   type: EVENT_LIST_FAIL,
      //   payload: err.response
      //     ? err.response.data
      //     : {error: 'Une erreur est survenue.. Réessayez'},
      // });
      console.log('err ->', err);
    });
};

//http://localhost:3000/Events/
export const updateEvent = event => {
  return axiosInstance
    .put(`/Events/${event._id}`)
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      // dispatch({
      //   type: EVENT_UPDATE_FAIL,
      //   payload: err.response
      //     ? err.response.data
      //     : {error: 'Une erreur est survenue.. Réessayez'},
      // });
      console.log('err ->', err);
    });
};



