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
  SCAN_QR,
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

import SlidingUpPanel from 'rn-sliding-up-panel';
import ScanQR from '../../screens/ScanQR';

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
            latitude: 46.7655267,
            longitude: 23.605057,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
          }}>
          <Marker
            onPress={() => this._panel.show()}
            coordinate={{
              latitude: 46.7655267,
              longitude: 23.605057,
              //latitude: Number(bikeData.lat),
              //longitude: Number(bikeData.lon),
            }}
            pinColor={'#7E5ABB'}>
            <TouchableOpacity onPress={() => this._panel.close()}>
              <Image
                source={require('../../assets/images/bikeicon.png')}
                style={{height: 40, width: 40}}
              />
            </TouchableOpacity>
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
          top: '2%',
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
          //navigate(END_RIDE);
          navigate(SCAN_QR);
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
      <View>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          draggableRange={{top: 420, bottom: 0}}>
          <View style={styles.popupContainer}>
            <View style={styles.topRow}>
              <Image
                source={require('../../assets/images/battery-placeholder.png')}
                style={{height: 50, width: 50, alignSelf: 'center'}}
              />
              <Text style={styles.range}>23 km range</Text>
              <TouchableOpacity onPress={() => this._panel.hide()}>
                <View>
                  <TouchableOpacity style={styles.ringBtn}>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#F3F3F3',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 19,
                        borderWidth: 1,
                        borderColor: '#F3F3F3',
                        overflow: 'hidden',
                      }}>
                      <Image
                        source={require('../../assets/images/bell-icon.png')}
                        style={{height: 16, width: 16, alignSelf: 'center'}}
                      />
                      <Text
                        style={{
                          marginLeft: 5,
                          fontWeight: 'bold',
                          color: '#555555',
                          fontSize: 12,
                        }}>
                        Ring
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this._panel.hide()}
                style={styles.closeIcon}>
                <Image
                  source={require('../../assets/images/close.png')}
                  style={{height: 40, width: 40}}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.popupRow}>
              <Image
                source={require('../../assets/images/electric-bike.png')}
                style={{height: 18, width: 24}}
              />
              <Text style={{marginLeft: 10, color: '#666666'}}>
                Dash <Text style={{fontWeight: 'bold'}}>Electric </Text>
                XX-21
              </Text>
            </View>
            <View style={styles.popupRow}>
              <Image
                source={require('../../assets/images/credit-card.png')}
                style={{height: 18, width: 24}}
              />
              <Text style={{marginLeft: 10, color: '#666666'}}>
                <Text style={{fontWeight: 'bold'}}>0.55 </Text>
                RON/min
              </Text>
            </View>
            <Image
              source={require('../../assets/images/dash-bike.png')}
              style={{
                height: 133,
                width: 200,
                alignSelf: 'center',
                marginBottom: 20,
              }}
            />
            <TouchableOpacity style={styles.ringBtn}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F3F3F3',
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 19,
                  borderWidth: 1,
                  borderColor: '#F3F3F3',
                  overflow: 'hidden',
                  alignSelf: 'center',
                }}>
                <Image
                  source={require('../../assets/images/issue-icon.png')}
                  style={{height: 16, width: 16, alignSelf: 'center'}}
                />
                <Text
                  style={{
                    marginLeft: 5,
                    fontWeight: 'bold',
                    color: '#555555',
                    fontSize: 12,
                  }}>
                  Report issue
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SlidingUpPanel>
      </View>
    </Container>
  );
};

export default MapComponent;
