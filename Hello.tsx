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
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: 'red',
      }}>
      <Text style={styles.green}>Hello !</Text>
    </View>
  );
};

export default Hello;
