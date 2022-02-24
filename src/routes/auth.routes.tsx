import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome/index';
import SignIn from '../pages/SignInScreen/index';
import SignUp from '../pages/SignUpScreen/index';
import HomeScreen from '../pages/HomeScreen/index';

const AuthRoutes: React.FC = () => {
  const Login = createNativeStackNavigator();
  return (
    <>
      <Login.Navigator
        initialRouteName="Welcome"
        screenOptions={{headerShown: false}}>
        <Login.Screen name="Welcome" component={Welcome} />
        <Login.Screen name="SignIn" component={SignIn} />
        <Login.Screen name="SignUp" component={SignUp} />
        <Login.Screen name="HomeScreen" component={HomeScreen} />
      </Login.Navigator>
    </>
  );
};

export default AuthRoutes;
