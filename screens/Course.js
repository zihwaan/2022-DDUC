import React, {useState, useCallback, useEffect} from "react";
import { View } from "react-native";
import styled from "styled-components/native"
import * as firebase from "firebase";
import { auth } from "../firebase";
import LocationModal from "./LocationModal.js";
import {Picker} from '@react-native-picker/picker';

const Container = styled.View`
  flex: 1;
  background-color: "#FAFAFA";
  align-items: center;
  justify-items: center;
`;
const Qback = styled.Image`
  margin-top: 20px;
  height: 95%;
  width: 90%;
  position: absolute;
`;
const Question = styled.Image`
  margin-top: 50px;
  height: 500px;
  width: 291px;
  position: absolute;
`;
const SubmitButton = styled.TouchableOpacity`
  background-color: #266715;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 0px;
  width: 100px;
  margin-top: 28px;
  height: 37px;
`;
const SubmitText = styled.Text`
  font-size: 15px;
  font-family: "Head2";
  color: white;
`;
const Location = styled.Image`
  width: 100px;
  height: 25px;
  margin-top: 158px;
`;
const LocationTouch = styled.TouchableOpacity`
`;



const LogInContainer = styled.View`
  display: flex;
  flex: 1;
  alignItems: center;
  justifyContent: center;
  `;

const LogInTextBox = styled.View`
  display: flex;
  alignItems: center;
  justifyContent: center;
`;

const LogInText1 = styled.Text`
  font-size: 25px;
  marginBottom: 20px;
  marginTop: 10px;
`;

const LogInText2 = styled.Text`
  font-size: 15px;
`;

const LogInText3 = styled.Text`
  font-size: 25px;
  color: white;
`;


const LoginButton = styled.TouchableOpacity`
  backgroundColor: #266715;
  borderRadius: 10px;
  display: flex;
  alignItems: center;
  justifyContent: center;
  marginTop: 70px;
  padding: 10px 0px;
  width: 160px;
`;
const WhereText = styled.Text`
  margin-top: 164px;
  margin-left: 33px;
  font-family: "Head3";
  font-size: 14px;
  color: #266715;
`;

const ViewRow = styled.View`
  flex-direction: row;
  width: 291px;
`;

export default function Course({navigation}) {
  const [, updateState] = useState(); // 상태 변수는 선언하지 않는다
  const forceUpdate =  useCallback(() => updateState({}), []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user =>{
        forceUpdate();
    })
    return unsubscribe;
}, [])

const Aming = firebase.auth();
const user = Aming.currentUser;
console.log(user);

const [isLocation, setIsLocation] = useState(false);
const [Where, setWhere] = useState("강원도 고성군");

const WhereIndex = (data) => {
  if(data == '강원도 고성군'){
      return 0;
  }else if(data == '강원도 양구군'){
      return 1;
  }else if(data == '강원도 원주시'){
      return 2;
  }else if(data == '강원도 인제군'){
      return 3;
  }else if(data == '강원도 철원군'){
      return 4;
  }else if(data == '강원도 홍천군'){
      return 5;
  }else if(data == '강원도 화천군'){
    return 6;
  }else if(data == '경기도 가평군'){
    return 7;
  }else if(data == '경기도 고양시'){
    return 8;
  }else if(data == '경기도 광명시'){
    return 9;
  }else if(data == '경기도 남양주시'){
    return 10;
  }else if(data == '경기도 안양시'){
    return 11;
  }else if(data == '경기도 양주시'){
    return 12;
  }else if(data == '경기도 연천군'){
    return 13;
  }else if(data == '경기도 용인시'){
    return 14;
  }else if(data == '경기도 이천시'){
    return 15;
  }else if(data == '경기도 파주시'){
    return 16;
  }else if(data == '경기도 포천시'){
    return 17;
  }else if(data == '경기도 화성시'){
    return 18;
  }else if(data == '서울특별시 관악구'){
    return 19;
  }else if(data == '인천광역시 부평구'){
    return 20;
  }else if(data == '대전광역시 유성구'){
    return 21;
  }else if(data == '세종특별자치시'){
    return 22;
  }else if(data == '충청남도 논산시'){
    return 23;
  }else if(data == '충청북도 증평군'){
    return 24;
  }else if(data == '경상남도 함안군'){
    return 25;
  }else if(data == '대구광역시 북구'){
    return 26;
  }else if(data == '부산광역시 해운대구'){
    return 27;
  }else if(data == '광주광역시 북구'){
    return 28;
  }
}

const CloseModal = () => {
  setIsLocation(false)
}

const [WithWho, setWithWho] = useState("가족");
const [Food, setFood] = useState("한식");
const [Play, setPlay] = useState("정적인 활동");

if(user){
//가족 친구 연인
//한식 중식 일식 양식
// 정적인 활동 동적인 활동 상관 없음
return(
    <Container>
      <Qback source={require("../assets/image/wlfansqkxkd.png")} />
      <ViewRow>
        <LocationTouch onPress={()=>setIsLocation(!isLocation)}><Location source={require("../assets/image/dnlcltjfwjd.png")} /></LocationTouch>
        <WhereText>{Where}</WhereText>
      </ViewRow>
      <Picker
        style={{height: 50, width: 100, marginTop: 65, marginRight: 170}}
        selectedValue={WithWho}
        onValueChange={(itemValue, itemIndex) =>
          setWithWho(itemValue)
        }>
        <Picker.Item label="가족" value="가족" />
        <Picker.Item label="친구" value="친구" />
        <Picker.Item label="연인" value="연인" />
      </Picker>
      <Picker
        style={{height: 50, width: 100, marginTop: 55, marginRight: 170}}
        selectedValue={Food}
        onValueChange={(itemValue, itemIndex) =>
          setFood(itemValue)
        }>
        <Picker.Item label="한식" value="한식" />
        <Picker.Item label="중식" value="중식" />
        <Picker.Item label="일식" value="일식" />
        <Picker.Item label="양식" value="양식" />
      </Picker>
      <Picker
        style={{height: 50, width: 140, marginTop: 50, marginRight: 130}}
        selectedValue={Play}
        onValueChange={(itemValue, itemIndex) =>
          setPlay(itemValue)
        }>
        <Picker.Item label="정적인 활동" value="정적인 활동" />
        <Picker.Item label="동적인 활동" value="동적인 활동" />
        <Picker.Item label="상관없음" value="상관없음" />
      </Picker>
      <SubmitButton onPress={()=>{ navigation.navigate('Recommend', {Where: Where, WithWho: WithWho, Food: Food, Play: Play})}}>
        <SubmitText>완료</SubmitText>
      </SubmitButton>
      <LocationModal isVisible={isLocation} CloseModal={CloseModal} Where={setWhere} WhereIndex={WhereIndex}></LocationModal>
    </Container>
    ); 
    }
    else{
        navigation.navigate('LogIn')
        return(  
            <LogInContainer>
            <LogInTextBox>
                <LogInText1>로그인후 이용해주세요!</LogInText1>
                <LogInText2>서비스를 이용하기 위해</LogInText2>
                <LogInText2> 로그인이 필요합니다.</LogInText2>
            </LogInTextBox>
            <LoginButton onPress={()=>navigation.navigate('LogIn')}>
                <LogInText3>
                로그인
                </LogInText3>
            </LoginButton>
            </LogInContainer>
        );
    }
}