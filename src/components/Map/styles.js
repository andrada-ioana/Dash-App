import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginLeft: 10,
  },

  body: {
    flex: 1,
    alignItems: 'center',
    margin: 0,
    overflowY: 'hidden',
  },

  text: {
    fontSize: 40,
    margin: 0,
  },

  map: {
    width: '111.5%',
    height: 895,
    marginTop: -20,
    margin: 0,
  },

  popupContainer: {
    backgroundColor: '#fefefe',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '111.5%',
    marginLeft: -20,
  },

  topRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  range: {
    fontWeight: '700',
    fontSize: 20,
  },

  popupRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
});
