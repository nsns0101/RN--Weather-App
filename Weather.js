//날씨
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";   //StatusBar 추가
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";  //아이콘 https://expo.github.io/vector-icons/
import { LinearGradient } from 'expo-linear-gradient';      // linear-gradient

//날씨옵션
const weatherOptions = {
    Clouds: {       //흐림, 안개
        iconName: "weather-cloudy",
        gradient: ["#4DA0B0", "#D39D38"]

    },
    Clear: {        //맑음
        iconName: "weather-sunny",
        gradient: ["#b2fefa", "#0ed2f7"]

    },
    Thunderstorm: { //번개
        iconName: "weather-lightning",
        gradient: ["#304352", "#d7d2cc"]
    },
    Drizzle: {   //가랑비
        iconName: "weather-hail",
        gradient: ["#2980b9", "#2c3e50"]
    },
    Rain: {     //비
        iconName: "weather-???",
        gradient: ["#4b79a1", "#283e51"]
    },
    Snow: {     //눈
        iconName: "weather-snowy",
        gradient: ["#c0c0aa", "#1cefff"]
    },
    // Atmosphere: {
    //     iconName: "weather-???",
    //     gradient: [,]
    // },
    Haze: {     //안개
        iconName: "weather-fog",
        gradient: ["#44a08d", "#093637"]
    },
    Mist: {  //옅은 안개
        iconName: "weather-weather-fog",
        gradient: ["#44a08d", "#093637"]
    },
    // Dust: {     //먼지
    //     iconName: "weather-???",
    //     gradient: [,]
    // },
}

export default function Weather({ temp, condition }) {
    // console.log(temp)        //온도
    console.log(condition)   //날씨
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient} //그라데이션 색
            style={styles.container}
        >
            {/* 상태이상바 (최상단의 시간이나 등등)*/}
            <StatusBar barStyle="light-content" />

            {/* 날씨 아이콘, 온도 */}
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={70}       //아이콘 사이즈
                    name={weatherOptions[condition].iconName}      //아이콘
                    color="white"   //아이콘 색깔
                />
                <Text style={styles.temp}>{temp}°C</Text>
            </View >

            {/* 글 */}
            <View style={styles.halfContainer} />

        </LinearGradient>


    );
}
//Weather함수의 속성?
//PropTypes는 받은 데이터가 유효한지 확인하는데 사용
Weather.propTypes = {
    temp: PropTypes.number.isRequired,      //temp로 받은게 number가 아니면 오류
    condition: PropTypes.oneOf([        //oneOf는 하나만 받겠다?
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});