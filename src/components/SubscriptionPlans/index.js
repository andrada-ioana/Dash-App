import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import SmallerCustomButton from '../common/SmallerCustomButton';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HOME_NAVIGATOR} from '../../constants/routeNames';

const SubscriptionComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage2}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Subscription plans</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(HOME_NAVIGATOR);
          }}>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 12}}>CHOOSE WHAT FITS YOU BEST</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 11,
        }}>
        <View
          style={{
            backgroundColor: '#E4E4E4',
            borderRadius: 10,
            width: '31%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#7E5ABB',
              paddingTop: 5,
            }}>
            1
          </Text>
          <Text style={{fontSize: 12, paddingBottom: 12}}>hour</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingBottom: 5}}>
            9,99 RON
          </Text>
          <SmallerCustomButton title={'Select'} />
        </View>
        <View
          style={{
            backgroundColor: '#E4E4E4',
            borderRadius: 10,
            width: '31%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#7E5ABB',
              paddingTop: 5,
            }}>
            24
          </Text>
          <Text style={{fontSize: 12, paddingBottom: 12}}>hours</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingBottom: 5}}>
            39,99 RON
          </Text>
          <SmallerCustomButton title={'Select'} />
        </View>
        <View
          style={{
            backgroundColor: '#E4E4E4',
            borderRadius: 10,
            width: '31%',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#7E5ABB',
              paddingTop: 5,
            }}>
            72
          </Text>
          <Text style={{fontSize: 12, paddingBottom: 12}}>hours</Text>
          <Text style={{fontWeight: 'bold', fontSize: 16, paddingBottom: 5}}>
            99,99 RON
          </Text>
          <SmallerCustomButton title={'Select'} />
        </View>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingTop: 16}}>
        <Ionicons
          name="md-infinite-outline"
          size={22}
          style={{paddingRight: 10}}
        />
        <Text style={{fontSize: 12}}>Enjoy unlimited rides* with no fees</Text>
      </View>
      <View
        style={{flexDirection: 'row', alignItems: 'center', paddingTop: 16}}>
        <Ionicons
          name="md-alarm-outline"
          size={22}
          style={{paddingRight: 10}}
        />
        <Text style={{fontSize: 12}}>
          Reserve your bike for 30 minutes with no charges
        </Text>
      </View>
      <View style={{paddingTop: '90%'}}>
        <Text style={{fontSize: 12, marginBottom: 5}}>
          Every subscription plan will be in effect for the chosen period of
          time from the moment of acquisition.{' '}
        </Text>
        <Text style={{fontSize: 12}}>
          *Standard rates apply after 120 minutes per ride.
        </Text>
      </View>
    </Container>
  );
};

export default SubscriptionComponent;
