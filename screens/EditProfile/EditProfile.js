import React, { useState } from 'react'
import { Image, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'

import styles from "./Style"

const EditProfile = () => {
    const [email, setEmail] = useState('')
    const [occupation, setOccupation] = useState('')
    const [chakNum, setChakNum] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    return (
        <ScrollView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
            <View style={styles.header} />
            <View style={styles.imageContainer}>
                <Image source={require("../../Images/dp.png")} style={styles.image} />
            </View>
            <View style={styles.introbox}>
                <Image source={require("../../Images/dp.png")} style={styles.image2} />
                <View style={styles.subContainer}>
                    <View>
                        <Text style={styles.name}>Muhammad Umar</Text>
                        <Text style={styles.phone}>+923211234567</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.info}>My information</Text>
            <TextInput style={styles.input} placeholder='Name' />
            <TextInput style={styles.input} placeholder='Email Address' value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder='Occupation' value={occupation} onChangeText={setOccupation} />
            <TextInput style={styles.input} placeholder='Chak Num' value={chakNum} onChangeText={setChakNum} />
            <TextInput style={styles.input} placeholder='Phone Number' value={phone} onChangeText={setPhone} />
            <TextInput style={styles.input} placeholder='Address' value={address} onChangeText={setAddress} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default EditProfile;