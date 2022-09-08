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
    flex: 0.1,
    height: 10,
    alignSelf: 'flex-end',
    marginTop: -270,
    position: 'relative',
    zIndex: 5,
  },

  iconImage2: {
    aspectRatio: 1.5,
    flex: 1,
    height: 180,
    alignSelf: 'center',
    marginVertical: 25,
  },

  logoImage: {
    aspectRatio: 1.4,
    flex: 1,
    height: 280,
    alignSelf: 'center',
    marginTop: 20,
  },

  linkBtn: {
    color: '#7E5ABB',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
