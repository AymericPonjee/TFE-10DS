import React, {useEffect, useState} from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../../context/provider';

import LoginComponent from '../../components/login';
import {login} from '../../context/actions/auth/loginUser';
import {storeData, retrieveData} from '../../utils/storage.js';
import axiosInstance from '../../helpers/axiosInstance';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);

  const {setAuthenticated, setUser} = useContext(GlobalContext);

  //Si l'utilisateur est déjà connecté. Il skip la navigation de page de connexion/inscription
  useEffect(() => {
    retrieveData('user').then(resp => {
      if (resp) {
        setAuthenticated(true);
        setUser(resp);
      }
    });
  }, []);

  const onSubmit = () => {
    if (form.mail && form.password) {
      console.log('form =>', form)


      login(form)
        .then(response => {
          console.log('repsonse => ', response);
          if (response) {
            storeData('user', response).then(() => {
              setAuthenticated(true);
              setUser(response);
            });
          }
        })
        .catch(error => {
          console.log(error)
          if(error) {
            window.alert(error)
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
      // error={error}
      // loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
