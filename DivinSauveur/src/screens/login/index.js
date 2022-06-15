import React, {useEffect, useState} from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../../context/provider';

import LoginComponent from '../../components/login';
import {login} from '../../context/actions/auth/loginUser';
import {storeData, retrieveData} from '../../utils/storage.js';
import { LOCAL_STORAGE_KEYS } from '../../constants/models';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);

  const {setAuthenticated, setUser, setAccessToken} = useContext(GlobalContext);

  //Si l'utilisateur est déjà connecté. Il skip la navigation de page de connexion/inscription
  useEffect(() => {
    retrieveData(LOCAL_STORAGE_KEYS.TOKEN).then(resp => {
      if (resp) {
        setAuthenticated(true);
        setUser(resp);
        setAccessToken(resp)
      }
    });
  }, []);

  const onSubmit = () => {
    if (form.mail && form.password) {
      console.log('form =>', form);

      login(form)
        .then(token => {
          if (token) {
            storeData(LOCAL_STORAGE_KEYS.TOKEN, token.data).then(() => {
              setAuthenticated(true);
              setAccessToken(token.data);
            });
          }
        })
        .catch(error => {
          console.log(error);
          if (error) {
            window.alert(error);
          }
        });
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
