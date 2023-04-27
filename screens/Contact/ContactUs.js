import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';
const { width, height } = Dimensions.get('window');

import Font from '../../components/Helper/Font';
import Color from '../../components/Helper/Color';
import Header from '../../components/HomeHeader'

const Contact = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <View style={{  backgroundColor: "white" }}>
            <Header />
            <View style={styles.container}>
                <Text style={styles.heading}>Contact Us</Text>
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
                    codeTextStyle={styles.codeTextStyle}
                    countryPickerButtonStyle={styles.countryPickerButtonStyle}
                    placeholder='Mobile Number'
                    textInputProps={{ placeholderTextColor: '#BCB8B1' }}
                    textInputStyle={styles.textInputStyle}
                    value={phone}
                    onChangeFormattedText={text => {
                        setPhone(text);
                    }}
                    onChangeText={setPhone}
                />
                <TextInput
                    style={[styles.input, { marginTop: "7%" }]}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <TextInput
                    style={[styles.input, { marginTop: "7%", height: height * 0.18, textAlignVertical: 'top', }]}
                    value={message}
                    onChangeText={setMessage}
                    placeholder='Message'
                    multiline={true}
                />
                <TouchableOpacity style={styles.btnReg}>
                    <Text style={styles.btntxtReg}>Send Message</Text>
                </TouchableOpacity>
                <View style={{marginTop:'100%'}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingHorizontal: width * 0.05,
        marginTop:'15%',
    },
    heading: {
        fontFamily: Font.bold,
        fontSize: 28,
        textAlign: "center",
        
    },
    line: {
        borderBottomColor: "#cccccc",
        borderBottomWidth: 1,
        width: "42%",
        marginTop: "1%",
        alignSelf: "center",
        marginBottom:'10%'
    },
    input: {
        width: width * 0.9,
        height: height * 0.063,
        fontSize: 17,
        borderWidth: 1.5,
        borderColor: '#cccccc',
        fontFamily: Font.bold,
        paddingLeft: 12,
        marginTop: "5%",
    },
    btnReg: {
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: Color.black,
        alignSelf: "center",
        justifyContent: "center",
        marginTop: "5%",
        marginBottom: "6%"
    },
    btntxtReg: {
        color: "white",
        textAlign: "center",
        fontFamily: Font.bold,
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

export default Contact;