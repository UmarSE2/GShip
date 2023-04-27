import React, { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Dimensions, ScrollView ,} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/AntDesign';
const { width } = Dimensions.get('window')

import DataCard from '../../components/Home/DataCard';
import Data from '../../components/Home/Data';
import { SafeAreaView } from 'react-native-safe-area-context';

function ncard(val, index) {
    return (
        <DataCard
            key={index}
            image={val.image}
            name={val.name}
            job={val.job}
            phone={val.phone}
            icon={val.icon}
            data={val.data}
        />
    );
}

const Home = () => {
    const [search, setSearch] = useState('');
    const [num, setNum] = useState('Chak Num');
    const [occupation, setOccupation] = useState("Occupation")

    return (
        <SafeAreaView>
        {/*  <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}> */}
            <View style={styles.inputContainer}>
                <TextInput
                    value={search}
                    onChangeText={setSearch}
                    style={styles.input}
                    placeholder='Search by Name'
                    placeholderTextColor="black"
                />
                <Icon name="search1" size={23} color="#b3b3b3" />
            </View>
            <View style={styles.pickerContainer}>
                <View style={styles.pickerWrapper}>
                    <Picker style={styles.picker} selectedValue={num} onValueChange={(value) => setNum(value)} mode="dropdown">
                        <Picker.Item label="Chak Num" value="option1" />
                        <Picker.Item label="Option 2" value="option2" />
                        <Picker.Item label="Option 3" value="option3" />
                    </Picker>
                </View>
                <View style={styles.pickerWrapper}>
                    <Picker style={styles.picker} selectedValue={occupation} onValueChange={(value) => setOccupation(value)} mode="dropdown">
                        <Picker.Item label="Occupation" value="option1" />
                        <Picker.Item label="Option 2" value="option2" />
                        <Picker.Item label="Option 3" value="option3" />
                    </Picker>
                </View>
            </View>
            <ScrollView>
                {Data.map(ncard)}
            </ScrollView>
        {/* </KeyboardAvoidingView> */}
         </SafeAreaView>
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
        // alignItems: 'center',
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
});

export default Home;
