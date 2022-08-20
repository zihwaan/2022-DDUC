import React, {useEffect, useRef, useState, useCallback} from "react";
import styled from "styled-components/native"
import { TouchableOpacity, View, Text, Linking, Button } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { WithLocalSvg } from "react-native-svg"
import CampaignIcon from "../assets/icon/campaign_black_24dp.svg";
import ErrorIcon from "../assets/icon/error_outline_black_24dp.svg";
import QuestionIcon from "../assets/icon/help_outline_black_24dp.svg";
import SupportIcon from "../assets/icon/support_agent_black_24dp.svg";
import AssignmentIcon from "../assets/icon/assignment_black_24dp.svg"
import SettingIcon from "../assets/icon/settings_black_24dp.svg";
import * as firebase from "firebase";
import { auth } from "../firebase";

const Container = styled.View`
    flex: 1;
    backgroundColor: "#FAFAFA";
`;
const Box1 = styled.View`
    width: auto;
    marginTop: 25px;
    marginLeft: 30px;
    marginRight: 30px;
    marginBottom: 30px;
    borderRadius: 10px;
    borderWidth: 2px;
    borderColor: black;
    background-color: #ECF7EC;
`;
const ProfileImage = styled.Image`
    borderRadius: 10px;
    borderWidth: 1px;
    borderColor: black;
    marginBottom: 10px;
    marginLeft: 10px;
    marginTop: 10px;
`;
const ABox = styled.View`
    flex-direction: row;
`;
const NameBox = styled.View`
    flex-direction: row;
    marginLeft: 30px;
    alignItems: center;
`;
const UserName = styled.Text`
    fontFamily: "Head2";
    fontSize: 14.5px;
    marginRight: 10px;
`;
const Text1 = styled.Text`
    fontFamily: "Head2";
    fontSize: 15px;
`;
const ListBox = styled.View`
    width: 80%;
    alignSelf: center;
    background-color: white;
    border-radius: 11px;
    align-items: center;
`;
const SettingButton = styled.TouchableOpacity`

`;
const SettingBox = styled.View`
    display: flex;
    width: 90%;
    flex-direction: row;
    borderBottomColor: grey;
    border-bottom-width: 1px;
    paddingBottom: 7px;
    marginTop: 15px;
`;
const Setting = styled.Text`
    marginLeft: 10px;
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

const Character = styled.Image`
  width: 70%;
  height: 30%;
`;


const LogOutBtn = styled.TouchableOpacity`
    backgroundColor: #C9C8C8;
    paddingLeft: 15px;
    paddingRight: 15px;
    paddingTop: 15px;
    paddingBottom: 15px;
    borderRadius: 10px;
    alignItems: center;
    width: 70%;
    height: 50px;
    marginBottom: 10px;
    margin-top: -40px;
    align-self: center;
    justify-content: center;
`;
const LogOutTxt = styled.Text`
    color: white;
    fontFamily: "Head2";
`;
const ExternalLinkBtn = (props) => {
    return <Button
              title={props.title}
              onPress={() => {
                  Linking.openURL(props.url)
                  .catch(err => {
                      console.error("Failed opening page because: ", err)
                      alert('Failed to open page')
                  })}}
            />
  }

export default function MyInfo({navigation}) {

    const [, updateState] = useState(); // 상태 변수는 선언하지 않는다
    const forceUpdate =  useCallback(() => updateState({}), []);

    const handleSignOut = () => {
        Aming
        .signOut()
        .then(() => {
            navigation.navigate("LogIn");
        })
        .catch(error => alert(error.message))
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
                forceUpdate();
        })
        return unsubscribe;
    }, [])

    //const isLoggedIn = (auth.CurrentUser?.email != undefined);
    //console.log("이메일:" + auth.CurrentUser);
    const Aming = firebase.auth();
    const user = Aming.currentUser;
    //console.log(user.email);

    let LogInState = user;

    if(LogInState){
    return(
        <Container>
            <Box1>
                <ABox>
                    <ProfileImage source={require("../assets/image/defaultProfile.png")} />
                    <NameBox>
                        <UserName>{user.email}</UserName>
                        <Text1>님</Text1>
                    </NameBox>
                </ABox>
            </Box1>
            <ScrollView>
                <ListBox>
                        <SettingBox>
                            <WithLocalSvg asset={CampaignIcon} />
                            <TouchableOpacity onPress={() => {
                                    Linking.openURL("https://accessible-bear-91f.notion.site/aa25842172d04a159f8584604d196f66")
                                    .catch(err => {
                                        console.error("페이지 로딩 실패 : ", err)
                                        alert('페이지 로딩에 실패했습니다ㅠㅠ')
                                    })}}>
                                <Setting>공지사항</Setting>
                            </TouchableOpacity>
                        </SettingBox>
                        <SettingBox>
                            <WithLocalSvg asset={ErrorIcon} />
                            <SettingButton onPress={() => {
                                    Linking.openURL("https://accessible-bear-91f.notion.site/175061e0c0ca424d83bf515689a85941")
                                    .catch(err => {
                                        console.error("페이지 로딩 실패 : ", err)
                                        alert('페이지 로딩에 실패했습니다ㅠㅠ')
                                    })}}>
                                <Setting>어플에 대한 의견</Setting>
                            </SettingButton>
                        </SettingBox>
                        <SettingBox>
                            <WithLocalSvg asset={QuestionIcon} />
                            <SettingButton onPress={() => {
                                    Linking.openURL("https://accessible-bear-91f.notion.site/917fd7e6a65241c2bf55c1312c654c2c")
                                    .catch(err => {
                                        console.error("페이지 로딩 실패 : ", err)
                                        alert('페이지 로딩에 실패했습니다ㅠㅠ')
                                    })}}>
                                <Setting>자주 묻는 질문</Setting>
                            </SettingButton>
                        </SettingBox>
                        <SettingBox>
                            <WithLocalSvg asset={SupportIcon} />
                            <SettingButton onPress={() => {
                                    Linking.openURL("https://accessible-bear-91f.notion.site/830d2a7ff716430ab2eb2c44ae41747f")
                                    .catch(err => {
                                        console.error("페이지 로딩 실패 : ", err)
                                        alert('페이지 로딩에 실패했습니다ㅠㅠ')
                                    })}}>
                                <Setting>고객센터</Setting>
                            </SettingButton>
                        </SettingBox>
                        <SettingBox>
                            <WithLocalSvg asset={AssignmentIcon} />
                            <SettingButton onPress={() => {
                                    Linking.openURL("https://accessible-bear-91f.notion.site/eafce04389c64500a3a9aca59bbf0e4d")
                                    .catch(err => {
                                        console.error("페이지 로딩 실패 : ", err)
                                        alert('페이지 로딩에 실패했습니다ㅠㅠ')
                                    })}}>
                                <Setting>약관 및 정책</Setting>
                            </SettingButton>
                        </SettingBox>
                </ListBox>
            </ScrollView>
            <LogOutBtn onPress={handleSignOut}>
                <LogOutTxt>로그아웃</LogOutTxt>
            </LogOutBtn>
        </Container>
        );
        }
        else{
            navigation.navigate("LogIn")
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

