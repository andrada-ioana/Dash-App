import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {
  ABOUT,
  ADD_CARD,
  HELP,
  HISTORY,
  HISTORY_USER,
  HOME_NAVIGATOR,
  MY_PROFILE,
  PAYMENT,
  REGISTER,
  SAFETY_CENTER,
  PROMOTIONS,
  REFERRAL,
  SUBSCRIPTION,
  VIP,
} from '../constants/routeNames';
import MenuComponent from '../components/Menu';
import RegisterComponent from '../components/Signup';
import MyProfileComponent from '../components/My profile';
import PaymentComponent from '../components/Payment';
import HistoryComponent from '../components/History';
import HistoryUserComponent from '../components/History user';
import SafetyCenterComponent from '../components/SafetyCenter';
import HelpComponent from '../components/Help';
import AboutComponent from '../components/About';
import AddCardComponent from '../components/Add card';
import PromotionsComponent from '../components/Promotions';
import ReferralComponent from '../components/Referral';
import SubscriptionComponent from '../components/SubscriptionPlans';
import VipComponent from '../components/VIP';

const DrawerNavigator = ({navigation}) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator drawerContent={() => <MenuComponent />}>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
      <Drawer.Screen
        name={REGISTER}
        component={RegisterComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={MY_PROFILE}
        component={MyProfileComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={PAYMENT}
        component={PaymentComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={HISTORY}
        component={HistoryComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={SAFETY_CENTER}
        component={SafetyCenterComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={HELP}
        component={HelpComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={ABOUT}
        component={AboutComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={ADD_CARD}
        component={AddCardComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={PROMOTIONS}
        component={PromotionsComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={HISTORY_USER}
        component={HistoryUserComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={REFERRAL}
        component={ReferralComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={SUBSCRIPTION}
        component={SubscriptionComponent}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={VIP}
        component={VipComponent}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
