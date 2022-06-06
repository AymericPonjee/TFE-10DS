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
    paddingVertical: 15,
    paddingLeft: 15,
  },
  name: {
    fontWeight: 'bold',
    color: Colors.darkBlue,
    paddingLeft: 10,
    paddingTop: 3,
  },
  firstname: {
    color: Colors.darkBlue,
    paddingTop: 3,
    paddingLeft: 5,
  },
  presence: {
    borderWidth: 2,
    borderColor: colors.darkBlue,
    height: 22,
    width: 22,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  more: {
    left: 170,
  },
});
