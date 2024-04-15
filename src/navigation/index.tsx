import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import React from 'react';
import RootStack from './stacks/RootStack';

const navigationRef = createNavigationContainerRef();
const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
