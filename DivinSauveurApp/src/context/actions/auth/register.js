import axiosInstance from '../../../helpers/axiosInstance';
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  CLEAR_AUTH_STATE
} from '../../../constants/actionTypes';

export const clearAuthState = () => (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_STATE,
  });
};

export default ({
  NomUtilisateur: nom_utilisateur,
  PrenomUtilisateur: prenom_utilisateur,
  TotemUtilisateur,
  QualiUtilisateur,
  MailUtilisateur: mail_utilisateur
}) => (dispatch) => (onSuccess) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  axiosInstance
    .post('http://localhost:8888/TFE-10DS/DivinSaveurSite/API/Inscription.php', {
      nom_utilisateur,
      prenom_utilisateur,
      TotemUtilisateur,
      QualiUtilisateur,
      mail_utilisateur
    })
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });

      onSuccess(res.data);
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response
          ? err.response.data
          : { error: 'Une erreur est survenue.. Réessayez' }
      });
    });
  };