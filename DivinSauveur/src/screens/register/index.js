import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import RegisterComponent from '../../components/signup';
import {register} from '../../context/actions/auth/register';

import {LOGIN} from '../../constants/routeNames';
import { validateEmail } from '../../utils/validators';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();


  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      setErrors(prev => {
        return {...prev, [name]: null};
      });
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'Ce champ est obligatoire'};
      });
    }
  };

  const onSubmit = () => {
    if (!form.name) {
      setErrors(prev => {
        return {...prev, name: 'Veuillez entrer un nom'};
      });
    }
    if (!form.firstname) {
      setErrors(prev => {
        return {...prev, firstname: 'Veuillez entrer un prénom'};
      });
    }
    if (!form.mail) {
      setErrors(prev => {
        return {...prev, mail: 'Veuillez entrer un mail'};
      });
    }
    // if (!validateEmail(form.email)){
    //   setErrors(prev => {
    //     return {...prev, mail: 'Format mail non valid'};
    //   });
    // }

    if (
      Object.values(form).length === 3 || 
      Object.values(form).length === 4 ||
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form).then(result => {
        if (result) {
          navigation.navigate(LOGIN);
        }
      });
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
