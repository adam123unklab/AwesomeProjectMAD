import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.redContainer} />
        <View style={styles.greenContainer} />
        <View style={styles.blueContainer} />
      </View>
      <View style={styles.container2}>
        <View style={styles.redBox} />
        <View style={styles.greenBox} />
        <View style={styles.blueBox} />
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  redContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  greenContainer: {
    flex: 1,
    backgroundColor: 'green',
  },
  blueContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', //main axis
    backgroundColor: 'pink',
    alignItems: 'flex-end', //croos axis
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  blueBox: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
});