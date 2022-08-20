import React, {useState} from "react";
import { WithLocalSvg } from "react-native-svg";
import styled from "styled-components/native"
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.View`
    flex: 1;
    background-color: white;
`;

const PostImage = styled.Image`
    width: 100%;
    height: 20%;
    alignSelf: center;
`;
const Box1 = styled.View`
    width: 102.5%;
    height: 80%;
    alignSelf: center;
    borderWidth: 1px;
    borderColor: black;
    borderTopStartRadius: 20px;
    borderTopEndRadius: 20px;
    background-color: white;
    marginTop: -6px;
`;
const PostTitle = styled.Text`
    font-family: "Head3";
    fontSize: 24px;
    marginLeft: 20px;
    marginTop: 35px;
`;
const PostContent1 = styled.Text`
    font-family: "Head2";
    fontSize: 15px;
    width: 90%;
    marginLeft: 20px;
    marginTop: 20px;
    line-height: 40px;
`;

const PostContent2 = styled.Text`
    font-family: "Head1";
    fontSize: 15px;
    width: 90%;
    marginLeft: 20px;
    marginTop: 20px;
    line-height: 35px;
`;

const ContentText2 = styled.Text`
    color:  black;
    font-size: 15px;
    font-family: "Head1";
    align-self: center;
    width: 200px;
`;

const 두글자 = styled.Image`
    width: 60px;
    height: 19px;
    align-self: center;
    margin-right: 10px;
`;
const 전화문의 = styled.Image`
    width: 84px;
    height: 16px;
    align-self: center;
    margin-right: 10px;
`;
const 영업시간 = styled.Image`
    width: 88px;
    height: 19.5px;
    align-self: center;
    margin-right: 10px;
`;
const 네글자 = styled.Image`
    width: 90px;
    height: 16px;
    align-self: center;
    margin-right: 10px;
`;
const 세로 = styled.View`
    flex-direction: row;
    height: 50px;
    margin-bottom: 8px;
    align-items: center;
`;
const 왼쪽정렬 = styled.View`
    align-content: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 50px;
`;

export default function 오션숯불갈비({route}){
    const category = route.params.category;
    console.log(route.params.category);
    return(
        <Container>
            <PostImage source={require("../assets/image/dhtustncqnfrkfql.jpg")}/>
            <Box1>
                <ScrollView>
                    <PostTitle>{category}</PostTitle>
                    <PostContent1>삼포해변을 바라보며 즐길 수 있는 바비큐장이다. 흩어지는 바다 내음, 숯불 내음 그리고 사랑하는 사람에게 건네는 ''쌈'' 한주먹에는 웃음이 있다. 해안선을 따라 쏟아지는 별빛이 반짝거리는 바비큐장에서 잊지 못할 추억을 만들 수 있다.</PostContent1>


                    <왼쪽정렬>
                        <세로>
                            <두글자 source={require("../assets/image/dnlcldkdlzhs.png")}/>
                            <ContentText2>강원도 고성군 죽왕면 삼포해변길 9</ContentText2>
                        </세로>
                        <세로>
                            <전화문의 source={require("../assets/image/wjsghkansdmldkdlzhs.png")}/>
                            <ContentText2>1666-1243</ContentText2>
                        </세로>
                        <세로>
                            <영업시간 source={require("../assets/image/duddjqtlrksdkdlzhs.png")}/>
                            <ScrollView>
                            <ContentText2>18:00 ~ 22:00</ContentText2>
                            </ScrollView>
                        </세로>
                        <세로>
                            <네글자 source={require("../assets/image/gktl.png")}/>
                            <ScrollView>
                            <ContentText2>삼겹살 / 목살 / 돼지갈비 / 막창 / 훈제오리 / 새우 / 바베큐플레이츠</ContentText2>
                            </ScrollView>
                        </세로>
                        <세로>
                            <두글자 source={require("../assets/image/rlxkdkdlzhs.png")}/>
                            <ContentText2></ContentText2>
                        </세로>
                    </왼쪽정렬>
                </ScrollView>
            </Box1>
            
        </Container>
    );
}