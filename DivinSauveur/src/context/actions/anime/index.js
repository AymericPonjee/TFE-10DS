import axiosInstance from '../../../helpers/axiosInstance';
import {CREATE_FAIL} from '../../../constants/actionTypes';

export const createAnime = anime => {
  return axiosInstance
    .post('/Animes/create', anime)
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      console.log('[createAnime][err] => ', err);
    });
};
