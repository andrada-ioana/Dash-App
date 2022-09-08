import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '700',
  },

  subTitle: {
    font: 12,
    color: '#666666',
    paddingTop: 90,
  },

  iconImage: {
    marginRight: 10,
    height: 18,
    width: 18,
  },

  textStyle: {
    fontSize: 16,
  },

  navBar: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    paddingBottom: 77,
  },

  section: {
    borderBottomWidth: 0.2,
    display: 'flex',
    borderBottomColor: '#666666',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
  },

  icon: {
    flexDirection: 'row',
    display: 'flex',
  },

  iconImage2: {
    aspectRatio: 1.5,
    flex: 1,
    height: 50,
    alignSelf: 'flex-end',
  },

  iconImage1: {
    aspectRatio: 1.5,
    flex: 1,
    height: 50,
    alignSelf: 'flex-end',
    opacity: 0,
  },

  sectionDark: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },

  sectionLight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
});
