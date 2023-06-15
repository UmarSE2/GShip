import React from 'react'
import { Text, View, StatusBar, TouchableOpacity, Image, SafeAreaView } from 'react-native'

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"
import AntDesign from 'react-native-vector-icons/AntDesign'

import styles from './CartStyles'

const dp = require("../../Images/dp-avatar.png")

const Cart = ({ route }) => {
    const { profile } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
            <View style={styles.header} />
            <View style={{ alignItems: "center" }}>
                {profile.Profile ? <Image source={{ uri: profile.Profile }} style={styles.image} />
                    : <Image source={dp} style={styles.image} />}
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.name}>{profile.Peoplename}</Text>
                    <Text style={styles.phone}>{profile.Phonenumber}</Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: "7%" }}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="message-processing-outline" size={25} color="#4cb078" />
                    </View>
                    <Text style={styles.iconText}>Message</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.iconContainer}>
                        <Feather name="phone-call" size={25} color="#4cb078" />
                    </View>
                    <Text style={styles.iconText}>Call</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.iconContainer}>
                        <AntDesign name="mail" size={25} color="#4cb078" />
                    </View>
                    <Text style={styles.iconText}>Mail</Text>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: "5%" }}>
                <View style={{ paddingHorizontal: 15, marginTop: "5%" }}>
                    <Text style={styles.bottomText}>Mobile</Text>
                    <Text style={styles.phone2}>{profile.Phonenumber}</Text>
                    <View style={styles.line} />
                    <Text style={styles.bottomText}>Occupation</Text>
                    <Text style={styles.phone2}>{profile.Occuption}</Text>
                    <View style={styles.line} />
                    <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries,
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntxt}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Cart;