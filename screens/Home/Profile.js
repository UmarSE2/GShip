import React from 'react'
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Font from '../../components/Helper/Font'
import ContentList from '../../components/Profile/ContentList'

const Profile = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.headerContainer}>
                <Ionicons name="chevron-back" size={26} color="black" />
                <Text style={{ fontFamily: Font.bold, color: "black", fontSize: 18 }}>My Profile</Text>
                <Ionicons name="settings" size={22} color="black" />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: "8%", marginBottom: "5%" }}>
                <Image source={require("../../Images/dp.png")} style={styles.image} />
                <View style={{ marginLeft: "10%", }}>
                    <Text style={styles.name}>Muhammad Umar</Text>
                    <Text style={styles.email}>umar1234@gmail.com</Text>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Edit Profile")}>
                        <Text style={styles.btntxt}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ContentList />
        </View>
    )
}


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "8%"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    name: {
        color: "black",
        fontSize: 18,
        fontFamily: Font.regular,
        marginBottom: "4%",
        fontWeight: "900"
    },
    email: {
        marginBottom: "12%",
        color: "black",
        fontSize: 15,
        fontFamily: Font.bold,
    },
    btn: {
        width: "85%",
        padding: "8%",
        backgroundColor: "#00994c",
        borderRadius: 7,
        justifyContent: "center"
    },
    btntxt: {
        color: "white",
        fontFamily: Font.bold,
        textAlign: "center",
    },
})

export default Profile