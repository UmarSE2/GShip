import React, { useState } from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image, } from 'react-native';
const { width, height } = Dimensions.get("window")

import Font from '../../components/Helper/Font';

export const CropsData = [
    {
        id: 1,
        crop: "Cotton",
        images: require("../../Images/cotton.png"),
        size: "8 fi oz"
    },
    {
        id: 2,
        crop: "Wheat",
        images: require("../../Images/wheat.png"),
        size: "2-4 fi oz"
    },
    {
        id: 3,
        crop: "Rice",
        images: require("../../Images/rice.png"),
        size: "12 fi oz"
    },
    {
        id: 4,
        crop: "Sugercane",
        images: require("../../Images/sugercane.png"),
        size: "8 fi oz"
    },
    {
        id: 5,
        crop: "Broccoli",
        images: require("../../Images/broccoli.png"),
        size: "4 fi oz"
    },
    {
        id: 6,
        crop: "Corn",
        images: require("../../Images/corn.png"),
        size: "8 fi oz"
    },
    {
        id: 7,
        crop: "Sugercane",
        images: require("../../Images/cotton.png"),
        size: "8 fi oz"
    },
    {
        id: 8,
        crop: "Cotton",
        images: require("../../Images/cotton.png"),
        size: "8 fi oz"
    },
]

const CropsCard = (prop) => {
    const [isSelected, setIsSelected] = useState(false);

    const handlePress = () => {
        setIsSelected(!isSelected);
    }

    return (
        <TouchableOpacity style={[styles.container, isSelected && styles.selectedContainer]} onPress={handlePress}>
            <Text style={[styles.crop, isSelected && styles.selectedText]}>{prop.crop}</Text>
            <View style={styles.picContainer}>
                <Image source={prop.images} style={styles.image} />
            </View>
            <Text style={[styles.size, isSelected && styles.selectedText]}>{prop.size}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "lightgrey",
        borderWidth: 1,
        width: width * 0.43,
        height: height * 0.29,
        justifyContent: "space-around",
        borderRadius: 13,
        marginVertical: "3%"
    },
    selectedContainer: {
        backgroundColor: "#4cb078",
    },
    picContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "white",
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 80,
    },
    crop: {
        fontSize: 16,
        fontFamily: Font.bold,
        marginLeft: "10%"
    },
    size: {
        fontSize: 14,
        fontFamily: Font.regular,
        marginLeft: "10%"
    },
    selectedText: {
        color: "white",
    }
})

export default CropsCard;
