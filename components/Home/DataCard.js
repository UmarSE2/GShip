import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
import firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native'
import Font from '../Helper/Font';

const { width } = Dimensions.get('window')

const icon = require("../../Images/heartlogo.png")
const dp = require("../../Images/dp-avatar.png")

const DataList = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await firestore().collection('All Peoples').get();
                const data = querySnapshot.docs.map(doc => ({ ...doc.data(), key: doc.id }));
                setData(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Cart', { profile: item })}>
            {item.Profile ? <Image source={{ uri: item.Profile }} style={styles.image} />
                : <Image source={dp} style={styles.image} />}
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.name}>{item.Peoplename}</Text>
                    <Text style={styles.job}>{item.Occuption}</Text>
                    <Text style={styles.phone}>{item.Phonenumber}</Text>
                </View>
                <View style={{ marginRight: "7%" }}>
                    <Image source={icon} style={styles.icon} />
                    <Text style={styles.data}>{item.Checkno}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            {data
                ? <FlatList
                    data={data}
                    keyExtractor={item => item.key.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingBottom: "47%" }}
                />
                : <Text style={styles.noDataText}>No data</Text>
            }
        </View>
    );
};

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
        marginTop: "10%",
        color: "#274F66",
        fontSize: 14,
        fontFamily: Font.regular,
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
    },
    data: {
        color: "#274F66",
        marginTop: "30%",
    },
    noDataText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: 'gray',
    },
});

export default DataList;