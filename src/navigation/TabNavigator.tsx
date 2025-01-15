import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {BottomTabs} from '../components';
import {
  AddressesScreen,
  ContactScreen,
  FeedbackScreen,
  MenuScreen,
  NotesScreen,
  ProfileScreen,
} from '../screens/main';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

const tabBar = (props: BottomTabBarProps) => <BottomTabs {...props} />;

const ProfileStack = createStackNavigator();

export const ProfileNavigator = () => (
  <ProfileStack.Navigator screenOptions={{headerShown: false}}>
    <ProfileStack.Screen name="ProfileMain" component={ProfileScreen} />
    <ProfileStack.Screen name="Contact" component={ContactScreen} />
  </ProfileStack.Navigator>
);

export const TabNavigator = () => (
  <Tab.Navigator tabBar={tabBar} screenOptions={{headerShown: false}}>
    <Tab.Screen name="Home" component={MenuScreen} />
    <Tab.Screen name="Addresses" component={AddressesScreen} />
    <Tab.Screen name="Notes" component={NotesScreen} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
    <Tab.Screen name="Feedback" component={FeedbackScreen} />
  </Tab.Navigator>
);
