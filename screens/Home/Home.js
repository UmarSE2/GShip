import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
import firestore from "@react-native-firebase/firestore"
import DataList from '../../components/Home/DataCard';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window')

const Home = () => {
    const [search, setSearch] = useState('');
    const [num, setNum] = useState('Chak Num');
    const [occupation, setOccupation] = useState("Occupation")
    const [data, setData] = useState([]);

    const { t } = useTranslation()

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

    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                    value={search}
                    onChangeText={setSearch}
                    style={styles.input}
                    placeholder={t("Search by name")}
                    placeholderTextColor="black"
                />
                <Icon name="search1" size={23} color="#b3b3b3" />
            </View>
            <View style={styles.pickerContainer}>
                <View style={styles.pickerWrapper}>
                    <Picker style={styles.picker} selectedValue={num} onValueChange={(value) => setNum(value)} mode="dropdown">
                        <Picker.Item label={t("Chak Num")} value="option1" />
                        <Picker.Item label="Option 2" value="option2" />
                        <Picker.Item label="Option 3" value="option3" />
                    </Picker>
                </View>
                <View style={styles.pickerWrapper}>
                    <Picker style={styles.picker} selectedValue={occupation} onValueChange={(value) => setOccupation(value)} mode="dropdown">
                        <Picker.Item label={t("Occupation")} value="option1" />
                        <Picker.Item label="Option 2" value="option2" />
                        <Picker.Item label="Option 3" value="option3" />
                    </Picker>
                </View>
            </View>
            {data
                ? <DataList />
                : <Text>{t("No any data")}</Text>
            }
        </View >
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#b3b3b3',
        marginTop: '3%',
        paddingHorizontal: 10,
        width: width * 0.94,
        alignSelf: 'center'
    },
    input: {
        color: 'black',
        padding: 2,
        paddingVertical: 2,
        fontSize: 15
    },
    pickerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3%',
        width: width * 0.94,
        alignSelf: 'center'
    },
    pickerWrapper: {
        width: '49%',
        height: 35,
        borderWidth: 1,
        borderColor: '#b3b3b3',
        backgroundColor: "white",
        justifyContent: "center"
    },
    item: {
        backgroundColor: "white",
        width: "100%",
        height: 150,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 35,
        textAlign: "center",
        color: "red",
    },
});

export default Home;
