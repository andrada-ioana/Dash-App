import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const CustomButtonIcon = ({icon, title, primary, disabled, loading, onPress}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.wrapper}>
      <View style={styles.loaderSection}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
            {icon}  {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButtonIcon;
