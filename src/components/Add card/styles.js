import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 20,
    paddingTop: 0,
    textAlign: 'center',
    fontWeight: '700',
  },

  navBar: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  form: {
    paddingTop: 77,
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

  iconInput: {
    flex: 1,
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
  },

  cardInputs: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  dropDownStyle: {
    backgroundColor: '#E4E4E4',
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
