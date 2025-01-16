import React from 'react';
import {RootStack} from './RootStack';
import {OnboardingScreen, PrivacyScreen} from '../screens';

export const OnboardingNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
      <RootStack.Screen name="Privacy" component={PrivacyScreen} />
    </RootStack.Navigator>
  );
};
