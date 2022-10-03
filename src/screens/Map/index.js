import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapComponent from '../../components/Map';

const Map = () => {
  const [value, onChangeText] = React.useState('');
  
  return <MapComponent />;
};

export default Map;
{/**
<TouchableOpacity>
  <Image
    source={require('../../assets/images/menu.png')}
    style={{height: 70, width: 70}}
  />
</TouchableOpacity>;
*/}
