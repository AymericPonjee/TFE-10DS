import React, {useState } from 'react';
import {useNavigation} from '@react-navigation/native';

import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../components/common/Input';
import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import colors from '../../assets/themes/Colors';

import {updateEvent} from '../../context/actions/event';
import {SECTIONS} from '../../constants/models';
import {CALENDAR} from '../../constants/routeNames';

const UpdateEventComponent = ({event: receivedEvent}) => {
  const sectionsProps = {};
  receivedEvent.section.forEach(el => {
    sectionsProps[el] = true;
  });

  const {navigate} = useNavigation();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [name, setName] = useState(receivedEvent.name || '');
  const [address, setAddress] = useState(receivedEvent.address || '');
  const [startEvent, setStartEvent] = useState(receivedEvent.beginAt ?? '');
  const [endEvent, setEndEvent] = useState(receivedEvent.endAt ?? '');
  const [selectedDateInput, setSelectedDateInput] = useState('startEvent');
  const [sections, setSections] = useState(sectionsProps);
  const [description, setDescription] = useState(receivedEvent.comment || '');
  const [errorStartDate, setErrorStartDate] = useState(false);
  const [errorEndDate, setErrorEndDate] = useState(false);

  const handleDate = date => {
    if (selectedDateInput === 'startEvent') {
      setStartEvent(date);

      if (new Date(date) < new Date(endEvent)) {
        setStartEvent(date);
      } else {
        setErrorStartDate(true);
      }
    } else if (selectedDateInput === 'endEvent') {
      setEndEvent(date);
      if (startEvent == '') {
        setEndEvent(date);
      } else if (new Date(date) > new Date(startEvent)) {
        setEndEvent(date);
      } else {
        setErrorEndDate(true);
      }
    }
  };

  const formatDate = date => {
    return date.toLocaleString('fr', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleSection = (key, value) => {
    const sec = {...sections};
    sec[key] = value;
    setSections(sec);
  };

  const handleSubmit = () => {
    checkErrors().then(resp => {
      if (Object.keys(resp).length == 0) {
        const arrayOfSections = getArrayOfSections();

        const updatedEvent = {
          _id: receivedEvent._id,
          name: name,
          address: address,
          beginAt: startEvent,
          endAt: endEvent,
          section: arrayOfSections,
          comment: description,
        };

        return updateEvent(updatedEvent)
          .then(resp => {
            if (resp) {
              Alert.alert('Bravo', "L'évènement a bien été modifié !");
            }
          })
          .then(() => navigate(CALENDAR))
          .catch(err => console.log('err =>', err.status));
      }
    });
  };

  const checkErrors = () => {
    const err = {};
    if (!name || name === '') {
      err['name'] = "Veuillez entrer un nom pour l'évènement";
    }
    if (!address || address === '') {
      err['address'] = "Veuillez entrer une adresse pour l'évènement";
    }
    if (!startEvent || startEvent === '') {
      err['startEvent'] = "Veuillez entrer une date de début pour l'évènement";
    }
    if (!endEvent || endEvent == '') {
      err['endEvent'] = "Veuillez entrer une date de fin pour l'évènement";
    }

    const arrayOfSections = getArrayOfSections();

    if (arrayOfSections.length == 0) {
      err['sections'] =
        "Veuillez sélectionner au moins une section pour l'évènement";
    }
    if (!description || description === '') {
      err['description'] = "Veuillez entrer une description pour l'évènement";
    }
    console.log('err ->', err);
    setErrors(err);
    return Promise.resolve(err);
  };

  const getArrayOfSections = () => {
    const arrayOfSections = [];
    Object.entries(sections).forEach(([key, value]) => {
      if (value == true) {
        arrayOfSections.push(key);
      }
    });
    return arrayOfSections;
  };

  return (
    <Container>
      <View>
        <Text style={styles.title}>Veuillez Complèter le formulaire :</Text>
      </View>

      <DateTimePickerModal
        date={new Date()}
        isVisible={open}
        mode="datetime"
        onConfirm={date => {
          handleDate(date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        locale="fr-BE"
        minimumDate={new Date()}
      />

      <View style={styles.form}>
        <Input
          type="text"
          name="name"
          value={name}
          autoCorrect={false}
          placeholder="Nom de l'évènement*"
          onChangeText={value => {
            if (!value || value == '') {
              setName(undefined);
            } else {
              setName(value);
            }
          }}
          icon={
            <Ionicons
              name={'md-create-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
          error={
            name === undefined
              ? 'Ce champ est obligatoire'
              : errors['name']
              ? errors['name']
              : undefined
          }
        />
        <Input
          type="text"
          name="address"
          value={address}
          onChangeText={value => {
            if (!value || value == '') {
              setAddress(undefined);
            } else {
              setAddress(value);
            }
          }}
          placeholder="Adresse de l'évènement*"
          icon={
            <Ionicons
              name={'ios-location-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
          error={
            address === undefined
              ? 'Ce champ est obligatoire'
              : errors['address']
              ? errors['address']
              : undefined
          }
        />

        <TouchableOpacity
          onPress={() => {
            setSelectedDateInput('startEvent');
            setOpen(true);
            setErrorStartDate(false);
          }}>
          <Input
            type="text"
            name="startEvent"
            //defaultValue={new Date(event.beginAt).toLocaleDateString()}
            value={
              startEvent
                ? formatDate(new Date(startEvent))
                : receivedEvent.beginAt
            }
            placeholder="Début de l'évènement*"
            pointerEvents="none"
            icon={
              <Ionicons
                name={'calendar-outline'}
                size={23}
                color={'rgba(153,178,208,0.7)'}
              />
            }
            iconPosition="right"
            error={
              errorStartDate == true
                ? 'Date invalide !'
                : errors['startEvent']
                ? errors['startEvent']
                : undefined
            }
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedDateInput('endEvent');
            setOpen(true);
            setErrorEndDate(false);
          }}>
          <Input
            type="text"
            name="endEvent"
            value={
              endEvent ? formatDate(new Date(endEvent)) : receivedEvent.endAt
            }
            placeholder="Fin de l'évènement*"
            pointerEvents="none"
            icon={
              <Ionicons
                name={'calendar-outline'}
                size={23}
                color={'rgba(153,178,208,0.7)'}
              />
            }
            iconPosition="right"
            error={
              errorEndDate == true
                ? 'Date invalide !'
                : errors['endEvent']
                ? errors['endEvent']
                : undefined
            }
          />
        </TouchableOpacity>

        <View
          style={
            errors['sections'] != undefined
              ? styles.checkBoxContainerError
              : styles.checkBoxContainer
          }>
          {Object.keys(SECTIONS).map((el, index) => (
            <View key={index} style={styles.checkBoxSection}>
              <View style={styles.checkBoxView}>
                <CheckBox
                  value={sections[el] ?? false}
                  style={styles.checkBox}
                  hideBox
                  onValueChange={value => handleSection(el, value)}
                />
              </View>
              <Text style={styles.labelCheckBox}>{el}</Text>
            </View>
          ))}
        </View>
        {errors['sections'] != undefined && (
          <Text
            style={{
              color: colors.danger,
              marginTop: -2,
              fontSize: 12,
              paddingBottom: 10,
            }}>
            {errors['sections']}
          </Text>
        )}

        <View
          style={
            errors['description'] != undefined
              ? styles.checkBoxContainerError
              : styles.textAreaContainer
          }>
          <TextInput
            type="text"
            name="description"
            onSubmitEditing={() =>
              setErrors({...errors, description: undefined})
            }
            value={description}
            style={styles.textArea}
            placeholder="Description de l'évènement*"
            placeholderTextColor={colors.lightBlue}
            numberOfLines={20}
            multiline={true}
            onChangeText={v => setDescription(v)}
            onBlur={e => {
              if (e.value == undefined) {
                setErrors({...errors, description: 'Ce champ est obligatoire'});
              } else {
                setErrors({...errors, description: undefined});
              }
            }}
          />
        </View>
        {errors['description'] != undefined && (
          <Text
            style={{
              color: colors.danger,
              marginTop: -2,
              fontSize: 12,
              paddingBottom: 10,
            }}>
            {errors['description']}
          </Text>
        )}

        <CustomButton
          onPress={handleSubmit}
          primary
          title="Modifier l'évènement"
        />
      </View>
    </Container>
  );
};

export default UpdateEventComponent;
