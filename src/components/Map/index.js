import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import styles from './styles';
import Container from '../common/Container';
import MapView, {Marker} from 'react-native-maps';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  ADD_CARD,
  END_RIDE,
  HOME_NAVIGATOR,
  MENU,
  PAYMENT,
  SAFETY_CENTER,
} from '../../constants/routeNames';
import HomeNavigator from '../../navigations/HomeNavigator';
import CustomButtonIcon from '../common/CustomButtonIcon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {DrawerActions, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';
import SlidingPanel from 'react-native-sliding-up-down-panels';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SwipeUpDown from 'react-native-swipe-up-down';
import axios from 'axios';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const MapComponent = () => {
  const {navigate} = useNavigation();
  const [bikeData, setBikeData] = useState(undefined);
  const baseUrl = 'http://78.96.150.138:11081/jsonTest/api/upload/status';
  const baseUrl2 = 'http://78.96.150.138:11081/jsonTest/api/upload/getposition';

  const SendData = async () => {
    axios
      .post(baseUrl, {
        status: '1',
      })
      .then(response => console.log(response.data))
      .catch(console.log('error'));
  };

  const GetData = async () => {
    axios
      .get(baseUrl2)
      .then(response => setBikeData(response.data))
      .catch(console.log('error'));
  };

  useEffect(() => {
    GetData();
  }, []);

  useEffect(() => {
    if (bikeData == undefined) {
      GetData();
    }
  }, [bikeData]);

  return (
    <Container style={styles.container}>
      <View style={styles.body}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 46.7514,
            longitude: 23.5758,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}>
          <Marker
            coordinate={{
              latitude: 46.7514,
              longitude: 23.5758,
              //latitude: Number(bikeData.lat),
              //longitude: Number(bikeData.lon),
            }}
            pinColor={'#7E5ABB'}>
            <Image
              source={require('../../assets/images/bikeicon.png')}
              style={{height: 40, width: 40}}
            />
          </Marker>
        </MapView>
      </View>
      {/**
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
       */}

      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: '5.5%',
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://ridedash.eu/')}>
          <Image
            source={require('../../assets/images/exclamation.png')}
            style={{height: 70, width: 70}}
          />
        </TouchableOpacity>
      </View>
      {/**
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
 */}

      <View
        style={{
          position: 'absolute',
          zIndex: 1000,
          bottom: '5.5%',
          alignSelf: 'flex-start',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigate(SAFETY_CENTER);
          }}>
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
          SendData();
          navigate(END_RIDE);
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
            //title={typeof ('' + bikeData.lon)}
            icon={<MaterialCommunityIcons name="line-scan" size={20} />}
          />
        </View>
      </TouchableOpacity>
      {/**
  <View style={{flex: 1}}>
        <SlidingPanel
          slidingPanelLayoutHeight={'50%'}
          slidingPanelLayout={() => (
            <View
              style={{
                backgroundColor: 'white',
                width: 390,
                marginHorizontal: -20,
                paddingHorizontal: 20,
                borderRadius: 25,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 5,
                }}>
                <Image
                  source={require('../../assets/images/battery.png')}
                  style={{width: 50, height: 50}}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginLeft: 15,
                    marginRight: 35,
                  }}>
                  23 km range
                </Text>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#F3F3F3',
                    paddingHorizontal: 15,
                    paddingVertical: 5,
                    borderRadius: 30,
                  }}>
                  <EvilIcons name="bell" size={25} />
                  <Text>Ring</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/xIcon2.png')}
                    style={{height: 60, width: 60}}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons
                  name="electric-bike"
                  size={25}
                  color={'#666666'}
                  style={{marginHorizontal: 10}}
                />
                <Text style={{color: '#666666'}}>Dash Electric XX-21</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <EvilIcons
                  name="credit-card"
                  size={30}
                  color={'#666666'}
                  style={{marginHorizontal: 10}}
                />
                <Text style={{color: '#666666'}}>0.5 RON/min</Text>
              </View>
              <Image
                source={require('../../assets/images/bike.jpeg')}
                style={{
                  height: 200,
                  width: 300,
                  marginHorizontal: 30,
                  marginTop: 20,
                }}
              />
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F3F3F3',
                  paddingHorizontal: 15,
                  paddingVertical: 6,
                  borderRadius: 30,
                  width: 150,
                  marginTop: 30,
                }}>
                <FeatherIcons name="alert-triangle" size={20} />
                <Text>Report issue</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '70%',
                  alignSelf: 'center',
                }}>
                <View>
                  <CustomButtonIcon
                    title="Reserve"
                    icon={<FeatherIcons name="lock" size={20} />}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
 */}
    </Container>
  );
};

export default MapComponent;
