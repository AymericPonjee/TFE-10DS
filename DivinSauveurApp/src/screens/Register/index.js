import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../../context/Provider';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import RegisterComponent from '../../components/Signup';
import register, { clearAuthState } from '../../context/actions/auth/register';

import { LOGIN } from '../../constants/routeNames';

const Register = () => {
  const [form, setForm] = useState({});
  const { navigate } = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch, 
    authState: { error, loading, data },
  } = useContext(GlobalContext);

  useFocusEffect(
    React.useCallback(() => {
        if (data || error) {
          clearAuthState()(authDispatch);
        }
    }, [data, error]),
  );

  const onChange = ({ name, value }) => {
    setForm({ ...form, [name]: value });

    if (value !== '') {
        setErrors((prev) => {
          return { ...prev, [name]: null };
        });
    } else {
      setErrors((prev) => {
        return { ...prev, [name]: 'Ce champ est obligatoire' };
      });
    }
  };

  const onSubmit = () => {
    console.log(form)
    if (!form.name) {
      setErrors((prev) => {
        return { ...prev, name: 'Veuillez entrer un nom'};
      });
    }
    if (!form.firstname) {
      setErrors((prev) => {
        return { ...prev, firstname: 'Veuillez entrer un prénom'};
      });
    }
    if (!form.mail) {
      setErrors((prev) => {
        return { ...prev, mail: 'Veuillez entrer un mail'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item) => item.trim().length > 0) &&
      Object.values(errors).every((item) => !item)
    ) {
      register(form)(authDispatch)((response) => {
        navigate(LOGIN, { data: response });
      });
    }
  };

  return (
    <RegisterComponent 
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  )
};

export default Register;