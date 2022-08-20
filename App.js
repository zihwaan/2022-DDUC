import React from 'react';
import AppLoading from 'expo-app-loading';
import {useState} from "react";
import {Asset} from 'expo-asset';
import MainNav from './Navigators/MainNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [loading, setLoading] = useState(true);
  const onFinish = () => setLoading(false);
  const preload = () =>{
    const imagesToLoad = [require("./assets/image/start.jpg")];
    const imagePromises = imagesToLoad.map(image => Asset.loadAsync(image));
    return Promise.all(...imagePromises);
  }
  if(loading) {
    return(
      <AppLoading
        startAsync={preload}
        onError={console.warn}
        onFinish={onFinish}
      />
    );
  }

  return (
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
  );
}


