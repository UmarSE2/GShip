import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Alert } from 'react-native'
const { width, height } = Dimensions.get("window")

import Feather from "react-native-vector-icons/Feather"
import Ionicons from "react-native-vector-icons/Ionicons"
import WeatherValues from './WeatherValues'
import Font from '../../components/Helper/Font'
import { useNavigation } from '@react-navigation/native';
const Weather = () => {
    const navigation = useNavigation();
    const currentDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[currentDate.getDay()];
    const day = currentDate.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
const NavigateFun =()=>{
    navigation.navigate("Crops")
}
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',marginTop:20}}>
                    <TouchableOpacity onPress={NavigateFun}>
                <Ionicons name="chevron-back" size={25} color="white" style={{marginTop:20,marginRight:20}}  />
                </TouchableOpacity>
                <Text style={styles.weather}>Weather Condition</Text>
                </View>
               
                <Text style={{ color: "lightgrey", marginTop: "4%" }}>{dayName}, {monthName},{day}, {year}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "15%" }}>
                    <Text style={{ color: "white", fontFamily: Font.bold }}>Today</Text>
                    <Text style={{ color: "white", fontFamily: Font.bold }}>Tomorrow</Text>
                    <Text style={{ color: "white", fontFamily: Font.bold }}>Next Week</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Text style={styles.sprayingtxt}>Now is good condition for spraying</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: "7%" }}>
                    <Feather name="sun" size={30} color="gold" />
                    <Text style={styles.suntxt}>Clear skies. Sunny to partly cloudy in the afternoon. Low 47F</Text>
                </View>

                <WeatherValues />

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingRight: "10%" }}>
                    <Text style={{ color: "black", fontFamily: Font.regular }}>Hourly Forecast</Text>
                    <Text style={{ fontFamily: Font.regular }}>Weekly</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#4cb078",
        width: width,
        height: height * 0.25,
        // position: "absolute",
        paddingHorizontal: "10%",
    },
    weather: {
        fontFamily: Font.bold,
        fontSize: 24,
        marginTop: "5%",
        color: "white",
        marginTop:20
    },
    container: {
        backgroundColor: "white",
        marginTop: -height * 0.02,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1,
        paddingLeft: "10%"
    },
    sprayingtxt: {
        width: width * 0.5,
        marginTop: "8%",
        fontFamily: Font.bold,
        fontSize: 20,
        color: "black"
    },
    suntxt: {
        width: width * 0.65,
        fontSize: 16,
        marginLeft: "7%",
        lineHeight: 23
    },
})

export default Weather