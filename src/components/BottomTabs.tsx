import {useCallback} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {COLORS} from '../constants/colors';
import {
  AddressesIcon,
  FeedbackIcon,
  HomeIcon,
  NotesIcon,
  ProfileIcon,
} from './icons/tabbar';

const TAB_ICONS: Record<string, (props: SvgProps) => JSX.Element> = {
  Home: HomeIcon,
  Addresses: AddressesIcon,
  Notes: NotesIcon,
  Profile: ProfileIcon,
  Feedback: FeedbackIcon,
};

export const BottomTabs = ({state, navigation}: BottomTabBarProps) => {
  const {bottom} = useSafeAreaInsets();

  const renderTab = useCallback(
    (route: (typeof state.routes)[number], index: number) => {
      const isFocused = state.index === index;

      const Icon = TAB_ICONS[route.name];

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate({name: route.name, params: {}, merge: true});
        }
      };

      return (
        <View key={route.key} style={styles.tabContainer}>
          <TouchableOpacity
            onPress={onPress}
            style={[styles.tabButton, !isFocused && styles.inactiveTab]}>
            <Icon color={isFocused ? '#423665' : undefined} />
          </TouchableOpacity>
        </View>
      );
    },
    [state, navigation],
  );

  return (
    <View style={[styles.container, {paddingBottom: bottom}]}>
      {state.routes.map(renderTab)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 16,
  },
  tabButton: {
    alignItems: 'center',
    gap: 6,
  },
  inactiveTab: {
    opacity: 0.5,
  },
  tabLabel: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '500',
  },
});
