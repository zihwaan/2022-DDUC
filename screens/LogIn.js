import React, {useEffect, useState, useCallback} from "react";
import { KeyboardAvoidingView, View } from "react-native";
import styled from "styled-components/native";
import { auth } from "../firebase";

    const Container = styled.View`
        width: 75%;
        backgroundColor: "#FAFAFA";
    `;
    const JangGuni = styled.Image`
        width: 80px;
        height: 80px;
        borderRadius: 100px;
        alignSelf: center;
        marginBottom: 40px;
    `;
    const LogInText = styled.Text`
        fontFamily: "TenN1";
        font-size: 17px;
    `;
    const LogIn_Input = styled.TextInput`
        backgroundColor: white;
        paddingTop: 10px;
        paddingBottom: 10px;
        paddingLeft: 15px;
        paddingRight: 15px;
        borderRadius: 10px;
        marginTop: 5px;
    `;
    const BtnContainer = styled.View`
        width: 100%;
        justifyContent: center;
        alignItems: center;
        marginTop: 40px;
        alignSelf: center;
    `;
    const LogInBtn = styled.TouchableOpacity`
        backgroundColor: #C9C8C8;
        paddingLeft: 15px;
        paddingRight: 15px;
        paddingTop: 15px;
        paddingBottom: 15px;
        borderRadius: 10px;
        alignItems: center;
        width: 100%;
        marginBottom: 10px;
    `;
    const RegisterBtn = styled.TouchableOpacity`
        backgroundColor: #266715;
        paddingLeft: 15px;
        paddingRight: 15px;
        paddingTop: 15px;
        paddingBottom: 15px;
        borderRadius: 10px;
        alignItems: center;
        width: 100%;
    `;
    const LogInTxt = styled.Text`
        color: white;
        fontFamily: "Head1";
    `;
    const RegisterTxt = styled.Text`
        fontFamily: "Head1";
        color: white;
    `;

export default function LogIn({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user) {
                console.log(auth.CurrentUser);
                //navigation.navigate('Home');
            }
        })
        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword( email, password)
        .then(userCredential => {
            const user = userCredential.user;
            alert("회원가입이 완료되었습니다!");
            handleLogIn();
        })
        .catch(error => alert(error.message));
    }

    const handleLogIn = () => {
        auth
        .signInWithEmailAndPassword( email, password)
        .then(userCredential => {
            const user = userCredential.user;
            alert("로그인 되었습니다!", user.email);
        })
        .catch(error => alert(error.message));
    }

    return(
        <KeyboardAvoidingView style=
                                { {flex: 1, justifyContent: "center", alignItems: "center"} } 
                                behavior="padding">
            <Container>
                <JangGuni source={require("../assets/image/LogIn_JangGun.png")}/>
                <LogInText>이메일</LogInText>
                <LogIn_Input placeholder="janggooniee@travel.com" value={email} onChangeText={text => setEmail(text)}/>

                <LogInText style={{marginTop: 15}}>비밀번호</LogInText>
                <LogIn_Input placeholder="Password" secureTextEntry value={password} onChangeText={text => setPassword(text)}/>

                <BtnContainer>
                    <LogInBtn onPress={handleLogIn}>
                        <LogInTxt>로그인</LogInTxt>
                    </LogInBtn>
                    <RegisterBtn onPress={handleSignUp}>
                        <RegisterTxt>회원가입</RegisterTxt>
                    </RegisterBtn>
                </BtnContainer>
                
            </Container>
        </KeyboardAvoidingView>
    );
}