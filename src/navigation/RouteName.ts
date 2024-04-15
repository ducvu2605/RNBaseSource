import {HomeStackParamList} from './stacks/HomeStack';
import {RootStackParamList} from './stacks/RootStack';

type RouteName<T> = {
  [key in keyof T]: keyof T | any;
};

export const RootRouteName: RouteName<RootStackParamList> = {
  HomeStack: 'HomeStack',
};

export const HomeRouteName: RouteName<HomeStackParamList> = {
  HomeScreen: 'HomeScreen',
};
