import React, {Component} from 'react';
import styled from "styled-components/native"
import Modal from 'react-native-simple-modal';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { View, Text } from "react-native";

const Container = styled.View`
    marginTop: 10px;
    marginBottom: 40px;
    align-items: center;
    background-color: #ffffff;
`;

const Container1 = styled.View`
    flex-direction: row;
`;

const PickContainer = styled.View`
    width: 200px;
    align-items: center;
`;

const CheckButton = styled.TouchableOpacity`
    alignSelf: center;
    margin-right: 10px;
    marginBottom: 16px;
    margin-top: 50px;
    background-color: #266715;
    height: 42px;
    width: 128px;
    border-radius: 12px;
    justify-content: center;
`;

const CheckText = styled.Text`
    font-family: "Head2";
    fontSize: 15px;
    alignSelf: center;
    color: white;
`;

const ScrollContainer = styled.View`
    height: 300px;
    width: 250px;
    flex-direction: row;
`;

const ScrollText = styled.Text`
    fontSize: 20px;
`;


export default function LocationModal({isVisible, CloseModal, Where, WhereIndex }) {
    
    return(
        
        <Modal
            useNativeDriver = {true}
            open={isVisible}
            modalStyle={{
                borderRadius: 20,
                backgroundColor: "#ffffff",
             }}>
            
            <Container>
                <Container1>
                <ScrollContainer>
                    <ScrollPicker
            
                        dataSource={[
                            '강원도 고성군',
                            '강원도 양구군',
                            '강원도 원주시',
                            '강원도 인제군',
                            '강원도 철원군',
                            '강원도 홍천군',
                            '강원도 화천군',
                            '경기도 가평군',
                            '경기도 고양시',
                            '경기도 광명시',
                            '경기도 남양주시',
                            '경기도 안양시',
                            '경기도 양주시',
                            '경기도 연천군',
                            '경기도 용인시',
                            '경기도 이천시',
                            '경기도 파주시',
                            '경기도 포천시',
                            '경기도 화성시',
                            '서울특별시 관악구',
                            '인천광역시 부평구',
                            '대전광역시 유성구',
                            '세종특별자치시',
                            '충청남도 논산시',
                            '충청북도 증평군',
                            '경상남도 함안군',
                            '대구광역시 북구',
                            '부산광역시 해운대구',
                            '전라북도 임실군',
                            '광주광역시 북구',
                        ]}
                        selectedIndex={WhereIndex(Where)}
                        itemHeight={60}
                        wrapperHeight={300}
                        wrapperColor={'#ffffff'}
                        highlightColor={'#E5F6E4'}
                        highlightBorderWidth={30}
                        highlightWidth={100}
                        renderItem={(data, index, isSelected) => {
                            return(
                                <PickContainer>
                                    <ScrollText>{data}</ScrollText>
                                </PickContainer>
                            )
                        }}
                        onValueChange={(data, selectedIndex) => {
                            Where(data)
                        }
                    }>

                    </ScrollPicker>
                </ScrollContainer>
                </Container1>

                <CheckButton onPress={CloseModal}>
                    <CheckText>확인</CheckText>
                </CheckButton>

            </Container>
            
        </Modal>
        
    ); 
}