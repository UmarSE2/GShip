import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Video from 'react-native-video';
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Intro Screen")
    }, 3000)
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Video
        resizeMode="contain"
        source={require('../../Images/Umeedesahar.mp4')}
        style={styles.mediaPlayer}
        volume={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
});

export default SplashScreen;