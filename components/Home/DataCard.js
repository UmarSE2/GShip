import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
const { width } = Dimensions.get('window')

import Font from '../Helper/Font'

const DataCard = (props) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={props.image} style={styles.image} />
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.name}>{props.name}</Text>
                    <Text style={styles.job}>{props.job}</Text>
                    <Text style={styles.phone}>{props.phone}</Text>
                </View>
                <View>
                    <Image source={props.icon} style={styles.icon} />
                    <Text style={styles.data}>{props.data}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        marginVertical: 8,
        width: width * 0.94,
        alignSelf: 'center',
        paddingVertical: "2%",
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 65,
        height: 63,
        borderRadius: 30,
        marginLeft: "3%"
    },
    name: {
        fontFamily: Font.bold,
        fontSize: 20,
        color: "#274F66"
    },
    job: {
        color: "#274F66",
        fontSize: 13,
        marginBottom: "2%"
    },
    phone: {
        marginTop: "5%",
        color: "#274F66",
        fontSize: 14
    },
    subContainer: {
        flexDirection: "row",
        marginLeft: "4%",
        justifyContent: "space-between",
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: "3%"
    },
    data: {
        marginTop: "4%",
        color: "#274F66",
        marginTop: "15%",
        marginRight: "7%"
    }
})

export default DataCard;