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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
  },

  nameInput: {
    width: 150,
    height: 30,
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },

  genericInput: {
    height: 30,
  },

  createSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  linkBtn: {
    fontWeight: 'bold',
    paddingLeft: 6,
    color: 'black',
    fontSize: 12,
  },

  infoText: {
    fontSize: 12,
  },
});
