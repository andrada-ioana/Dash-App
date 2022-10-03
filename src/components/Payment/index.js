import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, Image, Linking, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import styles from './styles';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../common/CustomButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import {ADD_CARD, HOME_NAVIGATOR} from '../../constants/routeNames';

const PaymentComponent = () => {
  const {navigate} = useNavigation();

  const [apple, setApple] = useState(false);
  const [samsung, setSamsung] = useState(false);

  const appleButton = () => {
    setApple(true);
    setSamsung(false);
  };

  const samsungButton = () => {
    setApple(false);
    setSamsung(true);
  };

  return (
    <Container>
      <View style={styles.navBar}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage1}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Payment</Text>
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

      <Text style={styles.subTitle}>PAYMENT METHODS</Text>
      <View>
        <View style={styles.sectionDark}>
          <CheckBox
            style={styles.checkbox}
            value={apple}
            onValueChange={appleButton}
          />
          <FontAwesome
            name="apple-pay"
            size={24}
            color={'black'}
            style={{marginLeft: 20}}
          />
          <Text style={styles.textStyle}>Apple Pay</Text>
        </View>

        <View style={styles.sectionLight}>
          <CheckBox
            style={styles.checkbox}
            value={samsung}
            onValueChange={samsungButton}
          />
          <Image
            source={require('../../assets/images/samsungpay.png')}
            style={{marginLeft: 20, width: 27, height: 27}}
          />
          <Text style={styles.textStyle}>Samsung Pay</Text>
        </View>
        <View style={styles.sectionDark}>
          <Octicons
            name="credit-card"
            size={24}
            color={'black'}
            style={{marginRight: 20, marginLeft: 6}}
          />
          <TouchableOpacity
            onPress={() => {
              navigate(ADD_CARD);
            }}>
            <Text
              style={
                (styles.textStyle, {color: '#7E5ABB', fontWeight: 'bold'})
              }>
              Add new card
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 55}}>
          <Text style={styles.message}>
            A small amount may be temporarily placed on hold when you start your
            ride.
            <TouchableOpacity>
              <Text style={styles.learnMoreBtn}> Learn more.</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </Container>
  );
};

export default PaymentComponent;
