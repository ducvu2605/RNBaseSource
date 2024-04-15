import {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {RootRouteName} from '../RouteName';
import HomeStack from './HomeStack';

export type RootStackParamList = {
  HomeStack: undefined;
};
export type RootStackProps = NativeStackScreenProps<
  RootStackParamList,
  keyof RootStackParamList
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => (
  <Stack.Navigator
    initialRouteName={RootRouteName.HomeStack}
    screenOptions={screenOptions}>
    <Stack.Screen name={RootRouteName.HomeStack} component={HomeStack} />
  </Stack.Navigator>
);

export default RootStack;

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
