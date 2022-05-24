import React, { useEffect } from 'react';

import {View, Text, TextInput} from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

const Input = ({onTouchCancel, onChange, onChangeText, style, value, label, icon, error, ...props}) => {
  const [focused, setFocused] = React.useState(false);

  const getBorderColor = () => {
    if (error && error.length > 1) {
      return colors.danger;
    }

    if (focused) {
      return colors.lightBlue;
    } else {
      return colors.darkGrey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          onChange = { onChange }
          onTouchCancel = {onTouchCancel}
          placeholderTextColor={colors.lightBlue}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && error.length > 1 && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
