import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

import {HAIRCUTS} from '../../mocks/data';
import {COLORS} from '../../constants/colors';
import {RootStackScreenProps} from '../../navigation/types';

import {RadioChecked, RadioUncheckedIcon} from '../../components/icons';
import {Screen, TabsHeader} from '../../components';

export const HaircutsScreen = ({
  navigation,
  route,
}: RootStackScreenProps<'Haircuts'>) => {
  const [selectedHaircutId, setSelectedHaircutId] = useState<number | null>(
    null,
  );

  return (
    <Screen>
      <TabsHeader label="Haircuts" withBack />
      <FlatList
        data={HAIRCUTS}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.haircutItem}
            onPress={() => setSelectedHaircutId(item.id)}>
            <View style={styles.haircutImageContainer}>
              <Image source={{uri: item.image}} style={styles.haircutImage} />
            </View>
            <View style={styles.haircutDetails}>
              <Text style={styles.haircutName}>{item.name}</Text>
              {selectedHaircutId === item.id ? (
                <RadioChecked color={COLORS.foreground} />
              ) : (
                <RadioUncheckedIcon />
              )}
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        disabled={!selectedHaircutId}
        onPress={() =>
          selectedHaircutId &&
          navigation.navigate('SelectTime', {
            haircutId: selectedHaircutId,
            addressId: route.params.addressId,
          })
        }
        style={[
          styles.submitButton,
          !selectedHaircutId && styles.disabledButton,
        ]}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    gap: 36,
    marginTop: 16,
  },
  haircutItem: {
    gap: 4,
  },
  haircutImageContainer: {
    backgroundColor: COLORS.foreground,
    padding: 1,
    paddingBottom: 4,
    borderRadius: 20,
  },
  haircutImage: {
    height: 142,
    width: 142,
    borderRadius: 20,
  },
  haircutDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  haircutName: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.white,
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
  disabledButton: {
    opacity: 0.5,
  },
});
