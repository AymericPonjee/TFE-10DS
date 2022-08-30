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

//http://localhost:3000/Animes/
export const deleteAnime = params => {
  return axiosInstance
    .delete(`/Animes/${params}`)
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      console.log('[deleteAnime][err] ->', err);
    });
};

export const listAnime = params => {
  return axiosInstance
    .get('/Animes/list', {params})
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      console.log('[listAnime][err] => ', err);
    });
};

//http://localhost:3000/Animes/
export const updateAnime = anime => {
  return axiosInstance
    .put(`/Animes/${anime._id}`, anime)
    .then(res => {
      if (res) {
        return res;
      }
    })
    .catch(err => {
      console.log('[updateAnime][err] ->', err);
    });
};
