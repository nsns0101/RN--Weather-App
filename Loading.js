//로딩화면
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';   //상태이상바 추가

export default function Loading() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Text style={styles.text}>Getting the fuckings weather</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
    }

})
