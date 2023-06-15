import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

import Home from './screens/Home/Home';
import Cart from './screens/Home/Cart';
import Profile from './screens/Home/Profile';
import SplashScreen from './screens/Welcome/SplashScreen';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import Signin from './screens/Account/Signin';
import Register from './screens/Account/Register';
import OTP from './screens/Account/OTP';
import Contact from './screens/Contact/ContactUs';
import Terms from './screens/Terms/Terms';
import IntroScreen from './screens/IntroSlider/IntroScreen';
import EditProfile from './screens/EditProfile/EditProfile';
import Crops from './screens/Agriculture/Crops';
import Weather from './screens/Agriculture/Weather';
import AboutUs from './screens/AboutUS/AboutUs';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const CropsStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="SplashScreen">
        <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Signin" component={Signin} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="OTP" component={OTP} />
        <AuthStack.Screen name="Intro Screen" component={IntroScreen} />
        <AuthStack.Screen name="TabFun" component={TabFun} />
        <AuthStack.Screen name="HomeFun" component={HomeFun} />
        <AuthStack.Screen name="Profile" component={Profile} />
        <AuthStack.Screen name="Cart" component={Cart} />
        <AuthStack.Screen name="Home" component={Home} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

function HomeFun() {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Cart" component={Cart} />
    </HomeStack.Navigator>
  );
}

function ProfileFun() {
  return (
    <ProfileStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="StrategyNonCustom">
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Contact" component={Contact} />
      <ProfileStack.Screen name="Edit Profile" component={EditProfile} />
      <ProfileStack.Screen name="Terms" component={Terms} />
      <ProfileStack.Screen name="AboutUs" component={AboutUs} />
    </ProfileStack.Navigator>

  );
}

function CropsFun() {
  return (
    <CropsStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Crops">
      <CropsStack.Screen name="Crops" component={Crops} />
      <CropsStack.Screen name="Weather" component={Weather} />
    </CropsStack.Navigator>

  );
}

const Tab = createBottomTabNavigator();
function TabFun() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeFun">
      <Tab.Screen
        name="HomeFun"
        component={HomeFun}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? '#6F49DD' : '#000000'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CropsFun1"
        component={CropsFun}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="agriculture"
              color={focused ? '#6F49DD' : '#000000'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CropsFun"
        component={CropsFun}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Entypo
              name="unread"
              color={focused ? '#6F49DD' : '#000000'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileFun"
        component={ProfileFun}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name="user"
              color={focused ? '#6F49DD' : '#000000'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}