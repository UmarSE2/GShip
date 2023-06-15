import { StyleSheet, Dimensions, } from 'react-native'
const { height, width } = Dimensions.get("window")

import Font from '../../components/Helper/Font'

const styles = StyleSheet.create({
    header: {
        width: width,
        height: height * 0.45,
        backgroundColor: "#4cb078",
        position: "absolute",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginTop: height * 0.05
    },
    name: {
        color: "white",
        fontSize: 18,
        fontFamily: Font.regular,
        marginVertical: "2%",
        fontWeight: "900"
    },
    phone: {
        fontSize: 14,
        fontFamily: Font.bold,
        color: "white",
    },
    iconContainer: {
        backgroundColor: "white",
        width: 50,
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    iconText: {
        fontFamily: Font.bold,
        color: "white",
        marginTop: "15%"
    },
    bottomText: {
        fontFamily: Font.bold,
        color: "black",
        fontSize: 16
    },
    line: {
        borderBottomWidth: 3,
        borderBottomColor: "lightgrey",
        width: "100%",
        marginVertical: "2%",
        alignSelf: "center",
    },
    phone2: {
        fontSize: 16,
        fontFamily: Font.bold,
        marginVertical: "2%"
    },
    description: {
        fontFamily: Font.regular,
        fontSize: 17,
        lineHeight: 20,
        textAlign: "justify",
        marginTop: "3%"
    },
    btn: {
        width: width * 0.4,
        height: height * 0.05,
        borderRadius: 7,
        backgroundColor: "#4cb078",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: height * 0.04,
    },
    btntxt: {
        fontFamily: Font.bold,
        fontSize: 16,
        color: "white"
    },
})

export default styles;