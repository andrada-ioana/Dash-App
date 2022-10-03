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
    marginBottom: 38,
  },

  linkBtnClosePage: {
    fontSize: 20,
    paddingTop: 50,
    textAlign: 'right',
  },

  iconImage: {
    marginRight: -20,
    aspectRatio: 1.5,
    flex: 1,
    height: 50,
    alignSelf: 'flex-end',
  },

  iconImage2: {
    marginLeft: -20,
    aspectRatio: 1.5,
    flex: 1,
    height: 50,
    alignSelf: 'flex-end',
    opacity: 0,
  },

  logoImage: {
    width: 390,
    height: 280,
    alignSelf: 'center',
  },

  linkBtn: {
    color: '#7E5ABB',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
