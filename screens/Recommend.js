import React, {useState, useCallback, useEffect} from "react";
import { WithLocalSvg } from "react-native-svg";
import styled from "styled-components/native"
import { ScrollView } from "react-native-gesture-handler";
import 식당모달 from "./식당모달.js";
import 카페모달 from "./카페모달.js";
import 놀거리모달 from "./놀거리모달.js";
import {db} from "../firebase"

const Container = styled.View`
    flex: 1;
    background-color: #FAFAFA;
`;

const PostImage = styled.Image`
    width: 328px;
    height: 520px;
    margin-top: 80px;
    align-self: center;
    position: absolute;
`;

const BoxTouch = styled.TouchableOpacity`
  margin-top: 11px;
`;
const Box1 = styled.View`
    width: 320px;
    height: 130px;
    background-color: white;
    margin-top: 100px;
    align-self: center;
`;
const Box2 = styled.View`
    width: 320px;
    height: 130px;
    background-color: white;
    margin-top: 35px;
    align-self: center;
`;
const Box3 = styled.View`
    width: 320px;
    height: 130px;
    background-color: white;
    margin-top: 35px;
    align-self: center;
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
    width: 80%;
    margin-top: 45px;
`;
const 주소Text = styled.Text`
    color: grey;
    font-family: "Head1";
    font-size: 11px;
    position: absolute;
    text-align: center;
    align-self: center;
    width: 52%;
    margin-top: 100px;
`;
const 주소image = styled.Image`
    width: 20px;
    height: 20px;
    margin-top: 95px;
    margin-left: 55px;
`;

const 인공지능API = async (firstWord, secondWord) => {
  
  const openApiURL = 'http://aiopen.etri.re.kr:8000/WiseWWN/WordRel';
  const access_key = '20cd2e8b-c7b8-45fa-8bb4-2aed65800130';

  var RequestJson = {
      'access_key': access_key,
      'argument': {
          'first_word': firstWord,
          'second_word': secondWord,
      }
  };

  var options = {
      method: 'POST',
      url: openApiURL,
      body: JSON.stringify(RequestJson),
      headers: {'Content-Type':'application/json; charset=UTF-8'}
  };

  try {
    const response = await fetch(openApiURL, options);
    const json = await response.json();
    const 결과 = json.return_object;
    const 정보 = 결과["WWN WordRelInfo"].WordRelInfo.Similarity[0].SimScore;
    console.log("결과 : " + 정보);
    return 정보;
  } catch (error) {
    console.error(error);
  }
}


export default function Recommend({navigation, route}){
    const 장소변환 = (data) => {
        if(data == '강원도 고성군'){
            return "고성";
        }else if(data == '강원도 양구군'){
            return "양구";
        }else if(data == '강원도 원주시'){
            return "원주";
        }else if(data == '강원도 인제군'){
            return "인제";
        }else if(data == '강원도 철원군'){
            return "철원";
        }else if(data == '강원도 홍천군'){
            return "홍천";
        }else if(data == '강원도 화천군'){
          return "화천";
        }else if(data == '경기도 가평군'){
          return "가평";
        }else if(data == '경기도 고양시'){
          return "고양";
        }else if(data == '경기도 광명시'){
          return "광명";
        }else if(data == '경기도 남양주시'){
          return "남양주";
        }else if(data == '경기도 안양시'){
          return "안양";
        }else if(data == '경기도 양주시'){
          return "양주";
        }else if(data == '경기도 연천군'){
          return "연천";
        }else if(data == '경기도 용인시'){
          return "용인";
        }else if(data == '경기도 이천시'){
          return "이천";
        }else if(data == '경기도 파주시'){
          return "파주";
        }else if(data == '경기도 포천시'){
          return "포천";
        }else if(data == '경기도 화성시'){
          return "화성";
        }else if(data == '서울특별시 관악구'){
          return "서울특별시";
        }else if(data == '인천광역시 부평구'){
          return "인천광역시";
        }else if(data == '대전광역시 유성구'){
          return "대전광역시";
        }else if(data == '세종특별자치시'){
          return "세종특별자치시";
        }else if(data == '충청남도 논산시'){
          return "논산";
        }else if(data == '충청북도 증평군'){
          return "증평";
        }else if(data == '경상남도 함안군'){
          return "함안";
        }else if(data == '대구광역시 북구'){
          return "대구광역시";
        }else if(data == '부산광역시 해운대구'){
          return "부산광역시";
        }else if(data == '광주광역시 북구'){
          return "광주광역시";
        }
      }

    console.log(장소변환(route.params.Where));
    console.log(route.params.WithWho);
    console.log(route.params.Food);
    console.log(route.params.Play);      

    //const [, updateState] = useState(); // 상태 변수는 선언하지 않는다
    const [카페이름, set카페이름] = useState([]);
    const [카페설명, set카페설명]  = useState([]);
    const [카페주소, set카페주소]  = useState([]);
    const [카페번호, set카페번호]  = useState([]);
    const [카페메뉴, set카페메뉴]  = useState([]);
    const [카페시간, set카페시간]  = useState([]);
    const [카페기타, set카페기타]  = useState([]);
    //const forceUpdate =  useCallback(() => updateState({}), []);
    const get카페Data = () => {
        db.collection(장소변환(route.params.Where)+"/카페/카페").get().then((querySnapshot) => { //서울
            querySnapshot.forEach((doc) => {
                console.log("doc.id : " + doc.id); set카페이름(카페이름=>[...카페이름, doc.id])
                console.log("doc.data().설명 : " + doc.data().설명); set카페설명(카페설명=>[...카페설명, doc.data().설명])
                console.log("doc.data().주소 : " + doc.data().주소); set카페주소(카페주소=>[...카페주소, doc.data().주소])
                console.log("doc.data().번호 : " + doc.data().번호); set카페번호(카페번호=>[...카페번호, doc.data().번호])
                console.log("doc.data().메뉴 : " + doc.data().메뉴); set카페메뉴(카페메뉴=>[...카페메뉴, doc.data().메뉴])
                console.log("doc.data().시간 : " + doc.data().시간); set카페시간(카페시간=>[...카페시간, doc.data().시간])
                console.log("doc.data().기타 : " + doc.data().기타); set카페기타(카페기타=>[...카페기타, doc.data().기타])
            });
        })
        set카페순서(카페인공지능(route.params.WithWho, route.params.Food, route.params.Play));
    };
    
    useEffect(() => {
        get식당Data(); get카페Data(); get놀거리Data();
    }, []);


    const [식당이름, set식당이름] = useState([]);
    const [식당설명, set식당설명]  = useState([]);
    const [식당주소, set식당주소]  = useState([]);
    const [식당번호, set식당번호]  = useState([]);
    const [식당메뉴, set식당메뉴]  = useState([]);
    const [식당시간, set식당시간]  = useState([]);
    const [식당기타, set식당기타]  = useState([]);
    const get식당Data = () => {
        db.collection(장소변환(route.params.Where)+"/식당/식당").get().then((querySnapshot) => { //서울
            querySnapshot.forEach((doc) => {
                console.log("doc.id : " + doc.id); set식당이름(식당이름=>[...식당이름, doc.id])
                console.log("doc.data().설명 : " + doc.data().설명); set식당설명(식당설명=>[...식당설명, doc.data().설명])
                console.log("doc.data().주소 : " + doc.data().주소); set식당주소(식당주소=>[...식당주소, doc.data().주소])
                console.log("doc.data().번호 : " + doc.data().번호); set식당번호(식당번호=>[...식당번호, doc.data().번호])
                console.log("doc.data().메뉴 : " + doc.data().메뉴); set식당메뉴(식당메뉴=>[...식당메뉴, doc.data().메뉴])
                console.log("doc.data().시간 : " + doc.data().시간); set식당시간(식당시간=>[...식당시간, doc.data().시간])
                console.log("doc.data().기타 : " + doc.data().기타); set식당기타(식당기타=>[...식당기타, doc.data().기타])
            });
        })
        set식당순서(식당인공지능(route.params.WithWho, route.params.Food, route.params.Play));
    };

    const [놀거리이름, set놀거리이름] = useState([]);
    const [놀거리설명, set놀거리설명]  = useState([]);
    const [놀거리주소, set놀거리주소]  = useState([]);
    const [놀거리번호, set놀거리번호]  = useState([]);
    const [놀거리메뉴, set놀거리메뉴]  = useState([]);
    const [놀거리시간, set놀거리시간]  = useState([]);
    const [놀거리기타, set놀거리기타]  = useState([]);
    const get놀거리Data = () => {
        db.collection(장소변환(route.params.Where)+"/놀거리/놀거리").get().then((querySnapshot) => { //서울
            querySnapshot.forEach((doc) => {
                console.log("doc.id : " + doc.id); set놀거리이름(놀거리이름=>[...놀거리이름, doc.id])
                console.log("doc.data().설명 : " + doc.data().설명); set놀거리설명(놀거리설명=>[...놀거리설명, doc.data().설명])
                console.log("doc.data().주소 : " + doc.data().주소); set놀거리주소(놀거리주소=>[...놀거리주소, doc.data().주소])
                console.log("doc.data().번호 : " + doc.data().번호); set놀거리번호(놀거리번호=>[...놀거리번호, doc.data().번호])
                console.log("doc.data().메뉴 : " + doc.data().메뉴); set놀거리메뉴(놀거리메뉴=>[...놀거리메뉴, doc.data().메뉴])
                console.log("doc.data().시간 : " + doc.data().시간); set놀거리시간(놀거리시간=>[...놀거리시간, doc.data().시간])
                console.log("doc.data().기타 : " + doc.data().기타); set놀거리기타(놀거리기타=>[...놀거리기타, doc.data().기타])
            });
        })
        set놀거리순서(놀거리인공지능(route.params.WithWho, route.params.Food, route.params.Play));
    };

    const Close식당 = () => {
        setIs식당(false)
    }
    const Close카페 = () => {
        setIs카페(false)
    }
    const Close놀거리 = () => {
        setIs놀거리(false)
    }
    const [is식당, setIs식당] = useState(false);
    const [is카페, setIs카페] = useState(false);
    const [is놀거리, setIs놀거리] = useState(false);

    const [식당순서, set식당순서] = useState(0);
    const [카페순서, set카페순서] = useState(0);
    const [놀거리순서, set놀거리순서] = useState(0);

    const 식당인공지능 = (누구랑, 무슨음식, 활동성) => {

      //식당 점수 배열 생성
      const 아이템길이 = 식당이름.length;
      var 식당점수 = new Array();
      for( var i = 0; i < 아이템길이; i++ ){
        식당점수.push(0);
      }
      for( var i = 0; i < 아이템길이; i++ ){
        식당점수[i] += 인공지능API(누구랑, 식당이름);
        식당점수[i] += 인공지능API(무슨음식, 식당이름);
        식당점수[i] += 인공지능API(활동성, 식당이름);
      }
      var 최고점수 = -2;
      var 최고인덱스 = 0;
      for( var i = 0; i < 아이템길이; i++ ){
        if(최고점수 < 식당점수[i]){
          최고점수 = 식당점수[i];
          최고인덱스 = i;
        }
      }
    
      return 최고인덱스;
    
    }
    
    const 카페인공지능 = (누구랑, 무슨음식, 활동성) => {
    
      //식당 점수 배열 생성
      const 아이템길이 = 카페이름.length;
      var 카페점수 = new Array();
      for( var i = 0; i < 아이템길이; i++ ){
        카페점수.push(0);
      }
      for( var i = 0; i < 아이템길이; i++ ){
        카페점수[i] += 인공지능API(누구랑, 카페이름);
        카페점수[i] += 인공지능API(무슨음식, 카페이름);
        카페점수[i] += 인공지능API(활동성, 카페이름);
      }
      var 최고점수 = -2;
      var 최고인덱스 = 0;
      for( var i = 0; i < 아이템길이; i++ ){
        if(최고점수 < 카페점수[i]){
          최고점수 = 카페점수[i];
          최고인덱스 = i;
        }
      }
    
      return 최고인덱스;
    
    }
    
    const 놀거리인공지능 = (누구랑, 무슨음식, 활동성) => {
    
      //식당 점수 배열 생성
      const 아이템길이 = 놀거리이름.length;
      var 놀거리점수 = new Array();
      for( var i = 0; i < 아이템길이; i++ ){
        놀거리점수.push(0);
      }
      for( var i = 0; i < 아이템길이; i++ ){
        놀거리점수[i] += 인공지능API(누구랑, 놀거리이름);
        놀거리점수[i] += 인공지능API(무슨음식, 놀거리이름);
        놀거리점수[i] += 인공지능API(활동성, 놀거리이름);
      }
      var 최고점수 = -2;
      var 최고인덱스 = 0;
      for( var i = 0; i < 아이템길이; i++ ){
        if(최고점수 < 놀거리점수[i]){
          최고점수 = 놀거리점수[i];
          최고인덱스 = i;
        }
      }
    
      return 최고인덱스;
    
    }

    //set식당순서(식당인공지능(route.params.WithWho, route.params.Food, route.params.Play));
    //set카페순서(카페인공지능(route.params.WithWho, route.params.Food, route.params.Play));
    //set놀거리순서(놀거리인공지능(route.params.WithWho, route.params.Food, route.params.Play));

    return(
        <Container>
            <PostImage source={require("../assets/image/CHU.png")}/>
            <BoxTouch onPress={()=>{setIs식당(!is식당); }}>
                <Box1>
                    <Title>{식당이름[식당순서]}</Title>
                    <Content>{식당설명[식당순서]}</Content>
                    <주소image source={require("../assets/image/wnthdkdlzhs.png")}/>
                    <주소Text>{식당주소[식당순서]}</주소Text>
                </Box1>
            </BoxTouch>
            <BoxTouch onPress={()=>{setIs카페(!is카페); }}>
                <Box2>
                    <Title>{카페이름[카페순서]}</Title>
                    <Content>{카페설명[카페순서]}</Content>
                    <주소image source={require("../assets/image/wnthdkdlzhs.png")}/>
                    <주소Text>{카페주소[카페순서]}</주소Text>
                </Box2>
            </BoxTouch> 
            <BoxTouch onPress={()=>{setIs놀거리(!is놀거리); }}>
                <Box3>
                    <Title>{놀거리이름[놀거리순서]}</Title>
                    <Content>{놀거리설명[놀거리순서]}</Content>
                    <주소image source={require("../assets/image/wnthdkdlzhs.png")}/>
                    <주소Text>{놀거리주소[놀거리순서]}</주소Text>
                </Box3>
            </BoxTouch>
            <식당모달 isVisible={is식당} CloseModal={Close식당}
                 이름={식당이름} 설명={식당설명} 주소={식당주소} 
                 번호={식당번호} 메뉴={식당메뉴} 시간={식당시간} 
                 기타={식당기타} 순서={식당순서}></식당모달>
            <카페모달 isVisible={is카페} CloseModal={Close카페}
                 이름={카페이름} 설명={카페설명} 주소={카페주소} 
                 번호={카페번호} 메뉴={카페메뉴} 시간={카페시간} 
                 기타={카페기타} 순서={카페순서}></카페모달>
            <놀거리모달 isVisible={is놀거리} CloseModal={Close놀거리}
                 이름={놀거리이름} 설명={놀거리설명} 주소={놀거리주소} 
                 번호={놀거리번호} 메뉴={놀거리메뉴} 시간={놀거리시간} 
                 기타={놀거리기타} 순서={놀거리순서}></놀거리모달>               
        </Container>
    );
}