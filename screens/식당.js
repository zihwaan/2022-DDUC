import React, {useState, useCallback, useEffect} from "react";
import { WithLocalSvg } from "react-native-svg";
import styled from "styled-components/native"
import { ScrollView } from "react-native-gesture-handler";
import { FlatList, View } from "react-native";
import {장소, 어디} from "./리스트"
import {db} from "../firebase"
import 식당모달 from "./식당모달.js";

const Container = styled.View`
    flex: 1;
    background-color: "#FAFAFA";
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    align-items: center;
`;

const Box = styled.View`
    width: 330px;
    height: 173px;
    background-color: white;
    margin-top: 15px;
`;
const ImageBox = styled.Image`
    height: 143px;
    width: 165px;
`;
const BoxTouch = styled.TouchableOpacity`
`;
const Title = styled.Text`
    font-family: "Head2";
    font-size: 20px;
    position: absolute;
    text-align: center;
    width: 250px;
    align-self: center;
    margin-top: 20px;
`;
const Content = styled.Text`
    font-family: "Head1";
    font-size: 13px;
    position: absolute;
    text-align: center;
    align-self: center;
    width: 88%;
    margin-top: 66px;
`;
const 주소Text = styled.Text`
    color: grey;
    font-family: "Head1";
    font-size: 11px;
    position: absolute;
    text-align: center;
    align-self: center;
    width: 65%;
    margin-top: 130px;
`;
const 주소image = styled.Image`
    width: 20px;
    height: 20px;
    margin-top: 125px;
    margin-left: 35px;
`;

export default function 식당({navigation}){

const [, updateState] = useState(); // 상태 변수는 선언하지 않는다
const [이름, set이름] = useState([]);
const [설명, set설명]  = useState([]);
const [주소, set주소]  = useState([]);
const [번호, set번호]  = useState([]);
const [메뉴, set메뉴]  = useState([]);
const [시간, set시간]  = useState([]);
const [기타, set기타]  = useState([]);
const forceUpdate =  useCallback(() => updateState({}), []);
const getData = () => {
    db.collection(어디()+"/식당/식당").get().then((querySnapshot) => { //서울
        querySnapshot.forEach((doc) => {
            console.log("doc.id : " + doc.id); set이름(이름=>[...이름, doc.id])
            console.log("doc.data().설명 : " + doc.data().설명); set설명(설명=>[...설명, doc.data().설명])
            console.log("doc.data().주소 : " + doc.data().주소); set주소(주소=>[...주소, doc.data().주소])
            console.log("doc.data().번호 : " + doc.data().번호); set번호(번호=>[...번호, doc.data().번호])
            console.log("doc.data().메뉴 : " + doc.data().메뉴); set메뉴(메뉴=>[...메뉴, doc.data().메뉴])
            console.log("doc.data().시간 : " + doc.data().시간); set시간(시간=>[...시간, doc.data().시간])
            console.log("doc.data().기타 : " + doc.data().기타); set기타(기타=>[...기타, doc.data().기타])
            forceUpdate();
        });
    })
};
useEffect(() => {
    getData();
}, []);

const CloseModal = () => {
    setIsVisible(false)
}
const [isVisible, setIsVisible] = useState(false);
const [순서, set순서] = useState(0);

return (
    <Container>
        <ScrollView>
            {이름.map((x,index)=>{
                return(
                    <BoxTouch onPress={()=>{setIsVisible(!isVisible); set순서(index)}}>
                        <Box>
                            <Title key={x}>{x}</Title>
                            <Content key={설명[index]}>{설명[index]}</Content>
                            <주소image source={require("../assets/image/wnthdkdlzhs.png")}/>
                            <주소Text key={주소[index]}>{주소[index]}</주소Text>
                        </Box> 
                    </BoxTouch>)
            })}
        </ScrollView>
        <식당모달 isVisible={isVisible} CloseModal={CloseModal}
                 이름={이름} 설명={설명} 주소={주소} 
                 번호={번호} 메뉴={메뉴} 시간={시간} 
                 기타={기타} 순서={순서}></식당모달>
    </Container>
);
}