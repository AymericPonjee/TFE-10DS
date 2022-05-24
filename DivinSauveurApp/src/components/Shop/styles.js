import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  title: {
    fontSize: 16,
    paddingVertical: 20,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  list: {
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: 5,
    marginVertical: 8,
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  nameItems: {
    color: colors.darkBlue,
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10,

  },
  priceItems: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});