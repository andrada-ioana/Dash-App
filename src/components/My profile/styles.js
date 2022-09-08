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
    paddingTop: 90,
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

  section: {
    borderBottomWidth: 0.2,
    borderBottomColor: '#666666',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
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
