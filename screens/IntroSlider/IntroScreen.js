import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')
import Font from '../../components/Helper/Font';
import Color from '../../components/Helper/Color';
import Slides from './Slides';

const slides = [
    {
        key: 's1',
        image: require("../../Images/bag.jpg"),
        title: 'LOREM IPSUM',
        text: 'In 1980s, Lorem Ipsum is simply dummy text of the printing, typesetting industry.',
    },
    {
        key: 's2',
        image: require("../../Images/makeup.jpg"),
        title: 'LOREM IPSUM',
        text: 'In 1980s, Lorem Ipsum is simply dummy text of the printing, typesetting industry.',
    },
    {
        key: 's3',
        image: require("../../Images/basketMan.jpg"),
        title: 'LOREM IPSUM',
        text: 'In 1980s, Lorem Ipsum is simply dummy text of the printing, typesetting industry.',
    },
];

const IntroScreen = () => {
    const navigation = useNavigation();
    const [showRealApp, setShowRealApp] = useState(false);

    const onDone = () => {
        navigation.navigate('Welcome');
    };


    return (
        <>
            {showRealApp ? ""
                : (
                    <View style={{ flex: 1 }}>
                        <Slides slides={slides} />
                        <TouchableOpacity style={styles.btn} onPress={onDone}>
                            <Text style={styles.btntxt}>Next</Text>
                        </TouchableOpacity>
                    </View>
                )}
        </>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: width * 0.8,
        height: height * 0.08,
        borderWidth: 2,
        borderColor: Color.black,
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: "10%",
    },
    btntxt: {
        textAlign: "center",
        fontFamily: Font.bold,
        color: Color.black
    }
});

export default IntroScreen;
