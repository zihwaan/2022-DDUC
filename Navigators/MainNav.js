import React, {useState} from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity, View, Image } from "react-native"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading";
import { WithLocalSvg } from "react-native-svg"
import { useNavigation } from "@react-navigation/core";
import TabsNav from "./TabsNav";
import Welcome from "../screens/Welcome"
import LogIn from "../screens/LogIn"
import K_26 from "../screens/K-26"
import 가평양떼목장카페 from "../screens/가평양떼목장카페"
import 오션숯불갈비 from "../screens/오션숯불갈비"
import Post from "../screens/Post"
import 서울경기인천 from "../screens/MapSccreens/서울경기인천";
import 강원 from "../screens/MapSccreens/강원";
import 충북대전충남세종 from "../screens/MapSccreens/충북대전충남세종";
import 전북전남광주 from "../screens/MapSccreens/전북전남광주";
import 경북대구경남부산 from "../screens/MapSccreens/경북대구경남부산";
import 경기북부 from "../screens/MapSccreens/경기북부";
import 경기남부 from "../screens/MapSccreens/경기남부";
import 리스트 from "../screens/리스트";
import 식당 from "../screens/식당"
import Recommend from "../screens/Recommend";

const Stack = createStackNavigator();

export default function MainNav() {
    const navigation = useNavigation();
    const [fontLoading, setFontLoading] = useState(true);
    const onFinish = () => setFontLoading(false);
    const getFonts = () => {
        Font.loadAsync({
            'Fighter': require("../assets/fonts/Fighter.ttf"),
            'Head1': require("../assets/fonts/Head1.ttf"),
            'Head2': require("../assets/fonts/Head2.ttf"),
            'Head3': require("../assets/fonts/Head3.ttf"),
            'Head4': require("../assets/fonts/Head4.ttf"),
            'TenN1': require("../assets/fonts/TenN1.ttf"),
            'TenN2': require("../assets/fonts/TenN2.ttf"),
            'TenN3': require("../assets/fonts/TenN3.ttf"),
            'TenN4': require("../assets/fonts/TenN4.ttf"),
        });
    }
        
    if(fontLoading) {
        return(
            <AppLoading
                startAsync={getFonts}
                onError={console.warn}
                onFinish={onFinish}
            />
        );
    }
    else
    {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false,}}/>
                <Stack.Screen name="TabsNav" options={{ headerShown: false }} component={TabsNav}/>
                <Stack.Screen
                    name="LogIn"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head2',
                                fontSize: 18
                            }}>로그인</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={LogIn}
                />
                <Stack.Screen
                    name="K-26"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head2',
                                fontSize: 18
                            }}>K-26</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={K_26}
                />
                <Stack.Screen
                    name="오션숯불갈비"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head2',
                                fontSize: 18
                            }}>오션숯불갈비</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={오션숯불갈비}
                />
                <Stack.Screen
                    name="가평양떼목장카페"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head2',
                                fontSize: 18
                            }}>가평양떼목장카페</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={가평양떼목장카페}
                />
                <Stack.Screen
                    name="Post"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head2',
                                fontSize: 18
                            }}>Post</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={Post}
                />
                <Stack.Screen
                    name="서울경기인천"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>서울/경기/인천</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={서울경기인천}
                />
                <Stack.Screen
                    name="강원"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>강원</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={강원}
                />
                <Stack.Screen
                    name="충북대전충남세종"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>충북/대전/충남/세종</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={충북대전충남세종}
                />
                <Stack.Screen
                    name="전북전남광주"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>전북/전남/광주</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={전북전남광주}
                />
                <Stack.Screen
                    name="경북대구경남부산"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>경북/대구/경남/부산</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={경북대구경남부산}
                />
                <Stack.Screen
                    name="경기북부"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>경기북부</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={경기북부}
                />
                <Stack.Screen
                    name="경기남부"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>경기남부</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={경기남부}
                />
                <Stack.Screen
                    name="Recommend"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>맞춤 코스 추천</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={Recommend}
                />
                <Stack.Screen
                    name="리스트"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}>리스트</Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={리스트}
                />
                <Stack.Screen
                    name="식당"
                    options={{
                        headerTitle: () => (
                            <Text style={{
                                fontFamily: 'Head3',
                                fontSize: 18
                            }}></Text>
                        ),
                        headerTitleAlign: 'center',
                    }}
                    component={식당}
                />
            </Stack.Navigator>
        );
    }                
}

