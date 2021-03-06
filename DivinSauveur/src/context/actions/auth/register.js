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
      console.log("[register][err] => ", err);
    });
};
