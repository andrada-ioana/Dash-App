import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {HOME_NAVIGATOR, PAYMENT, REGISTER} from '../../constants/routeNames';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-material-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import CustomButtonIcon from '../common/CustomButtonIcon';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import OcticonsIcon from 'react-native-vector-icons/Octicons';

const AddCardComponent = () => {
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
        <Text style={styles.title}>Add new card</Text>
        <TouchableOpacity
          onPress={() => {
            navigate(PAYMENT);
          }}>
          <Image
            source={require('../../assets/images/xIcon.png')}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{marginBottom: 5}}>Card number*</Text>
        <View style={styles.iconInput}>
          <Ionicons
            name="card"
            size={14}
            color={'#666666'}
            style={{marginLeft: 10}}
          />
          <View style={{marginTop: -20}}>
            <Input
              label=" "
              iconPosition="right"
              width={300}
              //error={'This field is required!'}
            />
          </View>
        </View>

        <View style={styles.cardInputs}>
          <View style={{paddingRight: 21}}>
            <Input
              label="Expiration date*"
              placeholder="MM/YY"
              iconPosition="right"
              maxLength={5}
              style={{width: 114}}
            />
          </View>

          <Input
            label="CVV*"
            placeholder="ex: 987"
            iconPosition="right"
            maxLength={3}
            style={{width: 114}}
          />
        </View>

        <Text style={{marginBottom: 5, marginTop: 20}}>Cardholder name*</Text>
        <View style={styles.iconInput}>
          <OcticonsIcon
            name="person"
            size={14}
            color={'#666666'}
            style={{marginLeft: 10}}
          />
          <View style={{marginTop: -20}}>
            <Input
              label=" "
              placeholder="Enter cardholder's name"
              iconPosition="right"
              width={300}
              //error={'This field is required!'}
            />
          </View>
        </View>

        <View style={styles.cardInputs}>
          {/**
           <Dropdown>
            <View>
              <TouchableOpacity
                style={styles.dropDownStyle}
                activeOpacity={0.8}
                onPress={() => setShowOption(true)}>
                <Text>Choose an option</Text>
                <Entypo name="chevron-thin-down" />
              </TouchableOpacity>
              {data.map((val, i) => {
                return <Text key={String(i)}>{val.name}</Text>;
              })}
            </View>
          </Dropdown>
           */}
          <View style={{paddingRight: 21}}>
            <Text style={{marginBottom: 5}}>Country*</Text>
            <View
              style={{
                paddingRight: 21,
                backgroundColor: '#E4E4E4',
                width: 220,
                height: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/romania.png')}
                style={{height: 10, width: 15, marginRight: 10, marginLeft: 10}}
              />
              <Text>Romania</Text>
              <EntypoIcon
                name="chevron-thin-down"
                size={14}
                color={'#666666'}
                style={{marginLeft: 100}}
              />
            </View>
          </View>

          <Input
            label="Zip code*"
            placeholder=""
            iconPosition="right"
            style={{width: 90}}
          />
        </View>

        <View style={{paddingTop: 26}}>
          <CustomButtonIcon
            title="Add card"
            icon={<SimpleLineIcons name="credit-card" size={20} />}
          />
        </View>
      </View>
    </Container>
  );
};

export default AddCardComponent;
