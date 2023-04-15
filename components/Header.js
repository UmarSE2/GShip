import React from 'react'
import { StyleSheet, Image, View, Dimensions } from 'react-native'
import Color from './Helper/Color';
const { width, height } = Dimensions.get('window');

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.triangleBlack} />
            <View style={styles.triangleRed} />
            <Image source={require("../Images/gshiplogo.png")} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: height * 0.01,
    },
    triangleBlack: {
        width: 0,
        height: 0,
        marginTop: "-68%",
        position: "absolute",
        marginginTop: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 35,
        borderRightWidth: 35,
        borderTopWidth: 650,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: Color.black,
        transform: [{ rotate: "90deg" }]
    },
    triangleRed: {
        width: 0,
        height: 0,
        marginTop: "-57%",
        position: "absolute",
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 35,
        borderRightWidth: 35,
        borderBottomWidth: 650,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: Color.red,
        transform: [{ rotate: "90deg" }]
    },
    image: {
        position: "absolute",
        marginTop: "32%",
        width: width * 0.3,
        height: height * 0.02,
        resizeMode: 'contain',
    }
})

export default Header;