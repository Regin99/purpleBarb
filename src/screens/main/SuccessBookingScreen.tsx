import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import successBooking from '../../assets/successBooking/successBooking.png';
import {COLORS} from '../../constants/colors';
import {RootStackScreenProps} from '../../navigation/types';

export const SuccessBookingScreen = ({
  navigation,
}: RootStackScreenProps<'SuccessBooking'>) => (
  <ImageBackground source={successBooking} style={styles.background}>
    <View style={styles.contentContainer}>
      <Text style={styles.titleText}>Successful!</Text>
      <Text style={styles.descriptionText}>
        Your entry has been confirmed, we look forward to seeing you
      </Text>
    </View>
    <TouchableOpacity
      style={styles.submitButton}
      onPress={() => navigation.popToTop()}>
      <Text style={styles.submitText}>Close</Text>
    </TouchableOpacity>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 28,
  },
  titleText: {
    fontSize: 40,
    fontWeight: '800',
    color: COLORS.white,
  },
  descriptionText: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  submitButton: {
    alignSelf: 'center',
    marginBottom: 18,
    marginTop: 132,
    minWidth: 210,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    paddingVertical: 6,
  },
  submitText: {
    fontSize: 21,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
