import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../../screens/home';
import {HomeRouteName} from '../RouteName';

export type HomeStackParamList = {
  HomeScreen: undefined;
};
export type HomeStackProps = NativeStackScreenProps<
  HomeStackParamList,
  keyof HomeStackParamList
>;

const _HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <_HomeStack.Navigator>
      <_HomeStack.Screen
        name={HomeRouteName.HomeScreen}
        component={HomeScreen}
      />
    </_HomeStack.Navigator>
  );
};

export default HomeStack;
