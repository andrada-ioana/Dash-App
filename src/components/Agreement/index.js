import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Container from '../../components/common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AgreementComponent = () => {
  const {navigate} = useNavigation();
  const [isSelected, setSelection] = useState(false);
  return (
    <Container>
      <Image
        source={require('../../assets/images/agreement.png')}
        style={styles.logoImage}
      />
      <Text style={styles.title}>Agree before proceeding</Text>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkbox}
            value={isSelected}
            onValueChange={setSelection}
          />
          <Text style={styles.label}>
            <Text>I confirm that I agree to Dash’s </Text>
            <TouchableOpacity>
              <Text style={styles.link}>User Agreement</Text>
            </TouchableOpacity>
            <Text> and I acknowledge that I have read Dash’s </Text>
            <TouchableOpacity>
              <Text style={styles.link}>Privacy Policy</Text>
            </TouchableOpacity>
            <Text> & </Text>
            <TouchableOpacity>
              <Text style={styles.link}>Conditions.</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>

      <CustomButton title="Next" />
    </Container>
  );
};

export default AgreementComponent;
