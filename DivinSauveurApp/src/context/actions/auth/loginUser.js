import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  LOGIN_FAIL,
  LOGIN_LOADING,
  LOGIN_SUCCESS
} from '../../../constants/actionTypes';
import axiosInstance from '../../../helpers/axiosInstance';
import { storeData } from '../../../utils/storage';

export default ({password: password, mail: mail}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('/Users/login', {
        password,
        mail,
      })
      .then(res => {
        storeData('token', res.data.token);
        storeData('user', res.data.user);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
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