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
  NomUtilisateur: NomUtilisateur,
  PrenomUtilisateur: PrenomUtilisateur,
  TotemUtilisateur: TotemUtilisateur,
  QualiUtilisateur: QualiUtilisateur,
  MailUtilisateur: MailUtilisateur,
  MDPUtilisateur: MDPUtilisateur,
  IsChef: IsChef
}) => (dispatch) => (onSuccess) => {
  dispatch({
    type: REGISTER_LOADING,
  });
  axiosInstance
    .post('/Inscription.php', {
      NomUtilisateur,
      PrenomUtilisateur,
      TotemUtilisateur,
      QualiUtilisateur,
      MailUtilisateur,
      MDPUtilisateur,
      IsChef
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