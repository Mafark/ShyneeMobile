import {StyleSheet } from 'react-native';

import {fonts, colors} from '../../constants/styles';

export default StyleSheet.create({
  tabMenu: {
    marginLeft: 10, 
    marginRight:10, 
    marginTop: 17, 
    paddingBottom: 8,
  },
  topContent: {
    backgroundColor: colors.white
  },
  content: {
    margin: 3,
    paddingBottom: 17,
    backgroundColor: colors.white,
  },
  info: {
    marginTop: 17,
    marginLeft: 20
  },
  infoItem: {
    marginBottom: 8
  },
  itemName: {
    color: colors.grey,
    fontFamily: fonts.family.light,
    fontSize: fonts.size.small,
    fontWeight: fonts.weight.small,
  },
  itemValue: {
    fontSize: fonts.size.large,
  },
  interests: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 8
  },
  interestContainer: {
    backgroundColor: colors.primary,
    borderRadius: 100,
    marginRight: 8
  },
  interest: {
    color: colors.white,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 21,
    paddingRight: 21
  },
  noInfoContainer: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: 'center',
  },
  noInfo: {
    flexDirection: 'column',
    width: 295,
  },
  noInfoPity: {
    textAlign: 'center',
    fontFamily: fonts.family.light,
  },
  noInfoSuggestion: {
    textAlign: 'center',
  }
});
