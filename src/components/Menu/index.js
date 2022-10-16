import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import {
  ABOUT,
  HELP,
  HISTORY,
  MY_PROFILE,
  PAYMENT,
  REGISTER,
  SAFETY_CENTER,
  HISTORY_USER,
  PROMOTIONS,
  VIP,
  REFERRAL,
  SUBSCRIPTION,
  HOME_NAVIGATOR,
  AGREEMENT,
  ADD_CARD,
  LOGIN,
  MAP,
} from '../../constants/routeNames';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const MenuComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container style={{}}>
      <View style={{marginTop: '20%', backgroundColor: 'white'}}>
        <View style={styles.iconImage}>
          <Text style={styles.title}>Welcome back!</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(HOME_NAVIGATOR);
            }}>
            <Image
              source={require('../../assets/images/xIconMenu.png')}
              style={styles.iconImage2}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate(MY_PROFILE);
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/dog.png')}
              style={styles.iconImage3}
            />
            <View>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>
                Marc Vana
              </Text>
              <Text style={{fontSize: 12}}>Edit profile</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.statistics}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/bike.png')}
              style={{width: 30, height: 20}}
            />
            <View style={{marginLeft: 6}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>1</Text>
              <Text>Rides</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/electricbike.png')}
              style={{width: 30, height: 20}}
            />
            <View style={{marginLeft: 8}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>4</Text>
              <Text>Rides</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/images/location2.png')}
              style={{width: 30, height: 30}}
            />
            <View style={{marginLeft: 3}}>
              <Text style={{fontWeight: 'bold', fontSize: 12}}>9</Text>
              <Text>Km</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            navigate(PAYMENT);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 16.5,
            }}>
            <Octicons name="credit-card" size={24} style={{marginRight: 20}} />
            <Text>Payment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate(HISTORY_USER);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 13,
              marginTop: 25,
            }}>
            <MaterialIcons name="history" size={28} style={{marginRight: 20}} />
            <Text>History</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate(PROMOTIONS);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 25,
            }}>
            <Ionicons
              name="pricetag-outline"
              size={28}
              style={{marginRight: 18}}
            />
            <Text>Promo codes</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate(REFERRAL);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 25,
            }}>
            <SimpleLineIcons
              name="present"
              size={24}
              style={{marginRight: 22}}
            />
            <Text>Free credits</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate(SUBSCRIPTION);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 25,
            }}>
            <EvilIcons name="bell" size={35} style={{marginRight: 15}} />
            <Text>Subscription</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate(HELP);
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: 25,
            }}>
            <Image
              source={require('../../assets/images/helpIcon.png')}
              style={{width: 24, height: 24, marginRight: 22}}
            />
            <Text>Help</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate(VIP);
          }}>
          <View
            style={{
              flexDirection: 'row',
              //alignItems: 'center',
              alignContent: 'center',
              backgroundColor: '#7E5ABB',
              padding: 10,
              paddingTop: 20,
              paddingBottom: 20,
              borderRadius: 10,
              marginTop: 44,
            }}>
            <Image
              source={require('../../assets/images/diamond.png')}
              style={styles.diamond}
            />
            <View style={{flex: 1}}>
              <Text style={{color: 'white', fontWeight: 'bold', flex: 0.5}}>
                Get VIP Membership
              </Text>
              <Text style={{color: 'white'}}>
                And enjoy all the benefits which come with this status.
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={{marginTop: 60}}>Dash v0.6</Text>
      </View>
    </Container>
  );
};

export default MenuComponent;
