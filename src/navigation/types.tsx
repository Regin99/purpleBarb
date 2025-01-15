import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Tabs: undefined;
  Barbershop: undefined;
  BookAddress: undefined;
  Haircuts: {addressId: number};
  SelectTime: {haircutId: number; addressId: number};
  SuccessBooking: undefined;
  Contact: undefined;
  Feedback: undefined;
  Privacy: undefined;
  Onboarding: undefined;
};

export type RootStackScreenProps<RouteName extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, RouteName>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
