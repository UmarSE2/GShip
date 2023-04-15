import React, { useEffect } from 'react'
import { Image, StyleSheet, View, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Intro Screen")
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require("../../Images/gshiplogo.png")} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: 'center'
    },
    image: {
        width: width * 0.6,
        height: height * 0.1,
        resizeMode: 'contain'
    }
})

export default SplashScreen;
