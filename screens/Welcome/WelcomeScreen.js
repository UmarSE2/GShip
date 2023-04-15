import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window');

import Font from '../../components/Helper/Font';
import Color from '../../components/Helper/Color';
import Header from '../../components/Header'

const WelcomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.heading}>LOREM IPSUM</Text>
                <Text style={styles.heading2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry in 1950</Text>
                <TouchableOpacity style={styles.btnSign} onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.btntxtSign}>SIGN IN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnReg} onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.btntxtReg}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        marginTop: "100%",
        width: width,
    },
    heading: {
        textAlign: "center",
        fontSize: 26,
        fontFamily: Font.bold,
    },
    heading2: {
        marginTop: "3%",
        textAlign: "center",
        fontFamily: Font.regular,
        fontSize: 15,
        width: "80%",
        alignSelf: "center",
        color: "#b3b3b3"
    },
    btnSign: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: Color.black,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: "18%",
        marginBottom: "6%"
    },
    btntxtSign: {
        color: "white",
        textAlign: "center",
        fontFamily: Font.bold,
    },
    btnReg: {
        width: width * 0.9,
        height: height * 0.08,
        borderWidth: 2,
        borderColor: Color.black,
        alignSelf: "center",
        justifyContent: "center"
    },
    btntxtReg: {
        color: Color.black,
        textAlign: "center",
        fontFamily: Font.bold,
    },
})

export default WelcomeScreen;
