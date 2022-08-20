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
const LocalBox1 = styled.View`
    width: 330px;
    height: 100px;
    alignItems: center;
    marginTop: 40px;
    flex-direction: row;
`;
const LocalBox2 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 80px;
    justify-content: center;
    alignItems: center;
    marginTop: 5px;
`;
const LocalBox3 = styled.View`
    width: 330px;
    height: 100px;
    justify-content: center;
    marginTop: 5px;
`;
const LocalTouch = styled.TouchableOpacity`
`;
const LocalName1 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 32px;
`;
const LocalName2 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 25px;
`;
const LocalName3 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 27px;
`;
const LocalName4 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 23px;
    margin-top: 82px;
`;
const LocalName5 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 25px;
`;
const LocalName6 = styled.Image`
    width: 33px;
    height: 16px;
    margin-top: 75px;
    margin-left: 20px;
`;
const LocalName7 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 50px;
`;
const Map = styled.Image`
    width: 330px;
    height: 356px;
    position: absolute;
`;

export default function 강원({navigation, route}){
    return(
        <Container>
            <MapBox>
                <Map source={require("../../assets/image/GWGW.png")} />
                <LocalBox1>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "철원"})}}><LocalName1 source={require("../../assets/image/cjfdnjs.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "화천"})}}><LocalName2 source={require("../../assets/image/djd.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "양구"})}}><LocalName3 source={require("../../assets/image/didrn.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "인제"})}}><LocalName4 source={require("../../assets/image/dlswp.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "고성"})}}><LocalName5 source={require("../../assets/image/rhrh.png")}/></LocalTouch>
                </LocalBox1>
                <LocalBox2>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "홍천"})}}><LocalName6 source={require("../../assets/image/ghdcjs.png")}/></LocalTouch>
                </LocalBox2>
                <LocalBox3>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "원주"})}}><LocalName7 source={require("../../assets/image/dnjswn.png")}/></LocalTouch>
                </LocalBox3>
            </MapBox>
        </Container>
    );
}