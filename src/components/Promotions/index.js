import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HOME_NAVIGATOR} from '../../constants/routeNames';

const PromotionsComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage1}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Promotions</Text>
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

      <View>
        <TouchableOpacity
          style={styles.sectionDark}
          onPress={() => Linking.openURL('https://ridedash.eu/')}>
          <View style={styles.icon}>
            <SimpleLineIcons
              name="present"
              size={18}
              style={{marginRight: 10}}
            />
            <Text style={styles.textStyle}>Get free trips</Text>
          </View>
          <IconAntDesign name="right" size={24} color={'#666666'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sectionLight}
          onPress={() => Linking.openURL('https://ridedash.eu/')}>
          <View style={styles.icon}>
            <Ionicons
              name="md-pricetag-outline"
              size={20}
              style={{marginRight: 10}}
            />
            <Text style={styles.textStyle}>Insert a promo code</Text>
          </View>
          <IconAntDesign name="right" size={24} color={'#666666'} />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          paddingTop: 50,
          paddingBottom: 15,
        }}>
        Your promotions
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#7E5ABB',
          borderRadius: 10,
          height: 60,
          alignItems: 'center',
          paddingHorizontal: 20,
          marginBottom: 15,
        }}>
        <View>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
            15% off for 5 rides
          </Text>
          <Text style={{fontSize: 12, color: 'white'}}>Max 3 RON off.</Text>
        </View>
        <Text style={{fontSize: 12, color: 'white'}}>3 RIDES LEFT</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#7E5ABB',
          borderRadius: 10,
          height: 60,
          alignItems: 'center',
          paddingHorizontal: 20,
          marginBottom: 15,
        }}>
        <View>
          <Text style={{fontSize: 16, color: 'white', fontWeight: 'bold'}}>
            5% off any ride!
          </Text>
          <Text style={{fontSize: 12, color: 'white'}}>Max 3 RON off.</Text>
        </View>
        <Text style={{fontSize: 12, color: 'white'}}>EXPIRES IN 22H</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderRadius: 10,
          height: 60,
          backgroundColor: '#E4E4E4',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#666666'}}>
            15% off for 5 rides
          </Text>
          <Text style={{fontSize: 12, color: '#666666'}}>Max 3 RON off.</Text>
        </View>
        <Text style={{fontSize: 12, color: '#666666'}}>EXPIRED</Text>
      </View>
    </Container>
  );
};

export default PromotionsComponent;
