import React, {useState} from 'react';

import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Ionicons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';
import Input from '../../components/common/Input';
import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import styles from './styles';
import colors from '../../assets/themes/colors';

import {create} from '../../context/actions/event';
import {SECTIONS} from '../../constants/actionTypes';

const AddEventComponent = () => {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState();
  const [startEvent, setStartEvent] = useState();
  const [endEvent, setEndEvent] = useState();
  const [selectedDateInput, setSelectedDateInput] = useState('startEvent');
  const [sections, setSections] = useState({});
  const [description, setDescription] = useState();

  const handleDate = date => {
    if (selectedDateInput === 'startEvent') {
      setStartEvent(date);
    } else {
      setEndEvent(date);
    }
  };

  const handleSection = (key, value) => {
    const sec = {...sections};
    sec[key] = value;
    setSections(sec);
  };

  const handleSubmit = () => {
    const arrayOfSections = [];
    Object.entries(sections).forEach(([key, value]) => {
      if (value == true) {
        arrayOfSections.push(key);
      }
    });

    const event = {
      name: name,
      address: address,
      beginAt: startEvent,
      endAt: endEvent,
      section: arrayOfSections,
      comment: description,
    };
    
    return create(event)
      .then(resp => console.log('resp =>', resp))
      .catch(err => console.log('err =>', err.status));
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
        Com
      />

      <View style={styles.form}>
        <Input
          type="text"
          name="name"
          value={name}
          onChangeText={v => setName(v)}
          placeholder="Nom de l'évènement*"
          icon={
            <Ionicons
              name={'md-create-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
        />
        <Input
          type="text"
          name="address"
          value={address}
          onChangeText={v => setAddress(v)}
          placeholder="Adresse de l'évènement*"
          icon={
            <Ionicons
              name={'ios-location-outline'}
              size={23}
              color={'rgba(153,178,208,0.7)'}
            />
          }
          iconPosition="right"
        />

        <TouchableOpacity
          onPress={() => {
            setSelectedDateInput('startEvent');
            setOpen(true);
          }}>
          <Input
            type="text"
            name="startEvent"
            value={startEvent ? new Date(startEvent).toLocaleString() : ''}
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
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setSelectedDateInput('endEvent');
            setOpen(true);
          }}>
          <Input
            type="text"
            name="endEvent"
            value={endEvent ? new Date(endEvent).toLocaleString() : ''}
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
          />
        </TouchableOpacity>

        <View style={styles.checkBoxContainer}>
          {SECTIONS.map((el, index) => (
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

        <View style={styles.textAreaContainer}>
          <TextInput
            type="text"
            name="description"
            value={description}
            style={styles.textArea}
            placeholder="Description de l'évènement"
            placeholderTextColor={colors.lightBlue}
            numberOfLines={20}
            multiline={true}
            icon={
              <Ionicons
                name={'chatbox-outline'}
                size={23}
                color={'rgba(153,178,208,0.7)'}
              />
            }
            iconPosition="right"
            onChangeText={v => setDescription(v)}
          />
        </View>

        <CustomButton
          onPress={handleSubmit}
          primary
          title="Ajouter l'évènement à la liste"
        />
      </View>
    </Container>
  );
};

export default AddEventComponent;
