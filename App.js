import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';



import Home from './screens/Home/Home';
import Search from './screens/Home/Search';
import Cart from './screens/Home/Cart';
import Profile from './screens/Home/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

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
        screenOptions={{headerShown: false}}
        initialRouteName="TabFun">
        <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Signin" component={Signin} />
        <AuthStack.Screen name="Register" component={Register} />
        <AuthStack.Screen name="OTP" component={OTP} />
        <AuthStack.Screen name="Intro Screen" component={IntroScreen} />
        <AuthStack.Screen name="TabFun" component={TabFun} />
       

      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
function HomeFun() {
  return (
    <HomeStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Cart" component={Cart} />
    </HomeStack.Navigator>
  );
}
function ProfileFun() {
  return (
    <ProfileStack.Navigator
      screenOptions={{headerShown: false}}
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
      screenOptions={{headerShown: false}}
      initialRouteName="Crops">
      <CropsStack.Screen name="Crops" component={Crops} />
      <CropsStack.Screen name="Weather" component={Weather} />
    </CropsStack.Navigator>
    
  );
}

const Tab = createBottomTabNavigator();
function TabFun() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeFun">
      <Tab.Screen
        name="HomeFun"
        component={HomeFun}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size, focused}) => (
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
          tabBarIcon: ({color, size, focused}) => (
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
          tabBarIcon: ({color, size, focused}) => (
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
          tabBarIcon: ({color, size, focused}) => (
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
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='BottomNavigation' screenOptions={{ headerShown: false }}>
//         {/* Splash  */}
//         <Stack.Screen name="Splash" component={SplashScreen} />

//         {/* Welcome  */}
//         <Stack.Screen name="Welcome" component={WelcomeScreen} />

//         {/* Sign In */}
//         <Stack.Screen name="Signin" component={Signin} />

//         {/* Register */}
//         <Stack.Screen name="Register" component={Register} />

//         {/* OTP */}
//         <Stack.Screen name="OTP" component={OTP} />

//         {/* BottomNavigation */}
//         <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

//         {/* Contact */}
//         <Stack.Screen name="Contact" component={Contact} />

//         {/* Terms */}
//         <Stack.Screen name="Terms" component={Terms} />

//         {/* Intro Screen */}
//         <Stack.Screen name="Intro Screen" component={IntroScreen} />

//         {/* Edit Profile */}
//         <Stack.Screen name="Edit Profile" component={EditProfile} />

//         {/* Crops */}
//         <Stack.Screen name="Crops" component={Crops} />

//         {/* Weather */}
//         <Stack.Screen name="Weather" component={Weather} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App;

// import React from 'react';
// import { ScrollView, View, Image, StyleSheet } from 'react-native';

// const IMAGES_PER_ROW = 2; // Number of images per row
// const images = [
//   { id: 1, source: require('./Images/bag.jpg') },
//   { id: 2, source: require('./Images/basketMan.jpg') },
//   { id: 3, source: require('./Images/bag.jpg') },
//   { id: 4, source: require('./Images/basketMan.jpg') },
//   { id: 3, source: require('./Images/bag.jpg') },
//   { id: 4, source: require('./Images/basketMan.jpg') },
//   { id: 3, source: require('./Images/bag.jpg') },
//   { id: 4, source: require('./Images/basketMan.jpg') },
//   { id: 3, source: require('./Images/bag.jpg') },
//   { id: 4, source: require('./Images/basketMan.jpg') },
//   { id: 3, source: require('./Images/bag.jpg') },
//   { id: 4, source: require('./Images/basketMan.jpg') },
//   // add more images here...
// ];

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   card: {
//     width: '49%',
//     marginBottom: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
// });

// export default function App() {
//   const rows = Math.ceil(images.length / IMAGES_PER_ROW); // Calculate the number of rows needed
//   const rowsArray = Array.from(Array(rows).keys()); // Create an array with the length of the number of rows

//   return (
//     <ScrollView>
//       {rowsArray.map((row, rowIndex) => (
//         <View key={rowIndex} style={styles.container}>
//           {images.slice(rowIndex * IMAGES_PER_ROW, (rowIndex + 1) * IMAGES_PER_ROW).map((image) => (
//             <View key={image.id} style={styles.card}>
//               <Image source={image.source} style={styles.image} />
//             </View>
//           ))}
//         </View>
//       ))}
//     </ScrollView>
//   );
// }
