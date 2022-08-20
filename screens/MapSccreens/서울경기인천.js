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
    height: 100px;
    justify-content: center;
    alignItems: center;
    marginTop: 20px;
`;
const LocalBox2 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 100px;
    justify-content: space-between;
    alignItems: center;
    marginTop: 5px;
`;
const LocalBox3 = styled.View`
    width: 330px;
    height: 100px;
    justify-content: center;
    alignItems: center;
    marginTop: 5px;
`;
const LocalTouch = styled.TouchableOpacity`
`;
const LocalName1 = styled.Image`
    width: 67px;
    height: 16px;
    margin-top: 10px;
`;
const LocalName2 = styled.Image`
    width: 33px;
    height: 16px;
    margin-left: 63px;
`;
const LocalName3 = styled.Image`
    width: 33px;
    height: 16px;
    margin-right: 150px;
`;
const LocalName4 = styled.Image`
    width: 67px;
    height: 16px;
    margin-bottom: 10px;
`;
const Map = styled.Image`
    width: 330px;
    height: 356px;
    position: absolute;
`;

export default function 서울경기인천({navigation, route}){
    //route.params.set내위치.set내위치("목동");
    return(
        <Container>
            <MapBox>
                <Map source={require("../../assets/image/SGI.png")} />
                <LocalBox1>
                    <LocalTouch onPress={()=>{ navigation.navigate('경기북부')}}><LocalName1 source={require("../../assets/image/gkdldy.png")}/></LocalTouch>
                </LocalBox1>
                <LocalBox2>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "인천"})}}><LocalName2 source={require("../../assets/image/dlscjs.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{navigation.navigate('리스트', {Where : "서울"})}}><LocalName3 source={require("../../assets/image/tjdnf.png")}/></LocalTouch>
                </LocalBox2>
                <LocalBox3>
                    <LocalTouch  onPress={()=>{ navigation.navigate('경기남부')}}><LocalName4 source={require("../../assets/image/tjdrbs.png")}/></LocalTouch>
                </LocalBox3>
            </MapBox>
        </Container>
    );
}