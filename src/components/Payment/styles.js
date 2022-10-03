import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 20,
    paddingTop: 0,
    textAlign: 'center',
    fontWeight: '700',
  },

  subTitle: {
    font: 12,
    color: '#666666',
    marginTop: 38,
    fontWeight: 'bold',
    paddingBottom: 10,
  },

  textStyle: {
    fontSize: 14,
    marginLeft: 10,
  },

  navBar: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  checkbox: {
    alignSelf: 'flex-start',
  },

  message: {
    fontSize: 14,
    lineHeight: 23,
  },

  learnMoreBtn: {
    color: '#7E5ABB',
    marginTop: 10,
  },

  sectionDark: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },

  sectionLight: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },

  iconImage2: {
    marginRight: -20,
    aspectRatio: 1.5,
    flex: 1,
    height: 50,
    alignSelf: 'flex-end',
  },

  iconImage1: {
    marginLeft: -20,
    aspectRatio: 1.5,
    flex: 1,
    height: 50,
    alignSelf: 'flex-end',
    opacity: 0,
  },
});
