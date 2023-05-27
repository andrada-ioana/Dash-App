import React from 'react';
import Camera from '../../components/Camera';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';

const ScanQR = () => {
  const [value, onChangeText] = React.useState('');

  return <Camera />;
};

export default ScanQR;
