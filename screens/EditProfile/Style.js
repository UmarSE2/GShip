import { StyleSheet, Dimensions } from "react-native"
const { width, height } = Dimensions.get('window')

import Font from '../../components/Helper/Font'
import Color from '../../components/Helper/Color'

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#FF6969",
        width: width,
        height: height * 0.23,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    imageContainer: {
        position: "absolute",
        alignSelf: "center",
        top: "6%",
        backgroundColor: "#F5F5F5",
        width: 168,
        height: 168,
        borderRadius: 80,
        justifyContent: "center"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
        alignSelf: "center",
    },
    introbox: {
        backgroundColor: "white",
        height: height * 0.1,
        marginHorizontal: 20,
        marginTop: "20%",
        flexDirection: "row",
        width: width * 0.94,
        alignSelf: 'center',
        borderRadius: 10,
        alignItems: 'center',
    },
    image2: {
        width: 65,
        height: 63,
        borderRadius: 30,
        marginLeft: "3%"
    },
    name: {
        fontFamily: Font.regular,
        fontSize: 20,
        color: "#274F66",
        marginBottom: "2%"
    },
    phone: {
        marginTop: "5%",
        color: "#274F66",
        fontSize: 13,
    },
    subContainer: {
        flexDirection: "row",
        marginLeft: "4%",
        justifyContent: "space-between",
        flex: 1,
    },
    info: {
        paddingLeft: 15,
        marginTop: "7%",
        fontFamily: Font.bold,
        fontSize: 17,
        color: "#274F66",
    },
    input: {
        height: height * 0.08,
        marginVertical: 20,
        width: width * 0.94,
        borderRadius: 10,
        borderWidth: 1,
        alignSelf: "center",
        paddingLeft: 20,
        fontSize: 16
    },
    btn: {
        backgroundColor: Color.black,
        height: height * 0.08,
        marginVertical: "5%",
        width: width * 0.94,
        alignSelf: 'center',
        borderRadius: 10,
        justifyContent: "center"
    },
    btntxt: {
        color: "white",
        fontFamily: Font.regular,
        textAlign: "center",
        fontSize: 16
    }
})

export default styles;