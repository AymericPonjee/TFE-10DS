import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightBlue,
  },
  logoImage: {
    height: 125,
    width: 125,
    alignSelf: 'center',
    marginTop: 10,
  },
  bottom: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.darkGrey,
  },
  logout: {
    marginLeft: 5,
    fontSize: 15,
    color: colors.darkBlue,
    //fontFamily:'roboto'
  },
});
