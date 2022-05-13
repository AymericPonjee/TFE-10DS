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
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: 5,
    paddingLeft: 20,
    height: 60,
    marginVertical: 8,
    flexDirection: 'row',
  },
});