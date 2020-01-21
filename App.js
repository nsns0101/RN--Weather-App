import React from 'react';
import Loading from "./Loading";            //현재파일내의 Loading.js
import * as Location from "expo-location"   //위치정보
import { Alert } from "react-native";       //경고창
import axios from "axios";                  //

//https://home.openweathermap.org/api_keys
const API_KEY = "4f63d82ac712979f28797a28187a3d28"

export default class extends React.Component {
  state = {
    isLoading: true
  };

  //날씨정보 얻어오는 함수
  getWeather = async (latitude, longitude) => {
    //&units=metric는 섭씨온도
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    console.log(data);
  };

  //위치정보 얻오는 함수
  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync();   //권한 요청
      // console.log(response)
      // { }로 객체로 선언
      const { coords } = await Location.getCurrentPositionAsync();  //현재위치를 가져옴
      //latitude = 위도, longitude = 경도
      this.getWeather(coords.latitude, coords.longitude)
      this.setState({ isLoading: false });

    }
    //권한 요청을 거부할 경우 
    catch (error) {
      console.log(error)
      Alert.alert("Can't find you.", "So sad");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    console.log(isLoading);
    return isLoading ? <Loading /> : null;
  }
}

