import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { WithLocalSvg } from "react-native-svg";
import Home from "../screens/Home";
import Pick from "../screens/Pick";
import Course from "../screens/Course";
import MyInfo from "../screens/MyInfo";

const Stack = createStackNavigator();

export default function SharedStackNav({ screenName }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "white",
          height: 85,
        },
        headerTitleAlign: "center",
      }}
    >
      {screenName === "Home" ? (
        <Stack.Screen
          name={"Home"}
          component={Home}
          options={{
            headerTitle: () => (
              <Text              
                style={{ fontFamily: "Fighter", fontSize: 24, color: "#266715",}}
              >장군이</Text>
            ),
          }}
        />
      ) : null}
      {screenName === "Pick" ? (
        <Stack.Screen
          name={"Pick"}
          component={Pick}
          options={{
            headerTitle: () => (
              <Text
                style={{
                  fontFamily: "Head3",
                  fontSize: 18,
                }}
              >
                제휴 혜택
              </Text>
            ),
          }}
        />
      ) : null}
      {screenName === "Course" ? (
        <Stack.Screen
          name={"Course"}
          component={Course}
          options={{
            headerTitle: () => (
              <Text
                style={{
                  fontFamily: "Head3",
                  fontSize: 18,
                }}
              >
                맞춤 코스 추천
              </Text>
            ),
          }}
        />
      ) : null}
      {screenName === "MyInfo" ? (
        <Stack.Screen
          name={"MyInfo"}
          component={MyInfo}
          options={{
            headerTitle: () => (
              <Text
                style={{
                  fontFamily: "Head3",
                  fontSize: 18,
                }}
              >
              프로필
              </Text>
            ),
          }}
        />
      ) : null}
    </Stack.Navigator>
  );
}
