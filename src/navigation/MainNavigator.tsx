import {useSelector} from 'react-redux';
import {
  BarbershopScreen,
  BookAddressScreen,
  HaircutsScreen,
  SelectTimeScreen,
  SuccessBookingScreen,
} from '../screens/main';
import {RootStack} from './RootStack';
import {TabNavigator} from './TabNavigator';
import {isOnboardingFinished} from '../store/slices';

export const MainNavigator = () => {
  const isFinished = useSelector(isOnboardingFinished);
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isFinished ? 'Tabs' : 'Onboarding'}>
      <RootStack.Screen name="Tabs" component={TabNavigator} />
      <RootStack.Screen name="Barbershop" component={BarbershopScreen} />
      <RootStack.Screen name="BookAddress" component={BookAddressScreen} />
      <RootStack.Screen name="Haircuts" component={HaircutsScreen} />
      <RootStack.Screen name="SelectTime" component={SelectTimeScreen} />
      <RootStack.Screen
        name="SuccessBooking"
        component={SuccessBookingScreen}
      />
    </RootStack.Navigator>
  );
};
