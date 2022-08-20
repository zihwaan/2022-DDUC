import React, {useState} from "react";
import { WithLocalSvg } from "react-native-svg";
import styled from "styled-components/native"
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";

const Container = styled.View`
    flex: 1;
    backgroundColor: "#FAFAFA";
`;
const MapBox = styled.View`
    width: 330px;
    height: 356px;
    alignItems: center;
    marginTop: 20px;
    alignSelf: center;
`;
const VerticalView = styled.View`
    flex-direction: row;
    align-items: center;
`;
const LocalBox1 = styled.View`
    width: 330px;
    height: 60px;
    justify-content: center;
    alignItems: center;
    marginTop: 20px;
`;
const LocalBox2 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 60px;
    alignItems: center;
    marginTop: 5px;
`;
const LocalBox3 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 50px;
    alignItems: center;
    marginTop: 5px;
`;
const LocalBox4 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 120px;
    alignItems: center;
    marginTop: 5px;
`;
const LocalTouch = styled.TouchableOpacity`
`;
const LocalName1 = styled.Image`
    width: 33px;
    height: 16px;
    margin-top: 10px;
    margin-right: 10px;
`;
const LocalName2 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 45px;
    margin-bottom: 10px;
`;
const LocalName3 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 30px;
    margin-top: 40px;
`;
const LocalName4 = styled.View`
    width: 40px;
    height: 13px;
    margin-bottom: 80px;
    margin-top: 40px;
    margin-left: 5px;
`;
const LocalName5 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 20px;
    margin-bottom: 90px;
    margin-top: 40px;
`;
const LocalName6 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 20px;
    margin-bottom: 60px;
    margin-top: 40px;
`;
const LocalName7 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 45px;
`;
const LocalName8 = styled.Image`
    width: 40px;
    height: 13px;
    margin-left: 70px;
    margin-bottom: 30px;
`;
const LocalName9 = styled.Image`
    width: 35px;
    height: 11px;
    margin-left: 15px;
`;
const LocalName10 = styled.Image`
    width: 26px;
    height: 12px;
    margin-left: -28px;
    margin-top: 60px;
`;
const LocalName11 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 75px;
    margin-bottom: 20px;
`;
const LocalName12 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 120px;
`;
const Map = styled.Image`
    width: 330px;
    height: 356px;
    position: absolute;
`;

export default function 경기북부({navigation, route}){
    return(
        <Container>
            <MapBox>
                <Map source={require("../../assets/image/gkrltlfgdj.png")} />
                <LocalBox1>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "연천"})}}><LocalName1 source={require("../../assets/image/duscjs.png")}/></LocalTouch>
                </LocalBox1>
                <LocalBox2>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "파주"})}}><LocalName2 source={require("../../assets/image/vkwn.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "양주"})}}><LocalName3 source={require("../../assets/image/didwn.png")}/></LocalTouch>
                    <LocalName4></LocalName4>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "포천"})}}><LocalName5 source={require("../../assets/image/vhcjs.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "가평"})}}><LocalName6 source={require("../../assets/image/GPGP.png")}/></LocalTouch>
                </LocalBox2>
                <LocalBox3>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "고양"})}}><LocalName7 source={require("../../assets/image/rhdid.png")}/></LocalTouch>
                    <LocalName8></LocalName8>
                    <LocalName10></LocalName10>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "남양주"})}}><LocalName9 source={require("../../assets/image/skadidwn.png")}/></LocalTouch>
                </LocalBox3>
            </MapBox>
        </Container>
    );
}