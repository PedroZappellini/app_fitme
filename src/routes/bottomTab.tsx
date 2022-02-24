import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/HomeScreen/index';

const BottomTab: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomTab;
