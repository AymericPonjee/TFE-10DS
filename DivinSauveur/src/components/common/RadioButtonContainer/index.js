import React, {useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {RadioButton} from '../RadioButton';
import colors from '../../../assets/themes/Colors';
import Colors from '../../../assets/themes/Colors';
export const RadioButtonContainer = ({options, selected, setSelected}) => {
  return (
    <View style={styles.radioView}>
      {options.map((el, index) => (
        <View key={index} style={styles.radioSection}>
          <View style={styles.radio}>
            <RadioButton
              style={styles.checkBox}
              selected={selected == el}
              onPress={() => setSelected(el)}
            />
          </View>
          <Text style={styles.labelRadio}>{el}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioView: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: colors.darkGrey,
    marginVertical: 10,
  },
  labelRadio: {
    color: Colors.lightGrey,
    fontSize: 16,
  },
  radioSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
  },
  radio: {
    paddingRight: 5,
  },
});
