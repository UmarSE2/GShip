import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window');
import PhoneInput from 'react-native-phone-number-input';

import Font from '../../components/Helper/Font';
import Color from '../../components/Helper/Color';
import Header from '../../components/Header'
import Terms from '../Terms/Terms';

const Register = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showTerms, setShowTerms] = useState(false);

    const handleRegister = () => {
        setShowTerms(true);
    };

    const handleCloseTerms = () => {
        setShowTerms(false);
    };

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.heading}>Registration</Text>
                <View style={styles.line} />
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder='Name'
                />
                <PhoneInput
                    defaultValue={phone}
                    defaultCode="PK"
                    layout="first"
                    containerStyle={styles.phoneContainer}
                    textContainerStyle={styles.textInput}
                    countryPickerButtonStyle={styles.countryPickerButtonStyle}
                    placeholder='Mobile Number'
                    textInputProps={{ placeholderTextColor: Color.black }}
                    value={phone}
                    onChangeFormattedText={text => { setPhone(text) }}
                    onChangeText={setPhone}
                />
                <TextInput
                    style={[styles.input, { marginTop: "6%" }]}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password'
                    secureTextEntry={true}
                />
                <TextInput
                    style={[styles.input, { marginTop: "6%" }]}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder='Confirm Password'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.btnReg} onPress={handleRegister} >
                    <Text style={styles.btntxtReg}>REGISTER</Text>
                </TouchableOpacity>
                <Modal visible={showTerms} animationType="slide">
                    <Terms />
                </Modal>
                <Text style={styles.footer}>If you have registered with us,
                    <Text style={{ color: Color.red }} onPress={() => navigation.navigate("Signin")}> Sign in</Text> with us</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: "-72%",
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
        width: "57%",
        marginTop: "1%",
        alignSelf: "center"
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
        marginTop: "12%"
    },
    btnReg: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: Color.black,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: height * 0.035,
        marginBottom: height * 0.035
    },
    btntxtReg: {
        color: "white",
        textAlign: "center",
        fontFamily: Font.bold,
    },
    footer: {
        fontFamily: Font.regular,
        textAlign: "center",
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

export default Register;