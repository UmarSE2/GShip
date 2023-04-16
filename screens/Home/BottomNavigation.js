import React from 'react'
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import Home from './Home';
import Search from './Search';
import Cart from './Cart';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

function HeaderLogo() {
    return <Image source={require("../../Images/gshiplogo.png")}
        style={{ width: 120, height: 120, resizeMode: "contain" }} />
}

const Menu = () => {
    return (
        <Tab.Navigator initialRouteName='Home' tabBarOptions={{
            showLabel: false,
            headerTitleAlign: 'center',
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: props => <HeaderLogo {...props} />,
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused }) => (
                        <Foundation name="home" size={27} color={focused ? "black" : "#b3b3b3"} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    headerTitle: props => <HeaderLogo {...props} />,
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="search1" size={27} color={focused ? "black" : "#b3b3b3"} />
                    ),
                }}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerTitle: props => <HeaderLogo {...props} />,
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused }) => (
                        <SimpleLineIcons name="handbag" size={27} color={focused ? "black" : "#b3b3b3"} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Octicons name="person" size={27} color={focused ? "black" : "#b3b3b3"} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Menu;
