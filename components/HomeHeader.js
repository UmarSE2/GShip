import React from 'react';
import {StyleSheet, Image, View, Dimensions} from 'react-native';
import Color from './Helper/Color';
const {width, height} = Dimensions.get('window');
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Subcontainer}>
        <Image
          source={require('../Images/gshiplogo.png')}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <FontAwesome name="bell" size={25} color="grey" style={{marginTop: 10}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  Subcontainer: {
    width: '88%',
    height: 50,
  },
  image: {
    marginLeft: '12%',
    width: '90%',
    height: 50,
  },
});

export default HomeHeader;
