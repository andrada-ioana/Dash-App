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
    marginTop: 50,
  },

  textStyle: {
    fontSize: 16,
    paddingTop: 5,
  },

  navBar: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  iconImage3: {
    aspectRatio: 1,
    flex: 0.45,
    alignSelf: 'flex-end',
    borderRadius: 100,
    marginRight: 15,
  },

  linkBtn: {
    color: '#7E5ABB',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 16,
  },

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 28,
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

  label: {
    fontSize: 12,
    color: '#666666',
  },

  sectionDarkTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },

  sectionDark: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },

  sectionLight: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
});
