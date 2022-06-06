import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/Colors';

export default StyleSheet.create({
  imageBg: {
    flex: 1,
  },
  sectionTop: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    paddingTop: 100,
    paddingBottom: 20,
    color: 'white',
    opacity: 0.8,
    fontWeight: 'bold',
  },
  listTab: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 15,
  },
  btnTab: {
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: colors.darkBlue,
    padding: 8,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 12,
    color: colors.white,
  },
  btnTabActive: {
    backgroundColor: colors.darkBlue,
  },
  listEvent: {
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.25)',
    padding: 5,
    paddingLeft: 20,
    height: 65,
    marginVertical: 8,
  },
  nameEvent: {
    color: colors.darkBlue,
    fontSize: 25,
    fontWeight: 'bold',
    width: 175,
  },
  lieuEvent: {
    color: colors.white,
    fontSize: 15,
    width: 175,
  },
  dateEvent: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 22,
    position: 'absolute',
    paddingTop: 10,
    paddingRight: 20,
    alignSelf: 'flex-end',
  },
  sectionEvent: {
    color: colors.white,
    position: 'absolute',
    paddingRight: 20,
    bottom: 2,
    alignSelf: 'flex-end',
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