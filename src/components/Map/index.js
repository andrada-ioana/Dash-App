import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import MapView from 'react-native-maps';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  ADD_CARD,
  HOME_NAVIGATOR,
  MENU,
  PAYMENT,
} from '../../constants/routeNames';
import HomeNavigator from '../../navigations/HomeNavigator';
import CustomButtonIcon from '../common/CustomButtonIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {DrawerActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';

const MapComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container style={styles.container}>
      <View style={styles.body}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 46.7712,
            longitude: 23.6236,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          top: '4%',
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/exclamation.png')}
            style={{height: 70, width: 70}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: '5.5%',
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/filter.png')}
            style={{height: 70, width: 70}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: '13%',
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/location.png')}
            style={{height: 70, width: 70}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: '5.5%',
          alignSelf: 'flex-start',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/safety-center.png')}
            style={{height: 70, width: 70}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          top: '4%',
          alignSelf: 'flex-start',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/menu.png')}
            style={{height: 70, width: 70}}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigate(ADD_CARD);
        }}
        style={{
          width: '70%',
          bottom: '5%',
          alignSelf: 'center',
          position: 'absolute',
          zIndex: 1000,
        }}>
        <View>
          <CustomButtonIcon
            title="Scan"
            icon={<MaterialCommunityIcons name="line-scan" size={20} />}
          />
        </View>
      </TouchableOpacity>
    </Container>
  );
};

export default MapComponent;
