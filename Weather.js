//날씨
import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";   //StatusBar 추가
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";  //아이콘 https://expo.github.io/vector-icons/
import { LinearGradient } from 'expo-linear-gradient';      // linear-gradient

//날씨옵션
const weatherOptions = {
    Clouds: {       //흐림
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "흐림",
        subtitle: "비가 올 수 있으니 우산을 챙기세요!",

    },
    Clear: {        //맑음
        iconName: "weather-sunny",
        gradient: ["#FEF253", "#FF7300"],
        title: "맑음",
        subtitle: "화창한 날씨입니다!",

    },
    Thunderstorm: { //번개
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "번개",
        subtitle: "번개가 치며, 비가 올 수 있으니 우산을 챙기세요!",
    },
    Drizzle: {   //가랑비
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "약한 비",
        subtitle: "약한 비가 내리고 있습니다.",
    },
    Rain: {     //비
        iconName: "weather-pouring",
        gradient: ["#00C6FB", "#005BEA"],
        title: "비",
        subtitle: "비가 오니 외출 시 우산을 챙기세요",
    },
    Snow: {     //눈
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈",
        subtitle: "눈이 오고 있으니 외출시 조심하세요",
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "안개",
        subtitle: "안개로 앞이 잘 보이지 않을 수 있습니다",
    },
    Haze: {     //안개
        iconName: "weather-fog",
        gradient: ["#44a08d", "#093637"],
        title: "짙은 안개",
        subtitle: "안개로 앞이 잘 보이지 않을 수 있습니다",
    },
    Mist: {  //옅은 안개
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "옅은 안개",
        subtitle: "안개로 앞이 잘 보이지 않을 수 있습니다",
    },
    Dust: {     //먼지
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "먼지",
        subtitle: "외부활동시 마스크가 필요할 수 있습니다",
    },
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
            <View style={styles.halfContainer} >
                <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                </View>
            </View>

        </LinearGradient >


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
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600",

    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
});