import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const { width, height } = Dimensions.get('window');
import Font from '../../components/Helper/Font';
import Color from '../../components/Helper/Color';
import Slides from './Slides';

const slides = [
  {
    key: 's1',
    image: require('../../Images/bag.jpg'),
    title: 'Muhammad Umar Hayat',
    text: 'In 1980s, Lorem Ipsum is simply dummy text of the printing, typesetting industry.',
  },
  {
    key: 's2',
    image: require('../../Images/makeup.jpg'),
    title: 'Muhammad Umar',
    text: 'In 1980s, Lorem Ipsum is simply dummy text of the printing, typesetting industry.',
  },
  {
    key: 's3',
    image: require('../../Images/basketMan.jpg'),
    title: 'Arzu',
    text: 'In 1980s, Lorem Ipsum is simply dummy text of the printing, typesetting industry.',
  },
];

const AboutUs = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [showRealApp, setShowRealApp] = useState(false);

  const onClose = () => {
    navigation.navigate('Profile');
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Slides slides={slides} />
        <TouchableOpacity style={styles.btn} onPress={onClose}>
          <Text style={styles.btntxt}>{t("Close")}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: width * 0.8,
    height: height * 0.07,
    borderWidth: 2,
    borderColor: Color.black,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '10%',
  },
  btntxt: {
    textAlign: 'center',
    fontFamily: Font.bold,
    color: Color.black,
  },
});

export default AboutUs;
