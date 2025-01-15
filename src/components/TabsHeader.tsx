import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS} from '../constants/colors';

type TabsHeaderProps = {
  label?: string;
  left?: boolean;
  withBack?: boolean;
  rightComponent?: JSX.Element | boolean;
};

export const TabsHeader = ({
  label,
  left,
  withBack,
  rightComponent,
}: TabsHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        (withBack || rightComponent) && styles.spaceBetween,
      ]}>
      <Text style={[styles.label, left ? styles.left : styles.center]}>
        {label}
      </Text>
      {withBack && (
        <TouchableOpacity onPress={navigation.goBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}
      {rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 25,
    fontWeight: '600',
    color: COLORS.white,
  },
  backButton: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    paddingHorizontal: 14,
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.primary,
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
});
