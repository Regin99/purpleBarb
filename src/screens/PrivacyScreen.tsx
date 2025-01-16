import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import WebView from 'react-native-webview';
import {SafeAreaView} from 'react-native-safe-area-context';

import {COLORS} from '../constants/colors';

import {RadioChecked, RadioUncheckedIcon} from '../components/icons';
import {useDispatch} from 'react-redux';
import {setIsOnboardingFinished} from '../store/slices';

export const PrivacyScreen = () => {
  const [accepted, setAccepted] = useState(false);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.headerText}>
        Accept app's privacy policy and terms of use rules
      </Text>

      <WebView
        originWhitelist={['*']}
        style={styles.container}
        source={{
          uri: 'https://www.privacypolicies.com/live/29ac8b03-5e15-4740-a8f4-5a55fbf828b4',
        }}
      />
      <TouchableOpacity
        onPress={() => setAccepted(!accepted)}
        style={styles.acceptContainer}>
        {accepted ? (
          <RadioChecked color={COLORS.primary} />
        ) : (
          <RadioUncheckedIcon />
        )}
        <Text style={styles.acceptText}>
          I accept the terms of agreement of the privacy policy and use of the
          app
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(setIsOnboardingFinished(true));
        }}
        style={[styles.submitButton, !accepted && styles.disabled]}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#E0D5FE',
    paddingHorizontal: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.primary,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    borderRadius: 20,
    marginTop: 16,
  },
  acceptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 8,
    paddingHorizontal: 24,
  },
  acceptText: {
    flex: 1,
    fontSize: 12,
    color: COLORS.primary,
  },
  submitButton: {
    marginVertical: 18,
    marginHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#BD4AFF',
    borderRadius: 12,
    paddingVertical: 16,
  },
  disabled: {
    opacity: 0.6,
  },
  submitText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
});
