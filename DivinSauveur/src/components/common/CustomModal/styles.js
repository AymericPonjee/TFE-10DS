import {StyleSheet} from 'react-native';

import colors from '../../../assets/themes/Colors';

export default StyleSheet.create({
  imgbackground :{
    flex:1,
    backgroundColor: colors.darkGrey,
    justifyContent:'center',
    alignItems:'center',
    //paddingBottom:50
  },
  modalContainer :{
    width: '80%',
    backgroundColor: colors.lightGrey,
    borderRadius:15,
    paddingHorizontal:10,
    paddingVertical:10,
    elevation:20
  }
});
