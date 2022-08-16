import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import MapView from 'react-native-maps';

const MapComponent = () => {
  return (
    <Container style={styles.container}>
      <View style={styles.body}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    </Container>
  );
};

export default MapComponent;
