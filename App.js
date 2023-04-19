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
import Crops from './screens/Agriculture/Crops';
import Weather from './screens/Agriculture/Weather';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Crops' screenOptions={{ headerShown: false }}>
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

        {/* Crops */}
        <Stack.Screen name="Crops" component={Crops} />

        {/* Weather */}
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

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
