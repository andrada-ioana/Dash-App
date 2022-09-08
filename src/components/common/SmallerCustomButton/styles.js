import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 24,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: '25%',
    marginVertical: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#7E5ABB',
  },

  loaderSection: {
    flexDirection: 'row',
  },

  textInput: {
    flex: 1,
    width: '100%',
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
