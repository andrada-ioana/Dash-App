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

const ReferralComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={{}}>
        <Image
          source={require('../../assets/images/referral.png')}
          style={styles.logoImage}
        />
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
      <View>
        <Text style={{fontWeight: 'bold', marginTop: 18, fontSize: 16}}>
          Why ride alone?
        </Text>
        <Text style={{fontSize: 12, marginTop: 13}}>
          With every friend who joins Dash with your referral code, you both
          receive credits. More credits are always welcomed, right?
        </Text>
        <Image
          source={require('../../assets/images/referral2.png')}
          style={styles.iconImage2}
        />
        <Text style={{fontSize: 12, textAlign: 'center', marginTop: 10}}>
          Invite a friend and get 30% off your next ride!(Max RON 10 per trip)
        </Text>
        <Text style={{fontSize: 12, alignSelf: 'center'}}>
          Expires on: 31/9/2022
        </Text>
        <Text style={{marginTop: 25, fontSize: 12, alignSelf: 'center'}}>
          Share your code
        </Text>
        <CustomButton title={'RXX21B9676P'} />
      </View>
    </Container>
  );
};

export default ReferralComponent;
