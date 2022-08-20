import React, {Component} from 'react';
import styled from "styled-components/native"
import Modal from 'react-native-simple-modal';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { View, Text } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

const Container = styled.View`
    margin-top: 10px;
    margin-bottom: 40px;
    align-items: center;
    background-color: #ffffff;
`;

const CheckButton = styled.TouchableOpacity`
    align-self: center;
    margin-right: 10px;
    margin-bottom: 16px;
    margin-top: 1px;
    background-color: #266715;
    height: 40px;
    width: 120px;
    border-radius: 12px;
    justify-content: center;
`;

const CheckText = styled.Text`
    color:  white;
    font-size: 15px;
    align-self: center;
    font-family: "Head2";
`;

const TitleText = styled.Text`
    color:  black;
    font-size: 28px;
    font-family: "Head2";
    align-self: center;
    text-align: center;
    margin-top: 50px;
`;

const ContentText = styled.Text`
    color:  black;
    font-size: 15px;
    font-family: "Head1";
    align-self: center;
    text-align: center;
    margin-top: 25px;
`;

const ContentText2 = styled.Text`
    color:  black;
    font-size: 15px;
    font-family: "Head1";
    align-self: center;
    width: 60%;
`;

const Line = styled.Image`
    margin-top: 40px;
    width: 80%;
    height: 1px;
    margin-bottom: 25px;
`;

const 두글자 = styled.Image`
    width: 60px;
    height: 19px;
    align-self: center;
    margin-right: 10px;
`;
const 네글자 = styled.Image`
    width: 90px;
    height: 17px;
    align-self: center;
    margin-right: 10px;
`;
const 세로 = styled.View`
    flex-direction: row;
    height: 50px;
    margin-bottom: 40px;
    align-items: center;
`;
const 왼쪽정렬 = styled.View`
    align-content: flex-start;
`;
export default function 숙박모달({isVisible, CloseModal, 이름, 설명, 주소, 번호, 기타, 순서}) {
    
    return(
        
        <Modal
            useNativeDriver = {true}
            open={isVisible}
            modalStyle={{
                borderRadius: 20,
                backgroundColor: "#ffffff",
                width: "90%",
                height: "90%",
             }}>
            
            <Container>
                <TitleText>{이름[순서]}</TitleText>
                <ContentText>{설명[순서]}</ContentText>
                <Line source={require("../assets/image/tjs.png")}/>
                <왼쪽정렬>
                    <세로>
                        <두글자 source={require("../assets/image/dnlcldkdlzhs.png")}/>
                        <ContentText2>{주소[순서]}</ContentText2>
                    </세로>
                    <세로>
                        <네글자 source={require("../assets/image/wjsghkansdmldkdlzhs.png")}/>
                        <ContentText2>{번호[순서]}</ContentText2>
                    </세로>
                    <세로>
                        <두글자 source={require("../assets/image/rlxkdkdlzhs.png")}/>
                        <ContentText2>{기타[순서]}</ContentText2>
                    </세로>
                </왼쪽정렬>
                <CheckButton onPress={CloseModal}>
                    <CheckText>확인</CheckText>
                </CheckButton>

            </Container>
            
        </Modal>
        
    ); 
}