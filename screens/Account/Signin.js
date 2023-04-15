import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
import PhoneInput from 'react-native-phone-number-input';
const { width, height } = Dimensions.get('window');

import Font from '../../components/Helper/Font';
import Color from '../../components/Helper/Color';
import Header from '../../components/Header'

const Signin = () => {
    const navigation = useNavigation();
    const [phoneNumber, setphoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const phoneInput = useRef(null);

    const sendOTP = async () => {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            navigation.navigate('OTP', { verificationId: confirmation.verificationId });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.heading}>My Account</Text>
                <View style={styles.line} />
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="PK"
                    layout="first"
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textInput}
                    codeTextStyle={styles.codeTextStyle}
                    countryPickerButtonStyle={styles.countryPickerButtonStyle}
                    placeholder='Mobile Number'
                    textInputProps={{ placeholderTextColor: '#BCB8B1' }}
                    textInputStyle={styles.textInputStyle}
                    value={phoneNumber}
                    onChangeFormattedText={text => {
                        setphoneNumber(text);
                    }}
                    onChangeText={setphoneNumber}
                />
                <TextInput
                    style={[styles.input, { marginTop: "6%" }]}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <Text style={styles.pass}>Forget Password?</Text>
                <TouchableOpacity style={styles.btnSign} onPress={sendOTP}>
                    <Text style={styles.btntxtSign}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={styles.footer}>If you don't have registered with us,
                    <Text style={{ color: Color.red }} onPress={() => navigation.navigate("Register")}> Registration </Text>
                    will be required</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "-66%",
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: width * 0.05,
    },
    heading: {
        fontFamily: Font.bold,
        fontSize: 29,
        textAlign: "center",
    },
    line: {
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1,
        width: "55%",
        marginTop: height * 0.01,
        alignSelf: "center",
        marginBottom: height * 0.07
    },
    input: {
        width: width * 0.9,
        height: height * 0.063,
        fontSize: 15,
        borderWidth: 2,
        borderColor: '#cccccc',
        fontFamily: Font.bold,
        alignSelf: "center",
        paddingLeft: 12,
        marginTop: "15%"
    },
    pass: {
        fontFamily: Font.regular,
        fontSize: 15,
        marginTop: "2.5%"
    },
    btnSign: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: Color.black,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: height * 0.05,
        marginBottom: "6%"
    },
    btntxtSign: {
        color: "white",
        textAlign: "center",
        fontFamily: Font.bold,
    },
    footer: {
        width: width * 0.6,
        lineHeight: 20,
        fontFamily: Font.regular,
        textAlign: "center",
        alignSelf: "center"
    },
    phoneContainer: {
        width: width * 0.9,
        height: height * 0.063,
        fontSize: 15,
        borderWidth: 2,
        borderColor: '#cccccc',
        fontFamily: Font.bold,
        alignSelf: "center",
        marginTop: "6%",
    },
    textInput: {
        paddingVertical: 0,
        backgroundColor: "white"
    },
    countryPickerButtonStyle: {
        width: width * 0.17
    },
})

export default Signin;