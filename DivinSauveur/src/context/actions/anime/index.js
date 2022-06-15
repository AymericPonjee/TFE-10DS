import axiosInstance from '../../../helpers/axiosInstance';

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

export const listAnime = () => {
  return axiosInstance
    .get('/Animes/list')
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      console.log('[listAnime][err] => ', err);
    }); 
}
