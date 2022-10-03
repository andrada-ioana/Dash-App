import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../common/CustomButton';
import SmallerCustomButton from '../common/SmallerCustomButton';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HOME_NAVIGATOR} from '../../constants/routeNames';

const VipComponent = () => {
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
        <Text style={styles.title}>VIP Membership</Text>
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
      <View>
        <Image
          source={require('../../assets/images/vip.png')}
          style={styles.logoImage}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 30,
        }}>
        <View style={{width: '20%', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#7E5ABB',
              borderRadius: 100,
              paddingVertical: 10,
              width: '60%',
              alignItems: 'center',
            }}>
            <Ionicons name="md-infinite-outline" size={22} color={'white'} />
          </View>
          <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12}}>
            Unlimited rides*
          </Text>
        </View>
        <View style={{width: '20%', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#7E5ABB',
              borderRadius: 100,
              paddingVertical: 10,
              width: '60%',
              alignItems: 'center',
            }}>
            <Ionicons name="md-alarm-outline" size={22} color={'white'} />
          </View>
          <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12}}>
            Free reserve for 60 minutes
          </Text>
        </View>
        <View style={{width: '20%', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#7E5ABB',
              borderRadius: 100,
              paddingVertical: 10,
              width: '60%',
              alignItems: 'center',
            }}>
            <Ionicons name="md-pricetag-outline" size={22} color={'white'} />
          </View>
          <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12}}>
            Everyday promos for friends
          </Text>
        </View>
        <View style={{width: '20%', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#7E5ABB',
              borderRadius: 100,
              paddingVertical: 10,
              width: '60%',
              alignItems: 'center',
            }}>
            <MaterialIcons name="speed" size={22} color={'white'} />
          </View>
          <Text style={{textAlign: 'center', paddingTop: 8, fontSize: 12}}>
            Speed up to 45 km/h**
          </Text>
        </View>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 20,
          paddingTop: 70,
          paddingBottom: 20,
          alignSelf: 'center',
        }}>
        Become a true elite rider
      </Text>
      <Text>UNLIMITED POSSIBILITES</Text>
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
          <Image
            source={require('../../assets/images/diamondVIP.png')}
            style={{
              width: '120%',
              position: 'absolute',
              marginTop: 20,
              height: 150,
            }}
          />
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#7E5ABB',
              paddingTop: 5,
            }}>
            1
          </Text>
          <Text style={{fontSize: 12, paddingBottom: 12}}>month</Text>
          <Text style={{fontWeight: 'bold', fontSize: 14, paddingBottom: 17}}>
            249,99 RON
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
          <Image
            source={require('../../assets/images/diamondVIP.png')}
            style={{
              width: '120%',
              position: 'absolute',
              marginTop: 20,
              height: 150,
            }}
          />
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#7E5ABB',
              paddingTop: 5,
            }}>
            6
          </Text>
          <Text style={{fontSize: 12, paddingBottom: 12}}>months</Text>
          <Text style={{fontWeight: 'bold', fontSize: 14, paddingBottom: 5}}>
            1349,99 RON
          </Text>
          <Text style={{fontSize: 12}}>10% off!</Text>
          <SmallerCustomButton title={'Select'} />
        </View>

        <View
          style={{
            backgroundColor: '#E4E4E4',
            borderRadius: 10,
            width: '31%',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/diamondVIP.png')}
            style={{
              width: '120%',
              position: 'absolute',
              marginTop: 20,
              height: 150,
            }}
          />
          <Text
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#7E5ABB',
              paddingTop: 5,
            }}>
            12
          </Text>
          <Text style={{fontSize: 12, paddingBottom: 12}}>months</Text>
          <Text style={{fontWeight: 'bold', fontSize: 14, paddingBottom: 5}}>
            2249,99 RON
          </Text>
          <Text style={{fontSize: 12}}>25% off!</Text>
          <SmallerCustomButton title={'Select'} />
        </View>
      </View>
      <View style={{paddingTop: 30}}>
        <Text style={{fontSize: 12}}>
          Every VIP plan will be in effect for the chosen period of time from
          the moment of acquisition.
        </Text>
        <Text style={{fontSize: 12}}>
          *Standard rates apply after 240 minutes per ride.
        </Text>
        <Text style={{fontSize: 12}}>
          ** Only if you are a verified driver.
        </Text>
      </View>
    </Container>
  );
};

export default VipComponent;
