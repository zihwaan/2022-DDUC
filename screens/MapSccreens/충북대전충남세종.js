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
    justify-content: center;
    align-items: flex-end;
    marginTop: 20px;
`;
const LocalBox2 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 100px;
    alignItems: center;
    marginTop: 5px;
`;
const LocalBox3 = styled.View`
    width: 330px;
    height: 100px;
    justify-content: center;
    align-items: flex-start;
    margin-top: 5px;
`;
const LocalTouch = styled.TouchableOpacity`
`;
const LocalName1 = styled.Image`
    width: 33px;
    height: 16px;
    margin-right: 30px;
    margin-top: 10px;
`;
const LocalName2 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 91px;
    margin-bottom: 30px;
`;
const LocalName3 = styled.Image`
    width: 102px;
    height: 14px;
    margin-left: 20px;
    margin-top: 70px;
`;
const LocalName4 = styled.Image`
    width: 84px;
    height: 16px;
    margin-left: 37px;
    margin-top: -25px;
`;
const Map = styled.Image`
    width: 330px;
    height: 356px;
    position: absolute;
`;

export default function 충북대전충남세종({navigation, route}){
    return(
        <Container>
            <MapBox>
                <Map source={require("../../assets/image/cndqnreowjscndskatpwhdwleh.png")} />
                <LocalBox1>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "증평"})}}><LocalName1 source={require("../../assets/image/wmdvud.png")}/></LocalTouch>
                </LocalBox1>
                <LocalBox2>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "논산"})}}><LocalName2 source={require("../../assets/image/shstks.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "세종특별자치시"})}}><LocalName3 source={require("../../assets/image/tpwhdxmrqufwkcltl.png")}/></LocalTouch>
                </LocalBox2>
                <LocalBox3>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "대전광역시"})}}><LocalName4 source={require("../../assets/image/eowjsrhkddurtl.png")}/></LocalTouch>
                </LocalBox3>
            </MapBox>
        </Container>
    );
}