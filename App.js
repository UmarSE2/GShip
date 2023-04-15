import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/Welcome/SplashScreen';
import WelcomeScreen from './screens/Welcome/WelcomeScreen';
import Signin from './screens/Account/Signin';
import Register from './screens/Account/Register';
import OTP from './screens/Account/OTP';
import BottomNavigation from './screens/Home/BottomNavigation';
import Contact from './screens/Contact/ContactUs';
import Terms from './screens/Terms/Terms';
import IntroScreen from './screens/IntroSlider/IntroScreen';
import EditProfile from './screens/EditProfile/EditProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        {/* Splash  */}
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* Welcome  */}
        <Stack.Screen name="Welcome" component={WelcomeScreen} />

        {/* Sign In */}
        <Stack.Screen name="Signin" component={Signin} />

        {/* Register */}
        <Stack.Screen name="Register" component={Register} />

        {/* OTP */}
        <Stack.Screen name="OTP" component={OTP} />

        {/* BottomNavigation */}
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

        {/* Contact */}
        <Stack.Screen name="Contact" component={Contact} />

        {/* Terms */}
        <Stack.Screen name="Terms" component={Terms} />

        {/* Intro Screen */}
        <Stack.Screen name="Intro Screen" component={IntroScreen} />

        {/* Edit Profile */}
        <Stack.Screen name="Edit Profile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;