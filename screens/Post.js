import React, {useState} from "react";
import { WithLocalSvg } from "react-native-svg";
import styled from "styled-components/native"
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.View`
    flex: 1;
    background-color: white;
`;

const PostImage = styled.Image`
    width: 50%;
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
const PostContent = styled.Text`
    font-family: "Head1";
    fontSize: 15px;
    width: 90%;
    marginLeft: 20px;
    marginTop: 20px;
`;

export default function Post({route}){
    console.log(route.params.category);
    return(
        <Container>
            <PostImage source={require("../assets/image/djqepdlxm.png")}/>
            <Box1>
                <ScrollView>
                    <PostTitle>업데이트 예정</PostTitle>
                    <PostContent>아직 제휴를 맺은 가맹점이 존재하지 않습니다.</PostContent>
                    <PostContent>향후 가맹점을 업데이트 할 예정입니다.</PostContent>
                    <PostContent>가맹 문의 : optimize21@g.skku.edu</PostContent>
                </ScrollView>
            </Box1>
            
        </Container>
    );
}