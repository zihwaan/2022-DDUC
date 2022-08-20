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
    height: 100px;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;
const LocalBox2 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 100px;
    align-items: center;
    margin-top: 50px;
`;
const LocalTouch = styled.TouchableOpacity`
`;
const LocalName1 = styled.Image`
    width: 84px;
    height: 16px;
    margin-top: 10px;
`;
const LocalName2 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 80px;
`;
const LocalName3 = styled.Image`
    width: 84px;
    height: 16px;
    margin-left: 85px;
`;
const Map = styled.Image`
    width: 330px;
    height: 356px;
    position: absolute;
`;

export default function 경북대구경남부산({navigation, route}){
    return(
        <Container>
            <MapBox>
                <Map source={require("../../assets/image/dkarjsk.png")} />
                <LocalBox1>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "대구광역시"})}}><LocalName1 source={require("../../assets/image/eornrhkddurtl.png")}/></LocalTouch>
                </LocalBox1>
                <LocalBox2>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "함안"})}}><LocalName2 source={require("../../assets/image/gkadks.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "부산광역시"})}}><LocalName3 source={require("../../assets/image/qntksrhkddurtl.png")}/></LocalTouch>
                </LocalBox2>
            </MapBox>
        </Container>
    );
}