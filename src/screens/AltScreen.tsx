import {StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {COLORS} from '../constants/colors';
import {selectAppPrivacyData} from '../store/slices';

import {Screen} from '../components';

export const AltScreen = () => {
  const appPrivacyData = useSelector(selectAppPrivacyData);

  return (
    <Screen containerStyle={styles.container}>
      <Text style={styles.text}>{appPrivacyData?.policy}</Text>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.white,
  },
});
