import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';

import {ADDRESSES, BARBERSHOP_IMAGES} from '../../mocks/data';
import {COLORS} from '../../constants/colors';
import {RootStackScreenProps} from '../../navigation/types';

import {Screen, TabsHeader} from '../../components';
import {RadioChecked, RadioUncheckedIcon} from '../../components/icons';

export const BookAddressScreen = ({
  navigation,
}: RootStackScreenProps<'BookAddress'>) => {
  const [selectedAddress, setSelectedAddress] = useState<number | null>(null);
  return (
    <Screen containerStyle={styles.container}>
      <TabsHeader label="Book Barbershop" withBack />
      <Image
        source={{uri: BARBERSHOP_IMAGES[0].image}}
        style={styles.barbershopImage}
      />
      <View style={styles.addressListContainer}>
        {ADDRESSES.map(item => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedAddress(item.id)}
            style={styles.addressItem}>
            {selectedAddress === item.id ? (
              <RadioChecked />
            ) : (
              <RadioUncheckedIcon />
            )}
            <Text
              style={[
                styles.addressText,
                selectedAddress === item.id && styles.activeText,
              ]}>
              {item.address}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.submitButton, !selectedAddress && styles.disabledButton]}
        disabled={!selectedAddress}
        onPress={() =>
          selectedAddress &&
          navigation.navigate('Haircuts', {addressId: selectedAddress})
        }>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  barbershopImage: {
    width: '100%',
    height: 156,
    borderRadius: 20,
    marginTop: 16,
  },
  addressListContainer: {
    gap: 16,
    marginTop: 16,
    flex: 1,
  },
  addressItem: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  addressText: {
    fontSize: 15,
    color: COLORS.foreground,
    fontWeight: '600',
  },
  activeText: {
    color: COLORS.white,
  },
  disabledButton: {
    opacity: 0.5,
  },
  submitButton: {
    alignSelf: 'center',
    marginVertical: 18,
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
