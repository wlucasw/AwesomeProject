import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  green: {
    color: 'green',
    fontSize: 30,
  },
});

const Hello = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
        backgroundColor: 'red',
        margin: 10,
      }}>
      <Text style={styles.green}>Hello !</Text>
    </View>
  );
};

export default Hello;
