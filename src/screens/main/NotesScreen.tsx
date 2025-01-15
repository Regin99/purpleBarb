import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {COLORS} from '../../constants/colors';
import {Booking, removeBooking, selectBookings} from '../../store/slices';
import {ADDRESSES, HAIRCUTS} from '../../mocks/data';

import {Screen, TabsHeader} from '../../components';

export const NotesScreen = () => {
  const {bookings} = useSelector(selectBookings);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const renderItem = useCallback(
    ({item}: {item: Booking}) => {
      const haircut = HAIRCUTS.find(
        haircutItem => haircutItem.id === item.haircutId,
      );
      const address = ADDRESSES.find(
        addressItem => addressItem.id === item.addressId,
      );
      return (
        <View style={styles.cardContainer}>
          <View>
            <Image source={{uri: haircut?.image}} style={styles.haircutImage} />
            <Text style={styles.haircutName}>{haircut?.name}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.addressText}>{address?.address}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => dispatch(removeBooking(item.id))}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    },
    [dispatch],
  );

  return (
    <Screen containerStyle={styles.screenContainer}>
      <TabsHeader label="Your notes" />
      <FlatList
        style={styles.flatList}
        data={bookings}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContent}
        ListEmptyComponent={() => (
          <View style={styles.emptyComponent}>
            <Text style={styles.emptyText}>
              You do not have any active entries yet
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Barbershop')}
              style={styles.createRecordButton}>
              <Text style={styles.createRecordText}>Create a record</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 16,
  },
  flatList: {
    marginTop: 14,
  },
  flatListContent: {
    gap: 14,
    alignItems: 'center',
  },
  emptyComponent: {
    gap: 14,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  createRecordButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createRecordText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF89ED',
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.foreground,
    borderRadius: 20,
    alignItems: 'center',
    padding: 4,
    gap: 6,
    width: '100%',
  },
  haircutImage: {
    width: 142,
    height: 124,
    borderRadius: 20,
  },
  infoContainer: {
    flex: 1,
  },
  haircutName: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  addressText: {
    flex: 1,
    fontSize: 16,
    marginTop: 8,
    fontWeight: '600',
    color: COLORS.white,
  },
  removeButton: {
    backgroundColor: '#EFE9FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  removeText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 12,
  },
});
