import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Exercise7 = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Bagian Atas - Merah */}
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
        <View style={styles.redBox} />
      </View>

      {/* Bagian Tengah - Logo */}
      <View style={styles.middleContainer}>
        <Image
          source={require('./assets/unklab.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Bagian Bawah - Biru */}
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ff0000ff',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  middleContainer: {
    flex: 3,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0000FF',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  blackBox: {
    width: 75,
    height: 75,
    backgroundColor: '#000000',
  },
  yellowBox: {
    width: 75,
    height: 75,
    backgroundColor: '#FFEB3B',
  },
  redBox: {
    width: 75,
    height: 75,
    backgroundColor: '#be2615ff',
  },
  logo: {
    width: '100%',
    height: '50%',
  },
});