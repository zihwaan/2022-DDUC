import React, {useEffect, useState, useCallback} from "react";
import styled from "styled-components/native"
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../firebase"
import { View, Linking } from "react-native";
import { WithLocalSvg } from "react-native-svg"
import Pick from "../assets/icon/pick.svg";
//import { FlatList } from 'react-native';

const Container = styled.View`
    flex: 1;
    backgroundColor: "#FAFAFA";
`;
const MyArea = styled.Text`
    font-size: 17px;
    font-family: "Fighter";
    margin-left: 20px;
    margin-top: 10px;
`;
const MapBox = styled.View`
    width: 330px;
    height: 356px;
    alignItems: center;
    marginTop: 10px;
    alignSelf: center;
`;
const VerticalView = styled.View`
    flex-direction: row;
    align-items: center;
`;
const LocalBox1 = styled.View`
    flexDirection: row;
    width: 330px;
    height: 100px;
    justifyContent: space-between;
    alignItems: center;
    marginTop: 20px;
`;
const LocalBox2 = styled.View`
    flexDirection: row;
    width: 330px;
    height: 80px;
    justifyContent: space-between;
    alignItems: center;  
`;
const LocalBox3 = styled.View`
    flexDirection: row;
    width: 330px;
    height: 80px;
    justifyContent: space-between;
    alignItems: center;  
`;
const LocalBox4 = styled.View`
    flex-direction: row;
    width: 330px;
    height: 80px;
    justifyContent: space-between;
    alignItems: center;  
`;
const LocalTouch = styled.TouchableOpacity`
`;
const LocalName1 = styled.Image`
    width: 28px;
    height: 52px;
    marginLeft: 88px;
`;
const LocalName2 = styled.Image`
    width: 29px;
    height: 14px;
    marginRight: 105px;
    marginTop: -15px;
`;
const LocalName3 = styled.Image`
    width: 63px;
    height: 33px;
    marginLeft: 105px;
    margin-top: -13px;
`;
const LocalName4 = styled.Image`
    width: 33px;
    height: 16px;
    marginTop: -20px;
`;
const LocalName5 = styled.Image`
    width: 33px;
    height: 38px;
    marginRight: 70px;
    marginTop: 60px;
`;
const LocalName6 = styled.Image`
    width: 33px;
    height: 16px;
    marginLeft: 100px;
    marginTop: -10px;
`;
const LocalName7 = styled.Image`
    width: 28px;
    height: 52px;
    marginLeft: 105px;
    marginTop: 55px;
`;
const LocalName8 = styled.Image`
    width: 63px;
    height: 33px;
    marginRight: 70px;
    marginTop: -20px;
`;
const Map = styled.Image`
    width: 330px;
    height: 356px;
    position: absolute;
`;
const RecommendView = styled.View`
    width: 330px;
    height: 270px;
    marginTop: 20px;
    margin-bottom: 20px;
    alignSelf: center;
    backgroundColor: white;
`;
const HoriScroll = styled.ScrollView`
    margin-left: 15px;
    margin-bottom: 15px;
`;
const RecommendText = styled.Text`
    font-family: "Head2";
    font-size: 16px;
    color: #373737;
    align-self: flex-start;
    margin-top: 12px;
    margin-left: 12px;
    margin-bottom: 12px;
    margin-right: 4px;
`;
const RecommendImage = styled.Image`
    width: 214px;
    height: 120px;
`;
const RecommendBox = styled.View`
    width: 214px;
    height: 100%;
    background-color: #E5F6E4;
    margin-right: 15px;
    align-items: center;
`;
const RecommendTitle = styled.Text`
    align-self: center;
    margin-top: 10px;
    font-size: 15px;
    font-family: "Head2";
`;
const RecommendContent = styled.Text`
    align-self: center;
    text-align: center;
    margin-top: 15px;
    font-size: 11px;
    font-family: "Head1";
`;
const BannerImage = styled.Image`
    width: 100%;
    height: 65px;
    margin-top: 10px;
    margin-bottom: 20px;
`;
const 픽이미지 = styled.Image`
    width: 40px;
    height: 15px;
    margin-left: 5px;
`;

export default function Home({navigation}) {
  const [, updateState] = useState(); // 상태 변수는 선언하지 않는다
  const forceUpdate =  useCallback(() => updateState({}), []);

    const [RecommendPlace, setRecommendPlace] = useState([]);
    var [RecommendPlace_explain, setRecommendPlace_explain]  = useState([]);
    
    const getData = () => {
        db.collection("Recommend").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                RecommendPlace.push(doc.id);
                //console.log("RecommendPlace[0] : " + RecommendPlace[0]);
                //console.log("RecommendPlace[1] : " + RecommendPlace[1]);
                //console.log("RecommendPlace[2] : " + RecommendPlace[2]);
                RecommendPlace_explain.push(doc.data().설명);
                console.log("doc.설명 : " + doc.data().설명);
                console.log("설명 : " + RecommendPlace_explain[0]);

                forceUpdate();// 강제 리렌더
            });
        })
    };

    useEffect(() => {
        getData();
    }, []);
    
    return ( 
        <Container>
            <ScrollView>
            <MapBox>
                <Map source={require("../assets/image/Map.png")} />
                <LocalBox1>
                    <LocalTouch onPress={()=>{ navigation.navigate('서울경기인천')}}><LocalName1 source={require("../assets/image/tjdnfrudrldlscjs.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{ navigation.navigate('강원')}}><LocalName2 source={require("../assets/image/Gang.png")}/></LocalTouch>
                </LocalBox1>
                <LocalBox2>
                    <LocalTouch onPress={()=>{ navigation.navigate('충북대전충남세종')}}><LocalName3 source={require("../assets/image/cndqnreowjscndskatpwhd.png")}/></LocalTouch>
                </LocalBox2>
                <LocalBox4>
                    <LocalTouch onPress={()=>{ navigation.navigate('전북전남광주')}}><LocalName7 source={require("../assets/image/roQkr.png")}/></LocalTouch>
                    <LocalTouch onPress={()=>{ navigation.navigate('경북대구경남부산')}}><LocalName8 source={require("../assets/image/gkdktlfgdj.png")}/></LocalTouch>
                </LocalBox4>
            </MapBox>

            <RecommendView>
                <VerticalView>
                <RecommendText>지금 핫한 플레이스</RecommendText>
                <픽이미지 source={require("../assets/image/vlvlr.png")}/>
                </VerticalView>
                <HoriScroll horizontal={true}>
                    <LocalTouch onPress = {()=>{ navigation.navigate('K-26',{category: RecommendPlace[0],
                                                                            Explain : RecommendPlace_explain[0]})}}>
                        <RecommendBox>
                            <RecommendImage source={require("../assets/image/K-26.png")}/>
                            <RecommendTitle>{RecommendPlace[0]}</RecommendTitle>
                            <RecommendContent>{RecommendPlace_explain[0]}</RecommendContent>
                        </RecommendBox>
                    </LocalTouch>
                    <LocalTouch onPress = {()=>navigation.navigate('오션숯불갈비',{category: RecommendPlace[2],
                                                                            Explain : RecommendPlace_explain[2]})}>
                        <RecommendBox>
                            <RecommendImage source={require("../assets/image/dhtustncqnfrkfql.jpg")}/>
                            <RecommendTitle>{RecommendPlace[2]}</RecommendTitle>
                            <RecommendContent>{RecommendPlace_explain[2]}</RecommendContent>
                        </RecommendBox>
                    </LocalTouch>
                    <LocalTouch onPress = {()=>navigation.navigate('가평양떼목장카페',{category: RecommendPlace[1],
                                                                            Explain : RecommendPlace_explain[1]})}>
                        <RecommendBox>
                            <RecommendImage source={require("../assets/image/GaCa.jpg")}/>
                            <RecommendTitle>{RecommendPlace[1]}</RecommendTitle>
                            <RecommendContent>{RecommendPlace_explain[1]}</RecommendContent>
                        </RecommendBox>
                    </LocalTouch>
                </HoriScroll>
            </RecommendView>

            <LocalTouch onPress={() => {
                                    Linking.openURL("https://accessible-bear-91f.notion.site/fd56a1b9ebfa4046a14904f2fdc2a3c1")
                                    .catch(err => {
                                        console.error("페이지 로딩 실패 : ", err)
                                        alert('페이지 로딩에 실패했습니다ㅠㅠ')
                                    })}}> 
                <BannerImage source={require("../assets/image/Banner.png")}/>
            </LocalTouch>
            </ScrollView>
        </Container>
    );
}