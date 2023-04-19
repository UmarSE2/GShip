import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window")

import Feather from "react-native-vector-icons/Feather"

import WeatherValues from './WeatherValues'
import Font from '../../components/Helper/Font'

const Weather = () => {
    const currentDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[currentDate.getDay()];
    const day = currentDate.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Text style={styles.weather}>Weather Condition</Text>
                <Text style={{ color: "lightgrey", marginTop: "2%" }}>{dayName}, {monthName},{day}, {year}</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "18%" }}>
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
        position: "absolute",
        paddingHorizontal: "10%",
    },
    weather: {
        fontFamily: Font.bold,
        fontSize: 24,
        marginTop: "5%",
        color: "white"
    },
    container: {
        backgroundColor: "white",
        marginTop: height * 0.21,
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