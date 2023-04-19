import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
const { width } = Dimensions.get("window")

import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import Font from '../../components/Helper/Font'

import CropsCard, { CropsData } from './CropsCard'

function card(val, index) {
    return (
        <CropsCard
            key={index}
            crop={val.crop}
            images={val.images}
            size={val.size}
        />
    )
}

const Crops = () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20 }}>
                <View style={[styles.container, { justifyContent: "space-between" }]}>
                    <Text style={styles.cropsHeader}>Crops registered in California</Text>
                    <EvilIcons name="location" size={35} color="green" />
                </View>
                <Text style={{ fontSize: 13, marginTop: "3%" }}>ZIP92377</Text>
                <View style={[styles.container, { justifyContent: "space-evenly" }]}>
                    <Feather name="sun" size={28} color="gold" />
                    <Text>62° F</Text>
                    <MaterialCommunityIcons name="weather-cloudy" size={28} color="grey" />
                    <Text>Weather Condition</Text>
                </View>
                <View style={{ flexDirection: "row", flexWrap: 'wrap', justifyContent: "space-around", marginTop: "5%" }}>
                    {CropsData.map(card)}
                </View>
            </ScrollView >
        </View>
    )
}

const styles = StyleSheet.create({
    cropsHeader: {
        color: "black",
        fontFamily: Font.bold,
        width: width * 0.5,
        fontSize: 23
    },
    container: {
        flexDirection: "row",
        marginTop: "5%",
        alignItems: "center"
    }
})

export default Crops;