import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../pages/HomeScreen/index';
import Settings from '../pages/SettingsScreen/index';
import Feed from '../pages/FeedScreen/index';
import Profile from '../pages/ProfileScreen/index';
import MyShares from '../pages/MyShares';

import defaultTheme from '../theme';
import {TouchableOpacity, View} from 'react-native';

const BottomTab: React.FC = () => {
  const [border, setBorder] = useState(false);
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 1,
          borderColor: defaultTheme.colors.grayInput,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: defaultTheme.colors.orangeButton,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MyShares"
        component={MyShares}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="sharealt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: () => (
            <View
              style={{
                position: 'absolute',
                bottom: 3,
                width: 60,
                height: 60,
                borderColor:
                  border === true
                    ? defaultTheme.colors.orangeButton
                    : defaultTheme.colors.white,
                borderRadius: 30,
                backgroundColor: defaultTheme.colors.white,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5,
              }}>
              <AntDesign
                onPress={() => setBorder(true)}
                name="heart"
                size={30}
                color={defaultTheme.colors.orangeButton}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({size, color}) => (
            <Feather name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
