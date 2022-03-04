import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../../assets/themes/colors';
import styles from './styles';


const CustomButton = ({ title, secondary, primary, danger, disabled, loading, onPress, style,}) => {
  
  const getBgColor = () => {
    if (disabled) {
      return colors.lightGrey;
    }
    if (primary) {
      return colors.darkBlue;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.lightBlue;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, { backgroundColor: getBgColor() }, style]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={colors.lightGrey ? colors.lightBlue : colors.darkBlue}
          />
        )}
        {title && (
          <Text
            style={{
              fontSize:16,
              color: disabled ? 'black' : colors.white,
              paddingLeft: loading ? 5 : 0,
            }}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;