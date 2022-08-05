import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';

const LoginComponent = () => {
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        source={require('../../assets/images/login.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subTitle}>Let's get you signed in.</Text>

        <View style={styles.form}>
          <Input
            label="Email*"
            iconPosition="right"
            placeholder="Enter your email"
            //error={'This field is required!'}
          />

          <Input
            label="Password*"
            placeholder="Enter your password"
            secureTextEntry={true}
            iconPosition="right"
          />

          <TouchableOpacity>
            <Text style={styles.linkBtnForgotPassword}>Forgot password?</Text>
          </TouchableOpacity>

          <CustomButton title="Log in" />
          <View style={styles.createSection}>
            <Text style={styles.infoText}>Not a member?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Sign up.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
