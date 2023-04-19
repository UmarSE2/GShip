import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window")

import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import Font from '../../components/Helper/Font'

const WeatherValues = () => {
    return (
        <View>
            <View style={styles.line} />

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.iconContainer, { backgroundColor: "#4cb078" }]}>
                        <FontAwesome name="thermometer" size={23} color="white" />
                    </View>
                    <View style={{ marginLeft: "7%" }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>62° F</Text>
                        <Text style={{ fontFamily: Font.regular }}>Temperature</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.iconContainer, { backgroundColor: "#c4cae6" }]}>
                        <Ionicons name="rainy-outline" size={23} color="white" />
                    </View>
                    <View style={{ marginLeft: "7%" }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>0%</Text>
                        <Text style={{ fontFamily: Font.regular }}>Percipitation</Text>
                    </View>
                </View>

            </View>

            <View style={styles.line} />

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: "7%" }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.iconContainer, { backgroundColor: "#cfd8db" }]}>
                        <MaterialCommunityIcons name="weather-windy" size={23} color="white" />
                    </View>
                    <View style={{ marginLeft: "7%" }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>NW 8 mph</Text>
                        <Text style={{ fontFamily: Font.regular }}>Wind</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={[styles.iconContainer, { backgroundColor: "#afe4fa" }]}>
                        <SimpleLineIcons name="drop" size={23} color="white" />
                    </View>
                    <View style={{ marginLeft: "7%" }}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 22 }}>61%</Text>
                        <Text style={{ fontFamily: Font.regular }}>Humidty</Text>
                    </View>
                </View>
            </View>

            <View style={styles.line} />
        </View>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        backgroundColor: "#afe4fa",
        width: 42,
        height: 42,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    line: {
        borderBottomColor: "lightgrey",
        borderBottomWidth: 0.8,
        marginVertical: "8%"
    }
})

export default WeatherValues;