import React from 'react'
import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get('window');

import Font from '../../components/Helper/Font';

const Terms = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.headtxt}>Terms & Conditions</Text>
                <ScrollView style={{ maxHeight: height * 0.6, }} showsVerticalScrollIndicator={true} persistentScrollbar={true} >
                    <Text style={styles.txt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.{'\n'}
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,{'\n'}
                        Recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Contrary to popular belief, Lorem Ipsum is not simply random text.{'\n'}
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia{'\n'}
                        Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32. And 1.10.33 of "de Finibus Bonorum et Malorum"{'\n'}
                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                        very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. {'\n'}
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,{'\n'}
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
                        from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        Lorem Ipsum comes from sections 1.10.32{'\n'}
                        And 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                        very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.{'\n'}
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Text>
                </ScrollView>
                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.btntxt}>Agree</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center"
    },
    subContainer: {
        width: width * 0.9,
        height: height * 0.88,
        alignSelf: "center",
        paddingHorizontal: 30,
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 12,
        shadowColor: '#000',
        shadowRadius: 2,
    },
    headtxt: {
        fontFamily: Font.bold,
        textAlign: "center",
        fontSize: 23,
        marginVertical: "12%"
    },
    txt: {
        fontFamily: Font.bold,
        fontSize: 16,
        lineHeight: 25,
        textAlign: "justify",
        width: width * 0.69
    },
    btn: {
        width: width * 0.65,
        height: height * 0.055,
        borderRadius: 20,
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: "#4d62f8",
        marginTop: "12%"
    },
    btntxt: {
        fontFamily: Font.bold,
        textAlign: "center",
        color: "white"
    }
})

export default Terms;