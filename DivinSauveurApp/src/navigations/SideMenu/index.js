import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import Container from '../../components/common/Container';
import styles from './styles';

const SideMenu = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView>
        <Image
          height={100}
          width={100}
          source={require('../../assets/images/Logo.png')}
          style={styles.logoImage}
        />
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
};

export default SideMenu;