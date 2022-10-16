import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import SmallerCustomButton from '../common/SmallerCustomButton';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HOME_NAVIGATOR} from '../../constants/routeNames';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButtonIcon from '../common/CustomButtonIcon';
import FeatherIcon from 'react-native-vector-icons/Feather';

const ReferralComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View
        style={{
          backgroundColor: '#B6A0D7',
          width: 1000,
          height: 40,
          marginLeft: -100,
          marginBottom: -20,
          marginTop: -20,
        }}
      />

      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          marginLeft: '70%',
          marginTop: '10%',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigate(HOME_NAVIGATOR);
          }}>
          <Image
            source={require('../../assets/images/xIconReferral.png')}
            resizeMode="contain"
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      <View style={{position: 'relative', zIndex: -1}}>
        <Image
          source={require('../../assets/images/referral.png')}
          style={styles.logoImage}
        />
      </View>

      <View style={{}}>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 18,
            fontSize: 18,
            alignSelf: 'center',
          }}>
          Why ride alone?
        </Text>
        <Image
          source={require('../../assets/images/referral2.png')}
          style={styles.iconImage2}
        />
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            marginTop: 10,
            color: '#666666',
          }}>
          Invite a friend and get 30% off your next ride!
        </Text>
        <Text
          style={{
            fontSize: 14,
            textAlign: 'center',
            color: '#666666',
          }}>
          (Max RON 10 per trip)
        </Text>
        <Text
          style={{
            fontSize: 14,
            alignSelf: 'center',
            color: '#666666',
            marginTop: 20,
          }}>
          Expires on: 31/9/2022
        </Text>
        <Text
          style={{
            marginTop: 25,
            fontSize: 14,
            alignSelf: 'center',
            color: '#666666',
          }}>
          Share your code
        </Text>
        <View style={{paddingTop: 18}}>
          <CustomButtonIcon
            title="RXX21B9676P"
            icon={<FeatherIcon name="share" size={20} />}
          />
        </View>
      </View>
    </Container>
  );
};

export default ReferralComponent;
