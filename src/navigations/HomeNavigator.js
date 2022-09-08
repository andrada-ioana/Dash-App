import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MAP} from '../constants/routeNames';
import Map from '../components/Map';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName={MAP}>
      <HomeStack.Screen name={MAP} component={Map} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
