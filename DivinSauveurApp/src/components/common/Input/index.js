import React from 'react';

import { View, Text, TextInput } from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';

const Input = ({ onChangeText, style, value, label, icon, error, ...props }) => {

  const [focused, setFocused] = React.useState(false);

  const getBorderColor = () => {
    if (error) {
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

      <View style={[
        styles.wrapper,
        { alignItems: icon ? 'center' : 'baseline' },
        { borderColor: getBorderColor()},
      ]}>
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
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
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;