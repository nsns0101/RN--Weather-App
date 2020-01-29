//메인
import React from 'react';
import Loading from "./Loading";            //현재파일내의 Loading.js
import Weather from "./Weather";
import * as Location from "expo-location"   //위치정보
import { Alert } from "react-native";       //경고창
import axios from "axios";                  //
import parseErrorStack from 'react-native/Libraries/Core/Devtools/parseErrorStack';

//https://home.openweathermap.org/api_keys
const API_KEY = "4f63d82ac712979f28797a28187a3d28";

export default class extends React.Component {
  state = {};     //온도와 날씨, 동네를 담을 객체

  //날씨정보 얻어오는 함수
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },     //data.main.temp의 비구조할당
        weather,             //data.weather의 비구조할당
        name             //현재 위치(동네)
      }                          //&units=metric는 섭씨온도
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    const kkk = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    // console.log(kkk);
    console.log(name);
    //로그로 보면 data.main.temp가 온도임
    this.setState({
      // isLoading: false,
      temp,
      condition: weather[0].main,
      village: name,
    });
  };

  //위치정보 얻오는 함수
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();   //권한 요청
      // { }로 객체로 선언
      const { coords } = await Location.getCurrentPositionAsync();  //현재위치를 가져옴
      //latitude = 위도, longitude = 경도
      this.getWeather(coords.latitude, coords.longitude);
      this.setState({ isLoading: false });
      // console.log("위도경도 : ", coords)
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
    const { temp, condition, village } = this.state;
    // const { temp, condition, isLoading } = this.state;

    // console.log(isLoading);   //로딩상태
    // console.log(temp);        //온도
    console.log(condition)
    //Weather에 temp라는 값을 던져줌
    return condition ? <Weather temp={Math.round(temp)} condition={condition} village={village} /> : <Loading />;

  };

}

