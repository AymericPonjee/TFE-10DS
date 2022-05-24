import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    paddingTop: 100,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  form: {
    paddingTop: 10,
  },
  textAreaContainer: {
    borderRadius: 20,
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    backgroundColor: colors.darkGrey,
    marginVertical: 10,
  },
  checkBoxContainerError: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: colors.darkGrey,
    marginVertical: 10,
    borderColor: colors.danger,
    borderWidth: 0.5,
  },
  textArea: {
    padding: 10,
    height: 250,
    fontSize: 16,
    color: colors.lightGrey,
  },
});
