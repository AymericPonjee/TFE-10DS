import {StyleSheet} from 'react-native';
import Colors from '../../assets/themes/Colors';
import colors from '../../assets/themes/Colors';

export default StyleSheet.create({
  title: {
    marginTop: 100,
    fontSize: 16,
    textAlign: 'left',
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  containerList: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 50,
    marginVertical: 5,
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 15,
  },
  sousContainerList: {
    flexDirection: 'row',
    width: 240,
  },
  name: {
    fontWeight: 'bold',
    color: Colors.darkBlue,
    paddingLeft: 10,
    paddingTop: 7,
  },
  firstname: {
    color: Colors.darkBlue,
    paddingTop: 7,
    paddingHorizontal: 5,
  },
  presence: {
    borderWidth: 2,
    borderColor: colors.darkBlue,
    height: 22,
    width: 22,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 4,
  },
  info: {
    paddingTop: 5,
  },
  options: {
    flexDirection: 'row',
  },
  more: {
    paddingHorizontal: 5,
  },
  delete: {
    paddingRight: 5,
  },
});
