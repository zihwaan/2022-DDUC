import React, {useState} from "react";
import { WithLocalSvg } from "react-native-svg";
import styled from "styled-components/native"
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: "#FAFAFA";
`;
const MapBox = styled.View`
    width: 330px;
    height: 356px;
    align-items: center;
    margin-top: 20px;
    align-self: center;
`;
const LocalBox1 = styled.View`
    width: 330px;
    height: 60px;
    flex-direction: row;
    align-items: center;
    margin-top: 45px;
`;
const LocalBox2 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 60px;
    align-items: center;
    margin-top: 120px;
`;
const LocalTouch = styled.TouchableOpacity`
`;
const LocalName1 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 50px;
`;
const LocalName2 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 65px;
`;
const LocalName3 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 50px;
`;
const LocalName4 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 68px;
`;
const LocalName5 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 65px;
`;
const Map = styled.Image`
    width: 330px;
    height: 356px;
    position: absolute;
`;

export default function 경기남부({navigation, route}){
    return(
        <Container>
            <MapBox>
                <Map source={require("../../assets/image/dkdrl.png")} />
                <LocalBox1>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "광명"})}}><LocalName1 source={require("../../assets/image/rhkdaud.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "안양"})}}><LocalName2 source={require("../../assets/image/dksdid.png")}/></LocalTouch>
                </LocalBox1>
                <LocalBox2>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "화성"})}}><LocalName3 source={require("../../assets/image/ghk.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "용인"})}}><LocalName4 source={require("../../assets/image/dyddls.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "이천"})}}><LocalName5 source={require("../../assets/image/dlcjs.png")}/></LocalTouch>
                </LocalBox2>
            </MapBox>
        </Container>
    );
}