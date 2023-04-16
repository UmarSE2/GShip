import React, { useState } from 'react'
import { Text, View, StatusBar, TouchableOpacity, Image, Switch, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import Foundation from "react-native-vector-icons/Foundation"
import Feather from "react-native-vector-icons/Feather"
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

import styles from './CartStyles'

const Cart = () => {
    const [driverSwitch, setDriverSwitch] = useState(true);
    const [cashSwitch, setCashSwitch] = useState(false);
    const [message, setMessage] = useState("")

    const toggleDriver = () => setDriverSwitch(previousState => !previousState);
    const toggleCash = () => setCashSwitch(previousState => !previousState);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />
            <View style={styles.header} />

            <LinearGradient style={styles.mainContainer}
                start={{ x: 1, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={['#b3d6ff', 'white']}>

                <Text style={styles.order}>Your Order</Text>
                <View style={styles.dpCOntainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={require("../../Images/dp.png")} style={styles.image} />
                        <View style={{ marginLeft: "10%" }}>
                            <Text style={styles.name}>Umar</Text>
                            <Text style={styles.courier}>Your Courier</Text>
                            <Text style={styles.courier}>$ 000 000</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Foundation name="star" size={25} color="#ffd200" />
                        <View style={[styles.phoneContainer]}>
                            <Feather name="phone" size={25} color="white" />
                        </View>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={styles.iconContainer}>
                            <Entypo name="text-document" size={22} color="white" style={{ marginVertical: "20%" }} />
                        </View>
                        <Text style={styles.headtxt}>Add note for courier</Text>
                    </View>
                    <TextInput style={styles.input}
                        value={message}
                        onChangeText={setMessage}
                        placeholder='Write Note'
                        multiline={true} />
                    <Ionicons name="checkmark-circle" size={45} color="#00cc44" style={{ alignSelf: "flex-end" }} />
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: "5%" }}>
                    <View>
                        <Text style={styles.cash}>Only Favourite Drivers</Text>
                        <Text style={styles.cash}>Cashless payments</Text>
                        <Text style={styles.cash}>Cash Pyaments</Text>
                        <Text style={styles.cash}>Total</Text>
                        <Text style={{ fontSize: 13, marginLeft: "5%", marginTop: "-8%" }}>+ promo code</Text>
                    </View>
                    <View style={{ alignItems: "flex-end" }}>
                        <Switch trackColor={{ false: "#acd2ed", true: "#00cc44" }}
                            thumbColor="white"
                            onValueChange={toggleDriver}
                            value={driverSwitch}
                            style={{ marginVertical: "7%" }} />
                        <Switch trackColor={{ false: "#acd2ed", true: "#00cc44" }}
                            thumbColor="white"
                            onValueChange={toggleCash}
                            value={cashSwitch}
                            style={{ marginVertical: "7%" }} />
                        <Ionicons name="chevron-forward" size={22} color="black" style={{ marginVertical: "20%" }} />
                        <View style={styles.amount}>
                            <Text style={{ color: "white", fontSize: 16, }}>$37</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btntxt}>Place Order</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default Cart;