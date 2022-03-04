import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  sectionTop: {
    padding: 15,
  },
  title: {
    fontSize: 16,
    paddingTop: 100,
    paddingBottom: 20,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  event: {
    
  },
  sectionBot: {
    padding: 10,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addEvent: {
    width: 70,
    height: 70,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 60,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: colors.lightGrey,
    fontSize: 35,
    
  },
});