import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/core';

import {create} from '../../context/actions/event/index';

import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddEventComponent from '../../components/AddEvent';
import {CALENDAR} from '../../constants/routeNames';

const AddEvent = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const {setOptions, navigate} = useNavigation();

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
        <TouchableOpacity onPress={() => navigate(CALENDAR)}>
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

  // const onChange = ({name, value}) => {
  //   setForm({...form, [name]: value});

  //   if (value !== '') {
  //     setErrors(prev => {
  //       return {...prev, [name]: null};
  //     });
  //   } else {
  //     setErrors(prev => {
  //       return {...prev, [name]: 'Ce champ est obligatoire'};
  //     });
  //   }
  // };

  // const onSubmit = () => {
    // if (!form.name) {
    //   setErrors(prev => {
    //     return {...prev, name: "Veuillez entrer un nom pour l'évènement"};
    //   });
    // }
    // if (!form.address) {
    //   setErrors(prev => {
    //     return {...prev, address: "Veuillez entrer une adresse pour l'évènement"};
    //   });
    // }
    // if (!form.startEvent) {
    //   setErrors(prev => {
    //     return {...prev, startEvent: "Veuillez sélectionner une date pour l'évènement"};
    //   });
    // }
    // if (!form.endEvent) {
    //   setErrors(prev => {
    //     return {
    //       ...prev,endEvent: "Veuillez sélectionner une date pour l'évènement"};
    //   });
    // }
    // if (!form.sections) {
    //   setErrors(prev => {
    //     return {
    //       ...prev,sections: "Veuillez sélectionner au moins une section pour l'évènement"};
    //   });
    // }
    // if (!form.description) {
    //   setErrors(prev => {
    //     return {
    //       ...prev,description: "Veuillez entrer une description pour l'évènement"};
    //   });
    // }
    // if (
    //   Object.values(form).length === 5 &&
    //   Object.values(form).every(item => item.trim().length > 0) &&
    //   Object.values(errors).every(item => !item)
    // ) {
    //   register(form).then(result => {
    //     if (result) {
    //       navigation.navigate(CALENDAR);
    //     }
    //   });
    // }
  // };
  return (
    <AddEventComponent 
      // onChange={onChange} 
      // onSubmit={onSubmit}
      // form={form}
      // errors={errors}
    />
  );
};

export default AddEvent;
