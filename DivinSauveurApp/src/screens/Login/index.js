import React, {useEffect, useState} from 'react';
import {useContext} from 'react';
import {GlobalContext} from '../../context/Provider';

import LoginComponent from '../../components/Login';
import {login} from '../../context/actions/auth/loginUser';
import {storeData, retrieveData} from '../../utils/storage.js';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);

  const {setAuthenticated, setUser} = useContext(GlobalContext);

  //Si l'utilisateur est déjà connecté. Il skip la navigation de page de connexion/inscription
  useEffect(async () => {
    const user = await retrieveData('user');
    if (user) {
      setAuthenticated(true);
      setUser(user);
    }
  }, []);

  const onSubmit = () => {
    if (form.mail && form.password) {
      login(form).then(response => {
        if (response) {
          storeData('user', response).then(() => {
            setAuthenticated(true);
            setUser(response);
          })
        }
        
      })
      .catch((error) => console.log(error))
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
