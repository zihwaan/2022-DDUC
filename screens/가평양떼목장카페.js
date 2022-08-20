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
    width: 230px;
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

export default function 가평양떼목장카페({route}){
    const category = route.params.category;
    console.log(route.params.category);
    return(
        <Container>
            <PostImage source={require("../assets/image/GaCa.jpg")}/>
            <Box1>
                <ScrollView>
                    <PostTitle>{category}</PostTitle>
                    <PostContent1>가평양떼목장카페는 끝이 보이지 않는 산과 대자연, 6만평초지에 사람과 공존하는 정갈하고 아름다운 카페. 양 먹이주기 체험 가능 </PostContent1>



                    <왼쪽정렬>
                        <세로>
                            <두글자 source={require("../assets/image/dnlcldkdlzhs.png")}/>
                            <ContentText2>경기도 가평군 설악면 유명로 1209</ContentText2>
                        </세로>
                        <세로>
                            <전화문의 source={require("../assets/image/wjsghkansdmldkdlzhs.png")}/>
                            <ContentText2>031-585-1155</ContentText2>
                        </세로>
                        <세로>
                            <영업시간 source={require("../assets/image/duddjqtlrksdkdlzhs.png")}/>
                            <ScrollView>
                            <ContentText2>오전 10:00 ~ 오후 07:00</ContentText2>
                            </ScrollView>
                        </세로>
                        <세로>
                            <네글자 source={require("../assets/image/gktl.png")}/>
                            <ScrollView>
                            <ContentText2>아메리카노, 클래식 크로아상, 카페라떼 등</ContentText2>
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