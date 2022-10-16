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
  MENU,
  PAYMENT,
  ADD_CARD,
  MY_PROFILE,
  HISTORY_USER,
  VIP,
  PROMOTIONS,
  REFERRAL,
  SUBSCRIPTION,
} from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';
import History from '../screens/History';
import Agreement from '../screens/Agreement';
import Help from '../screens/Help';
import About from '../screens/About';
import SafetyCenter from '../screens/SafetyCenter';
import Map from '../components/Map';
import DrawerNavigator from './DrawerNavigator';
import Menu from '../screens/Menu';
import Payment from '../screens/Payment';
import AddCard from '../screens/Add card';
import MyProfile from '../screens/My profile';
import HistoryUser from '../screens/History user';
import Vip from '../screens/VIP';
import Promotions from '../screens/Promotions';
import Referral from '../screens/Referral';
import SubscriptionPlans from '../screens/SubscriptionPlans';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};
/**
 * 
 *       <AuthStack.Screen name={REFERRAL} component={Referral} />
<AuthStack.Screen name={PROMOTIONS} component={Promotions} />
 * <AuthStack.Screen name={SUBSCRIPTION} component={Subscription} />
 * <AuthStack.Screen name={VIP} component={Vip} />
 * <AuthStack.Screen name={HISTORY_USER} component={HistoryUser} />
 *<AuthStack.Screen name={MAP} component={Map} />
 <AuthStack.Screen name={PAYMENT} component={Payment} />
 <AuthStack.Screen name={SAFETY_CENTER} component={SafetyCenter} />
       <AuthStack.Screen name={ABOUT} component={About} />
      <AuthStack.Screen name={HELP} component={Help} />
      <AuthStack.Screen name={HISTORY} component={History} />
      <AuthStack.Screen name={MENU} component={Menu} />
      <AuthStack.Screen name={AGREEMENT} component={Agreement} />

<AuthStack.Screen name={MY_PROFILE} component={MyProfile} />
      <AuthStack.Screen name={ADD_CARD} component={AddCard} />
 */

export default AuthNavigator;
