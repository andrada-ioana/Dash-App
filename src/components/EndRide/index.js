import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  Linking,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {HOME_NAVIGATOR} from '../../constants/routeNames';
import CustomButtonIcon from '../common/CustomButtonIcon';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import {Stopwatch} from 'react-native-stopwatch-timer';
import axios from 'axios';

const screen = Dimensions.get('window');

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return {
    mins: formatNumber(mins),
    secs: formatNumber(secs),
  };
};

const EndRideComponent = () => {
  const {navigate} = useNavigation();

  const baseUrl = 'http://78.96.150.138:11081/jsonTest/api/upload/status';

  const SendData = async () => {
    axios
      .post(baseUrl, {
        status: '0',
      })
      .then(response => console.log(response.data))
      .catch(console.log('error'));
  };

  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const {mins, secs} = getRemaining(remainingSecs);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setRemainingSecs(0);
    //setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  useEffect(() => {
    toggle();
  }, []);

  return (
    <Container>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage1}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Current ride</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(HOME_NAVIGATOR);
          }}>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage2}
          />
        </TouchableOpacity>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: '10%'}}>
        Dash Electric XX-21
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/battery.png')}
            style={{width: 50, height: 50}}
          />
          <Text style={{fontSize: 16, marginHorizontal: 5}}>23 km range</Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#E4E4E4',
            margin: 10,
            paddingVertical: 5,
            paddingHorizontal: 20,
            borderRadius: 20,
          }}>
          <IconFeather name="alert-triangle" size={15} />
          <Text style={{fontSize: 12, marginLeft: 7}}>Report issue</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 50}}>
        Current ride
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
        <Image
          source={require('../../assets/images/time.png')}
          style={{width: 50, height: 50}}
        />

        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              marginLeft: 10,
            }}>{`00h ${mins}m ${secs}s`}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <Image
          source={require('../../assets/images/price.png')}
          style={{width: 50, height: 50}}
        />
        <Text style={{fontSize: 36, fontWeight: 'bold', marginLeft: 10}}>
          {`$${0.5 * mins}`}
        </Text>
      </View>
      <View style={{marginTop: 250}}>
        <CustomButtonIcon
          title="End ride"
          icon={<IconFeather name="x-circle" size={20} />}
          onPress={() => {
            SendData();
            navigate(HOME_NAVIGATOR);
            reset();
          }}
        />
      </View>
    </Container>
  );
};

export default EndRideComponent;
