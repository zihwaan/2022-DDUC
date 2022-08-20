import React from "react";
import styled from "styled-components/native"

const Container = styled.View` 
    flex: 1;
    alignItems: center;
    justifyContent: center;
    backgroundColor: white;
`;

const Screen = styled.Image`
    flex: 1;
    max-width: 100%;
`;

export default function Welcome({navigation}) {
    setTimeout(()=>{ navigation.navigate("TabsNav") }, 2000);
    return (
        <Container>
            <Screen source={require("../assets/image/start.jpg")}/>
        </Container>
    );
}