import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import styles from './styles';
import {LOGIN} from '../../constants/routeNames';

const RegisterComponent = ({onSubmit, onChange, form, errors}) => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/register.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to Dash!</Text>
        <Text style={styles.subTitle}>Let’s get you started.</Text>
        <View>
          <View style={styles.form}>
            <Input
              style={styles.nameInput}
              label="First Name*"
              iconPosition="right"
              placeholder="Enter your first name"
              onChangeText={value => {
                onChange({name: 'firstName', value});
              }}
              error={errors.firstName}
            />

            <Input
              style={styles.nameInput}
              label="Last Name*"
              iconPosition="right"
              placeholder="Enter your last name"
              onChangeText={value => {
                onChange({name: 'lastName', value});
              }}
              error={errors.lastName}
            />
          </View>

          <Input
            style={styles.genericInput}
            label="Email*"
            iconPosition="right"
            placeholder="Enter your email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />

          <Input
            style={styles.genericInput}
            label="Password*"
            placeholder="Enter your password"
            secureTextEntry={true}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />

          <CustomButton onPress={onSubmit} primary title="Sign up" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already a member?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Log in.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
