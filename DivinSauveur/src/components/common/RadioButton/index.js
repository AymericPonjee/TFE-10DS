import React from 'react';

import {View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../../assets/themes/Colors';

export const RadioButton = ({selected, style, onPress}) => {
  return (
    <TouchableOpacity
      accessibilityRole="radio"
      onPress={() => onPress()}
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: Colors.lightGrey,
          alignItems: 'center',
          justifyContent: 'center',
        },
        style,
      ]}>
      {selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: Colors.lightGrey,
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};
