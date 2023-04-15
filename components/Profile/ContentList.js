import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get("window")

import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import Font from '../../components/Helper/Font'

const ContentList = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="heart-outline" size={24} color="black" />
                    <Text style={[styles.text, { marginLeft: "10%" }]}>Favourites</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Octicons name="download" size={24} color="black" />
                    <Text style={[styles.text, { marginLeft: '15%' }]}>Downloads</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.line} />

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Fontisto name="world-o" size={24} color="black" />
                    <Text style={styles.text}>Language</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text style={[styles.text, { marginLeft: "12%" }]}>Location</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="file-account-outline" size={24} color="black" />
                    <Text style={[styles.text, { marginLeft: "13%" }]}>Display</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="battery-check-outline" size={24} color="black" />
                    <Text style={[styles.text, { marginLeft: "9%" }]}>Feed References</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="folder-open-outline" size={24} color="black" />
                    <Text style={styles.text}>Subscription</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.line} />

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="cached" size={24} color="black" />
                    <Text style={styles.text}>Clear Cache</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="clock-outline" size={24} color="black" />
                    <Text style={styles.text}>Clear History</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>

            <View style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="logout" size={24} color="red" />
                    <Text style={[styles.text, { marginLeft: 20 }]}>Logout</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </View>
        </View>
    )
}

export default ContentList

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: height * 0.03,
    },
    line: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "lightgrey",
        marginTop: height * 0.025,
    },
    text: {
        fontFamily: Font.bold,
        color: "black",
        fontSize: 18,
        marginLeft: width * 0.042
    }
})