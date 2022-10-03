import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  logoImage: {
    aspectRatio: 1.5,
    flex: 1,
    height: 316,
    alignSelf: 'center',
    marginTop: -20,
  },

  title: {
    fontSize: 20,
    textAlign: 'left',
    paddingTop: 30,
    fontWeight: '700',
  },

  container: {
    paddingTop: 30,
    paddingBottom: 200,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  checkboxContainer: {
    flexDirection: 'row',
  },

  checkbox: {
    alignSelf: 'center',
  },

  label: {
    lineHeight: 22,
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 8,
    marginTop: -5,
  },

  link: {
    color: '#1066CC',
  },
});
