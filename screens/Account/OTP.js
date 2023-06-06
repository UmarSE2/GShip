import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Alert, } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';

import Font from '../../components/Helper/Font';
import Color from '../../components/Helper/Color';
import Header from '../../components/Header';

const { width, height } = Dimensions.get('window');

const OTP = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { verificationId } = route.params;
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];

    const handleInputChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value !== '' && index < 5) {
            inputRefs[index + 1].current.focus();
        }
    };

    const confirmOTP = async () => {
        try {
            const phoneAuthProvider = firebase.auth.PhoneAuthProvider;
            const authCredential = phoneAuthProvider.credential(
                verificationId,
                otp.join('')
            );
            const userCredential = await firebase.auth().signInWithCredential(authCredential);
            navigation.navigate('TabFun', { user: userCredential.user });
        } catch (err) {
            console.log(err);
            Alert.alert("Wrong Code")
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.heading}>OTP Confirm</Text>
                <View style={styles.line} />
                <Text style={styles.otpmsg}>
                    Thank you for registering with us. Please type the OTP as shared on
                    your mobile xxxxxxxx123
                </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    {inputRefs.map((ref, index) => (
                        <TextInput
                            key={index}
                            style={styles.input}
                            value={otp[index]}
                            onChangeText={(value) => handleInputChange(index, value)}
                            maxLength={1}
                            ref={ref}
                            keyboardType="numeric"
                        />
                    ))}
                </View>
                <TouchableOpacity style={styles.btnConf} onPress={confirmOTP}>
                    <Text style={styles.btntxtConf}>Confirm</Text>
                </TouchableOpacity>
                <Text style={styles.footer}>If you have registered with us,
                    <Text style={{ color: Color.red }}
                        onPress={() => navigation.navigate('Signin')}> Sign in </Text>
                    with us
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: "-70%",
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: width * 0.05,
    },
    heading: {
        fontFamily: Font.bold,
        fontSize: 28,
        textAlign: "center",
    },
    line: {
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1,
        width: "65%",
        marginTop: "1%",
        alignSelf: "center"
    },
    otpmsg: {
        marginTop: "12%",
        textAlign: "center",
        fontFamily: Font.bold,
        fontSize: 18,
        alignSelf: "center",
        width: width * 0.9,
        lineHeight: 22,
    },
    input: {
        width: width * 0.14,
        height: height * 0.10,
        fontSize: 13,
        borderWidth: 2,
        borderColor: '#cccccc',
        fontFamily: Font.bold,
        alignSelf: "center",
        marginTop: "13%",
        fontSize: 30,
        textAlign: "center",
        borderRadius: 5,
    },
    btnConf: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: Color.black,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: "15%",
        marginBottom: "6%"
    },
    btntxtConf: {
        color: "white",
        textAlign: "center",
        fontFamily: Font.bold,
    },
    footer: {
        fontFamily: Font.regular,
        textAlign: "center",
    }
})

export default OTP;