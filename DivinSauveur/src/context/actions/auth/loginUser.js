import axiosInstance from '../../../helpers/axiosInstance';

export const login = ({password: password, mail: mail}) => {
  return axiosInstance
    .post('/Users/login', {
      password,
      mail,
    })
    .then(res => {
      return res;
    })
    .catch(error => {
      console.log('[login][err] => ', error);
    });
};
