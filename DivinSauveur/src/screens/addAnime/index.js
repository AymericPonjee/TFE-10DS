import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {ANIMELIST} from '../../constants/routeNames';
import {TouchableOpacity} from 'react-native';
import {createAnime} from '../../context/actions/anime';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AddAnimeComponent from '../../components/addAnime';

const AddAnime = (props) => {
  const {setOptions, navigate} = useNavigation();
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const event = props.route.params.event;


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
    if (!form.address) {
      setErrors(prev => {
        return {...prev, address: 'Veuillez entrer une adresse'};
      });
    }
    if (!form.mail) {
      setErrors(prev => {
        return {...prev, mail: 'Veuillez entrer une adresse mail'};
      });
    }
    if (!form.number) {
      setErrors(prev => {
        return {...prev, number: 'Veuillez entrer un numéro de téléphone'};
      });
    }
    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      createAnime(form).then(result => {
        if (result) {
          navigation.navigate(ANIMELIST);
        }
      });
    }
  };

  React.useEffect(() => {
    setOptions({
      headerTransparent: true,
      headerStyle: {
        height: 100,
      },
      headerTintColor: 'rgba(255,255,255,0.6)',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 26,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigate(ANIMELIST, {event})}>
          <Ionicons
            name="chevron-back"
            size={35}
            color={'rgba(255,255,255,0.6)'}
            style={{paddingLeft: 10}}
          />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <AddAnimeComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      event={event}
    />
  );
};

export default AddAnime;
