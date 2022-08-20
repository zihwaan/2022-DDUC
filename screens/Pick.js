import React from "react";
import styled from "styled-components/native"
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";

const Container = styled.View`
    flex: 1;
    background-color: "#FAFAFA";
`;

const Box1 = styled.View`
    display: flex;
    flex-direction: row;
    justifyContent: space-between;
    marginTop: 30px;
`;

const CategoryButton = styled.TouchableOpacity`
`;

const Box2 = styled.View`
    alignItems: center;
    borderWidth: 0.7px;
    borderRadius: 10px;
    margin-left: 25px;
    background-color: #E5F6E4;
`;

const Box3 = styled.View`
    alignItems: center;
    borderWidth: 0.7px;
    borderRadius: 10px;
    marginRight: 25px;
    background-color: #E5F6E4;
`;

const Image1 = styled.Image`
    width: 148px;
    height: 140px;
    borderRadius: 10px;
`;

const Text1 = styled.Text`
    fontSize: 15px;
    marginTop: 5px;
    font-family: "Head3";
    margin-top: 10px;
`;

const Text2 = styled.Text`
    fontSize: 10px;
    marginTop: 5px;
    font-family: "Head1";
`;

const Text3 = styled.Text`
    color: black;
    fontSize: 12px;
    marginBottom: 10px;
    font-family: "Head2";
    margin-top: 6px;
`;


export default function Pick({navigation}) {
    return(
    <Container>
            <ScrollView>
                <Box1>
                    <CategoryButton onPress={()=>navigation.navigate('Post', {
                        category: "업데이트 예정"
                    })}>
                        <Box2>
                            <Image1 source={require("../assets/image/djqepdlxm.png")}/>
                            <Text1>제휴 가맹점</Text1>
                            <Text2>미등록</Text2>
                            <Text3>향후 추가 예정입니다!</Text3>
                        </Box2>
                    </CategoryButton>
                    <CategoryButton onPress={()=>navigation.navigate('Post', {
                        category: "업데이트 예정"
                    })}>
                        <Box3>
                            <Image1 source={require("../assets/image/djqepdlxm.png")}/>
                            <Text1>제휴 가맹점</Text1>
                            <Text2>미등록</Text2>
                            <Text3>향후 추가 예정입니다!</Text3>
                        </Box3>
                    </CategoryButton>
                </Box1>

                <Box1>
                    <CategoryButton onPress={()=>navigation.navigate('Post', {
                        category: "업데이트 예정"
                    })}>
                        <Box2>
                            <Image1 source={require("../assets/image/djqepdlxm.png")}/>
                            <Text1>제휴 가맹점</Text1>
                            <Text2>미등록</Text2>
                            <Text3>향후 추가 예정입니다!</Text3>
                        </Box2>
                    </CategoryButton>
                    <CategoryButton onPress={()=>navigation.navigate('Post', {
                        category: "업데이트 예정"
                    })}>
                        <Box3>
                            <Image1 source={require("../assets/image/djqepdlxm.png")}/>
                            <Text1>제휴 가맹점</Text1>
                            <Text2>미등록</Text2>
                            <Text3>향후 추가 예정입니다!</Text3>
                        </Box3>
                    </CategoryButton>
                </Box1>

                <Box1>
                    <CategoryButton onPress={()=>navigation.navigate('Post', {
                        category: "업데이트 예정"
                    })}>
                        <Box2>
                            <Image1 source={require("../assets/image/djqepdlxm.png")}/>
                            <Text1>제휴 가맹점</Text1>
                            <Text2>미등록</Text2>
                            <Text3>향후 추가 예정입니다!</Text3>
                        </Box2>
                    </CategoryButton>
                    <CategoryButton onPress={()=>navigation.navigate('Post', {
                        category: "업데이트 예정"
                    })}>
                        <Box3>
                            <Image1 source={require("../assets/image/djqepdlxm.png")}/>
                            <Text1>제휴 가맹점</Text1>
                            <Text2>미등록</Text2>
                            <Text3>향후 추가 예정입니다!</Text3>
                        </Box3>
                    </CategoryButton>
                </Box1>

                
                <View style={{height: 30, width: "100%"}}></View>
            </ScrollView>
        </Container>
    )
}