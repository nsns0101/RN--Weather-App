import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.yellowView}>
        <Text style={styles.text}>Hello</Text>
      </View>

      <View style={styles.blueView}>
        <Text>Hello</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: "black",
    fontSize: 15,
  },
  yellowView: {
    flex: 2,          //
    backgroundColor: "yellow"
  },

  blueView: {
    flex: 3,
    backgroundColor: "blue"
  },
});
