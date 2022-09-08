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
    marginBottom: 74,
  },

  linkBtnClosePage: {
    fontSize: 20,
    paddingTop: 50,
    textAlign: 'right',
  },

  iconImage: {
    aspectRatio: 1.5,
    flex: 1,
    height: 50,
    alignSelf: 'flex-end',
  },

  iconImage2: {
    aspectRatio: 1.5,
    flex: 1,
    height: 50,
    alignSelf: 'flex-end',
    opacity: 0,
  },

  logoImage: {
    aspectRatio: 1.5,
    flex: 1,
    height: 200,
    alignSelf: 'center',
    marginTop: 100,
  },

  linkBtn: {
    color: '#7E5ABB',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
