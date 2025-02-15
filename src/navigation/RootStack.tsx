import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './types';
import {MainNavigator} from './MainNavigator';
import {useGetPolicyQuery} from '../store/rtk/barbApi';
import {AltScreen, SplashScreen} from '../screens';
import {
  isOnboardingFinished,
  saveData,
  selectAppPrivacyData,
  selectIsPolicyLoaded,
} from '../store/slices';
import {useEffect} from 'react';
import {OnboardingNavigator} from './OnboardingNavigator';

export const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const dispatch = useDispatch();
  const appPrivacyData = useSelector(selectAppPrivacyData);
  const isPolicyLoaded = useSelector(selectIsPolicyLoaded);

  const {data, isLoading} = useGetPolicyQuery(undefined, {
    skip: isPolicyLoaded || !!appPrivacyData.policy,
  });

  const isFinished = useSelector(isOnboardingFinished);

  useEffect(() => {
    if (data && data.policy && !appPrivacyData.policy) {
      dispatch(saveData(data.policy));
    }
  }, [data, dispatch, appPrivacyData.policy]);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {appPrivacyData?.policy?.includes('privacypolicies') ? (
        isFinished ? (
          <MainNavigator />
        ) : (
          <OnboardingNavigator />
        )
      ) : (
        <AltScreen />
      )}
    </NavigationContainer>
  );
};
