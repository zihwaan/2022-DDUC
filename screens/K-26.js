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

export default function K_26({route}){
    const category = route.params.category;
    console.log(route.params.category);
    return(
        <Container>
            <PostImage source={require("../assets/image/K-26.png")}/>
            <Box1>
                <ScrollView>
                    <PostTitle>{category}</PostTitle>
                    <PostContent1>아시아 최고의 깊이와 최고의 기술로 사시사철 프리다이빙을 즐길 수 있는 실내 잠수풀</PostContent1>

                    <왼쪽정렬>
                        <세로>
                            <두글자 source={require("../assets/image/dnlcldkdlzhs.png")}/>
                            <ContentText2>경기도 가평군 청평면 고재길 262-57</ContentText2>
                        </세로>
                        <세로>
                            <전화문의 source={require("../assets/image/wjsghkansdmldkdlzhs.png")}/>
                            <ContentText2>031-585-5757</ContentText2>
                        </세로>
                        <세로>
                            <영업시간 source={require("../assets/image/duddjqtlrksdkdlzhs.png")}/>
                            <ScrollView>
                            <ContentText2>오전 09:00 ~ 오후 10:00</ContentText2>
                            </ScrollView>
                        </세로>
                        <세로>
                            <네글자 source={require("../assets/image/gktl.png")}/>
                            <ScrollView>
                            <ContentText2>일반 입장권(평일) : 33,000원 / 키 반납 시간 기준 3시간 일반 입장권(공휴일) : 55,000원 / 키 반납 시간 기준 3시간 종일 입장권(평일) : 53,000원(평일입장권+2만원) / 평일 19:00까지 이용 가능 체험다이빙 : 120,000원(2인 이상 참가시 10만원) 평일만가능 ※ 자세한 내용은 홈페이지 참조 (k-26.com)</ContentText2>
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