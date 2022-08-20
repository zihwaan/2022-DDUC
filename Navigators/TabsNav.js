import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { WithLocalSvg } from "react-native-svg";
import SharedStackNav from "./SharedStackNav";
import HomeIcon from "../assets/icon/home_black_24dp.svg";
import HomeIcon_mint from "../assets/icon/home_mint_24dp.svg";
import PickIcon from "../assets/icon/shopping_cart_black.svg";
import PickIcon_mint from "../assets/icon/shopping_cart_mint.svg";
import CourseIcon from "../assets/icon/map_black.svg";
import CourseIcon_mint from "../assets/icon/map_mint.svg"
import MyInfoIcon from "../assets/icon/person_black_24dp.svg";
import MyInfoIcon_mint from "../assets/icon/person_mint_24dp.svg";
import { Platform } from 'react-native';

const Tabs = createBottomTabNavigator()

export default function TabsNav() {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarStyle: {
                    height: Platform.OS === 'ios' ? "10%" : 55,
                    borderTopWidth: 0,
                    backgroundColor: "white",
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    marginTop: -5,
                    marginBottom: 5
                },
                tabBarActiveTintColor: "black",
                headerShown: false,
            }}
        >
            <Tabs.Screen name="홈"
            options={{
                tabBarIcon: ({focused}) => (
                    focused ? (<WithLocalSvg 
                        width={25} 
                        height={25} 
                        asset={HomeIcon_mint}/>):(
                        <WithLocalSvg
                        width={25} 
                        height={25}  
                        asset={HomeIcon}/>)
                )
            }}>
            {() => <SharedStackNav screenName="Home" />}
            </Tabs.Screen>
            <Tabs.Screen name="제휴 혜택" 
            options={{
                tabBarIcon: ({focused}) => (
                    focused? (<WithLocalSvg 
                        width={25}
                        height={25}
                        asset={PickIcon_mint}/>):(
                        <WithLocalSvg 
                        width={25} 
                        height={25} 
                        asset={PickIcon}/>)
                ),
            }}>
            {() => <SharedStackNav screenName="Pick" />} 
            </Tabs.Screen>
            <Tabs.Screen name="맞춤 코스 추천"
            options={{
                tabBarIcon: ({focused}) => (
                    focused? (<WithLocalSvg 
                        width={25}
                        height={25}
                        asset={CourseIcon_mint}/>):(
                        <WithLocalSvg 
                        width={25} 
                        height={25} 
                        asset={CourseIcon}/>)
                )
            }}>
            {() => <SharedStackNav screenName="Course" />}
            </Tabs.Screen>
            <Tabs.Screen name="프로필"
            options={{
                tabBarIcon: ({focused}) => (
                    focused? (<WithLocalSvg 
                        width={25}
                        height={25}
                        asset={MyInfoIcon_mint}/>):(
                        <WithLocalSvg 
                        width={25} 
                        height={25} 
                        asset={MyInfoIcon}/>)
                )
            }}>
            {() => <SharedStackNav screenName="MyInfo" />}
            </Tabs.Screen>
        </Tabs.Navigator>
    );
}