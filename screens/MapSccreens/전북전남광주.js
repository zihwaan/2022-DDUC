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
    align-self: center;
    marginTop: 20px;
    alignSelf: center;
`;
const LocalBox1 = styled.View`
    width: 330px;
    height: 100px;
    justify-content: center;
    align-items: flex-end;
    marginTop: 50px;
`;
const LocalBox2 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 100px;
    justify-content: space-between;
    alignItems: center;
    marginTop: 50px;
`;
const LocalTouch = styled.TouchableOpacity`
`;
const LocalName1 = styled.Image`
    width: 33px;
    height: 16px;
    margin-top: 10px;
    margin-right: 75px;
`;
const LocalName2 = styled.Image`
    width: 84px;
    height: 16px;
    margin-left: 53px;
`;
const Map = styled.Image`
    width: 330px;
    height: 356px;
    position: absolute;
`;

export default function 전북전남광주({navigation, route}){
    return(
        <Container>
            <MapBox>
                <Map source={require("../../assets/image/ggg.png")} />
                <LocalBox1>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "임실"})}}><LocalName1 source={require("../../assets/image/rmaks.png")}/></LocalTouch>
                </LocalBox1>
                <LocalBox2>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "광주광역시"})}}><LocalName2 source={require("../../assets/image/rhkdwnrhkddurtl.png")}/></LocalTouch>
                </LocalBox2>
            </MapBox>
        </Container>
    );
}