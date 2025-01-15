import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

import {ADDRESSES} from '../../mocks/data';
import {COLORS} from '../../constants/colors';

import {Screen, TabsHeader} from '../../components';

const AddressItem = ({item}: {item: (typeof ADDRESSES)[0]}) => (
  <View style={styles.container}>
    <Image source={{uri: item.image}} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.text}>{item.address}</Text>
    </View>
  </View>
);

export const AddressesScreen = () => (
  <Screen>
    <TabsHeader label="Addresses" />
    <FlatList
      style={styles.list}
      data={ADDRESSES}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.listContent}
      renderItem={({item}) => <AddressItem item={item} />}
    />
  </Screen>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: COLORS.foreground,
    overflow: 'hidden',
    padding: 2,
    gap: 4,
    paddingBottom: 4,
  },
  image: {
    height: 120,
    borderRadius: 20,
  },
  textContainer: {
    paddingHorizontal: 11,
  },
  text: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '600',
  },
  listContent: {
    gap: 46,
    paddingVertical: 20,
  },
  list: {
    marginTop: 16,
  },
});
