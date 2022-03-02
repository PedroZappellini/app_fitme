import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthRoutes from './auth.routes';
import BottomTab from './bottomTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthContext from '../contexts/auth';

const Routes: React.FC = () => {
  const {signed} = useContext(AuthContext);
  const App = createNativeStackNavigator();
  return !signed ? <AuthRoutes /> : <BottomTab />;
};

export default Routes;
