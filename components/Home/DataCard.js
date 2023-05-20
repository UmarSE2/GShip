import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Dimensions, Text, TouchableOpacity } from 'react-native';
import firestore from "@react-native-firebase/firestore"
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('window')

const DataList = () => {
    const [data, setData] = useState([]);
    const navigation = useNavigation();

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
            {/* <Image source={props.image} style={styles.image} /> */}
            <View style={styles.subContainer}>
                <View>
                    <Text style={styles.name}>{item.Peoplename}</Text>
                    <Text style={styles.job}>{item.Phonenumber}</Text>
                    <Text style={styles.phone}>{item.Checkno}</Text>
                </View>
                <View>
                    {/* <Image source={props.icon} style={styles.icon} /> */}
                    <Text style={styles.data}>{item.Occuption}</Text>
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
                />
                : "no data"
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
    // image: {
    //     width: 65,
    //     height: 63,
    //     borderRadius: 30,
    //     marginLeft: "3%"
    // },
    name: {
        // fontFamily: Font.bold,
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
    // icon: {
    //     width: 30,
    //     height: 30,
    //     marginLeft: "3%"
    // },
    data: {
        marginTop: "4%",
        color: "#274F66",
        marginTop: "15%",
        marginRight: "7%"
    }
});

export default DataList;