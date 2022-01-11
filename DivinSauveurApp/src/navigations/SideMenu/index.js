import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {SafeAreaView, Image, View, Text} from 'react-native';
import styles from './styles';
import {GlobalContext} from '../../context/Provider';
import {clearData} from '../../utils/storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../assets/themes/colors';

const SideMenu = props => {
  const {setAuthenticated, setUser} = useContext(GlobalContext);

  const handleSubmit = async () => {
    setAuthenticated(false);
    setUser({});
    await clearData();
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.bottom}>
        <TouchableOpacity onPress={handleSubmit} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} color={colors.darkBlue} />
            <Text style={styles.logout}>Déconnexion</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideMenu;
