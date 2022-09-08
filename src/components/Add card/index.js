import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import {Dropdown} from 'react-native-material-dropdown';
import Entypo from 'react-native-vector-icons/Entypo';

{
  /**
let npm i react-native-dropdown-pickerdata = [
  {id: 1, name: 'Mango'},
  {id: 2, name: 'Banana'},
  {id: 3, name: 'Apple'},
];*/
}

const AddCardComponent = () => {
  const {navigate} = useNavigation();

  {
    /**
  const [selectedItem, setSelectedItem] = useState(null);
  const onSelect = item => {
    setSelectedItem(item);
  };
  const [showOption, setShowOption] = useState(false);
*/
  }

  return (
    <Container>
      <View style={styles.navBar}>
        <IconAntDesign name="close" size={24} color={'transparent'} />
        <Text style={styles.title}>Add new credit card</Text>
        <TouchableOpacity>
          <IconAntDesign name="close" size={24} color={'#666666'} />
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text>Card number*</Text>
        <View style={styles.iconInput}>
          <Ionicons
            name="card"
            size={14}
            color={'#666666'}
            style={{marginLeft: 10}}
          />
          <Input
            placeholder="asdfghjk"
            iconPosition="right"
            //error={'This field is required!'}
          />
        </View>

        <Input
          label="Card number*"
          placeholder="Enter your card number"
          iconPosition="right"
        />

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

        <Input
          label="Cardholder name*"
          placeholder="Enter cardholder's name"
          iconPosition="right"
        />

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
            <Input
              label="Country*"
              placeholder="United States"
              iconPosition="right"
              style={{width: 200}}
            />
          </View>

          <Input
            label="Zip code*"
            placeholder=""
            iconPosition="right"
            style={{width: 90}}
          />
        </View>

        <View style={{paddingTop: 26}}>
          <CustomButton title="Add card" />
        </View>
      </View>
    </Container>
  );
};

export default AddCardComponent;
