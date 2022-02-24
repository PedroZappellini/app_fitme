import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/Welcome/index';
import SignIn from '../pages/SignInScreen/index';
import SignUp from '../pages/SignUpScreen/index';
import HomeScreen from '../pages/HomeScreen/index';
import ForgotPassword from '../pages/ForgotPassword';
import AskingPIN from '../pages/ForgotPassword/AskingPIN/index';
import NewPassword from '../pages/ForgotPassword/NewPassword';

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
        <Login.Screen name="ForgotPassword" component={ForgotPassword} />
        <Login.Screen name="AskingPIN" component={AskingPIN} />
        <Login.Screen name="NewPassword" component={NewPassword} />
      </Login.Navigator>
    </>
  );
};

export default AuthRoutes;
