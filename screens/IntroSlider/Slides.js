import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Color from '../../components/Helper/Color';
import Font from '../../components/Helper/Font';

const { width, height } = Dimensions.get('window')

const Slides = ({ slides, onDone }) => {

    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1 }}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        );
    };

    return (
        <AppIntroSlider
            data={slides}
            renderItem={renderItem}
            onDone={onDone}
            showDoneButton={false}
            showNextButton={false}
            activeDotStyle={{ backgroundColor: Color.black, width: 8, height: 8, marginHorizontal: 3 }}
            dotStyle={{ backgroundColor: 'lightgrey', width: 8, height: 8, marginHorizontal: 3 }}
        />
    );
};

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height * 0.55,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
        fontFamily: Font.bold,
        marginTop: "16%"
    },
    text: {
        textAlign: 'center',
        fontFamily: Font.bold,
        width: width * 0.8,
        alignSelf: "center",
    },
});

export default Slides;
