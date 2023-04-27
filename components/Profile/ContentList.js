import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React ,{useState}from 'react';
const {height, width} = Dimensions.get('window');

import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import Font from '../../components/Helper/Font';

const ContentList = () => {
    const [mobileNumber, setMobileNumber] = useState('');
  const [whatsAppMsg, setWhatsAppMsg] = useState(
    'https://www.developerumarhayat.com/',
  );
  const navigation = useNavigation();
  const LogoutFun = () => {
    navigation.navigate('Signin');
  };
  const initiateWhatsApp = () => {
    // Check for perfect 10 digit length
    if (mobileNumber.length != 10) {
      alert('Please insert correct WhatsApp number');
      return;
    }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + 
       whatsAppMsg +
      '&phone=91' + mobileNumber;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });
    }
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate("Contact")}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons
            name="file-account-outline"
            size={24}
            color="black"
          />
          <Text style={[styles.text, {marginLeft: '13%'}]}>Contact Us</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate("AboutUs")}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome
            name="users"
            size={24}
            color="black"
            style={{width:'15%'}}
          />
          <Text style={[styles.text, {marginLeft: '10%'}]}>About Us</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Fontisto name="world-o" size={24} color="black" />
          <Text style={styles.text}>Change Language</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>
      <View style={styles.line} />
      <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate("Terms")}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome5 name="hands-helping" size={24} color="black" />
          <Text style={[styles.text, {marginLeft: '8%'}]}>
            Terms & Conditions
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentContainer} onPress={initiateWhatsApp}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="share-social" size={24} color="black" />
          <Text style={[styles.text, {marginLeft: '12%'}]}>
            Share with Friends
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="battery-check-outline" size={24} color="black" />
                    <Text style={[styles.text, { marginLeft: "9%" }]}>Feed References</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="folder-open-outline" size={24} color="black" />
                    <Text style={styles.text}>Subscription</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </TouchableOpacity> */}

      <View style={styles.line} />

      {/* <TouchableOpacity style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="cached" size={24} color="black" />
                    <Text style={styles.text}>Clear Cache</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </TouchableOpacity> */}

      {/* <TouchableOpacity style={styles.contentContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MaterialCommunityIcons name="clock-outline" size={24} color="black" />
                    <Text style={styles.text}>Clear History</Text>
                </View>
                <Ionicons name="chevron-forward" size={22} color="black" />
            </TouchableOpacity> */}

      <TouchableOpacity style={styles.contentContainer} onPress={LogoutFun}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MaterialCommunityIcons name="logout" size={24} color="red" />
          <Text style={[styles.text, {marginLeft: 20}]}>Logout</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default ContentList;

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginTop: height * 0.025,
  },
  text: {
    fontFamily: Font.bold,
    color: 'black',
    fontSize: 18,
    marginLeft: width * 0.042,
  },
});
