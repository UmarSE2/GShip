import { StyleSheet, Dimensions, } from 'react-native'
const { height, width } = Dimensions.get("window")

import Font from '../../components/Helper/Font'

const styles = StyleSheet.create({
    header: {
        width: width,
        height: height * 0.13,
        backgroundColor: "#0062cd",
        position: "absolute",
    },
    mainContainer: {
        width: width,
        height: height,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: height * 0.05,
        paddingHorizontal: "8%",
    },
    order: {
        fontFamily: Font.regular,
        color: "black",
        marginTop: "5%",
        fontSize: 20,
        fontWeight: "900"
    },
    dpCOntainer: {
        flexDirection: "row",
        marginTop: "4%",
        marginBottom: "5%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 60,
    },
    name: {
        color: "black",
        fontSize: 18,
        fontFamily: Font.regular,
        marginBottom: "4%",
        fontWeight: "900"
    },
    courier: {
        marginBottom: "12%",
        fontSize: 14,
        fontFamily: Font.bold,
    },
    phoneContainer: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#00cc44",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "30%"
    },
    subContainer: {
        width: width * 0.9,
        height: height * 0.32,
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
        fontSize: 16,
        marginTop: "5%",
        color: "black"
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#00cc44",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "3.7%",
        marginRight: "5%"
    },
    input: {
        width: width * 0.75,
        height: height * 0.165,
        fontSize: 17,
        borderWidth: 1,
        borderColor: '#cccccc',
        fontFamily: Font.bold,
        paddingLeft: 12,
        textAlignVertical: 'top',
        marginTop: "5%",
    },
    cash: {
        color: "black",
        fontFamily: Font.bold,
        marginVertical: "7%"
    },
    amount: {
        backgroundColor: "#0062cd",
        width: width * 0.17,
        height: height * 0.035,
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        marginTop: height * 0.01,
    },
    btn: {
        width: width * 0.4,
        height: height * 0.05,
        borderRadius: 7,
        backgroundColor: "#00cc44",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: height * 0.015,
    },
    btntxt: {
        fontFamily: Font.bold,
        fontSize: 16,
        color: "white"
    },
})

export default styles;