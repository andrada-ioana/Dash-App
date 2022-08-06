import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  LOGIN,
  REGISTER,
  HISTORY,
  AGREEMENT,
  HELP,
  ABOUT,
  SAFETY_CENTER,
  MAP,
} from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';
import History from '../screens/History';
import Agreement from '../screens/Agreement';
import Help from '../screens/Help';
import About from '../screens/About';
import SafetyCenter from '../screens/SafetyCenter';
import Map from '../components/Map';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={MAP} component={Map} />
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};
/**
 *<AuthStack.Screen name={SAFETY_CENTER} component={SafetyCenter} />
      <AuthStack.Screen name={ABOUT} component={About} />
      <AuthStack.Screen name={HELP} component={Help} />
      <AuthStack.Screen name={AGREEMENT} component={Agreement} />
      <AuthStack.Screen name={HISTORY} component={History} />
 */

export default AuthNavigator;
