import React from 'react';
import { View, ScrollView, ImageBackground, StatusBar } from 'react-native';
import styles from './styles';

const Container = ({ style, children }) => {
  return (
    <ImageBackground
      source={require('../../../assets/images/Background.jpg')}
      style={styles.imageBg}
    >
      <StatusBar barStyle="light-content" />
      <ScrollView>
        <View style={[styles.wrapper, style]}>
          {children}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Container;