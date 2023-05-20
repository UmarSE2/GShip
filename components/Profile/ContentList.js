import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Linking, Modal } from 'react-native';
import React, { useState } from 'react';
const { height, width } = Dimensions.get('window');

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SwitchSelector from 'react-native-switch-selector';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Font from '../../components/Helper/Font';

const ContentList = () => {
  const [showModal, setShowModal] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [whatsAppMsg, setWhatsAppMsg] = useState('https://www.developerumarhayat.com/');
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
    let url = 'whatsapp://send?text=' + whatsAppMsg + '&phone=91' + mobileNumber;
    Linking.openURL(url)
      .then((data) => { console.log('WhatsApp Opened'); })
      .catch(() => { alert('Make sure Whatsapp installed on your device'); });
  }

  const { t, i18n } = useTranslation();

  const options = [
    { label: 'English', value: 'en' },
    { label: 'Urdu', value: 'ur' },
  ];

  const handleLanguageChange = async (language) => {
    console.log('Language changed to:', language);
    await AsyncStorage.setItem('lan', language);
    i18n.changeLanguage(language);
    setShowModal(false);
  };


  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate("Contact")}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="file-account-outline" size={24} color="black" />
          <Text style={[styles.text, { marginLeft: '13%' }]}>{t("Contact Us")}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate("AboutUs")}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome name="users" size={24} color="black" style={{ width: '15%' }} />
          <Text style={[styles.text, { marginLeft: '10%' }]}>{t("About Us")}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Fontisto name="world-o" size={24} color="black" />
          <Text style={styles.text} onPress={() => setShowModal(true)}>{t("Change Language")}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={showModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choose Language</Text>
            <SwitchSelector options={options} hasPadding initial={0} onPress={handleLanguageChange} />
          </View>
        </View>
      </Modal>

      <View style={styles.line} />

      <TouchableOpacity style={styles.contentContainer} onPress={() => navigation.navigate("Terms")}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5 name="hands-helping" size={24} color="black" />
          <Text style={[styles.text, { marginLeft: '8%' }]}>{t("Terms & Conditions")}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.contentContainer} onPress={initiateWhatsApp}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="share-social" size={24} color="black" />
          <Text style={[styles.text, { marginLeft: '11%' }]}>{t("Share with Friends")}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>

      <View style={styles.line} />

      <TouchableOpacity style={styles.contentContainer} onPress={LogoutFun}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="logout" size={24} color="red" />
          <Text style={[styles.text, { marginLeft: "15%" }]}>{t("Logout")}</Text>
        </View>
        <Ionicons name="chevron-forward" size={22} color="black" />
      </TouchableOpacity>
    </View>
  );
};

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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: "80%",
    height: "25%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 10,
  },
});

export default ContentList;