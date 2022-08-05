import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  logoImage: {
    aspectRatio: 1.5,
    flex: 1,
    height: 316,
    alignSelf: 'center',
    marginTop: 25,
  },

  title: {
    fontSize: 20,
    textAlign: 'left',
    paddingTop: 20,
    fontWeight: '700',
  },

  subTitle: {
    fontSize: 12,
    textAlign: 'left',
    paddingTop: 5,
  },

  form: {
    paddingTop: 20,
  },

  createSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  linkBtnForgotPassword: {
    textAlign: 'right',
    color: '#7E5ABB',
    fontWeight: 'bold',
    paddingBottom: 15,
  },

  linkBtn: {
    fontWeight: 'bold',
    paddingLeft: 6,
    paddingTop: 38.5,
    color: 'black',
    fontSize: 12,
  },

  infoText: {
    fontSize: 12,
    paddingTop: 38.5,
  },
});
