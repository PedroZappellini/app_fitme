import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthRoutes from './auth.routes';
import BottomTab from './bottomTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Routes: React.FC = () => {
  const App = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
