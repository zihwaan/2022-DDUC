import React, { useState, useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import 식당 from '../screens/식당';
import 카페 from '../screens/카페';
import 놀거리 from '../screens/놀거리';
import 숙박 from '../screens/숙박';
import styled from "styled-components/native"

const Tab = createMaterialTopTabNavigator();

function Tabs({Where}) {
  <식당 어디 = {Where}/>
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'green'},
        tabBarPressColor: '#90ee90',
        tabBarLabelStyle: { fontSize: 15, fontFamily: "Head2" },
      }}>
      <Tab.Screen name="식당" component={식당} />
      <Tab.Screen name="카페" component={카페} />
      <Tab.Screen name="놀거리" component={놀거리} />
      <Tab.Screen name="숙박" component={숙박} />
    </Tab.Navigator>
  );
}

var Where = "";


export default function 리스트({route}) {

  useEffect(() => {
    //console.log("해당 props가 변경될때 마다 실행");
    Where = route.params.Where;
  }, [route.params.Where]);

  Where = route.params.Where;
  {console.log("리스트 : "+route.params.Where)}
  return (
    <NavigationContainer independent={true}>
        <Tabs Where={route.params.Where}/>
    </NavigationContainer>
  );
}

export function 어디(){
  return Where;
}