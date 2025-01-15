import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {BARBERSHOP_IMAGES} from '../../mocks/data';
import {COLORS} from '../../constants/colors';
import {RootStackScreenProps} from '../../navigation/types';

import {Screen, TabsHeader} from '../../components';

export const BarbershopScreen = ({
  navigation,
}: RootStackScreenProps<'Barbershop'>) => {
  const renderImages = () => {
    return BARBERSHOP_IMAGES.map(item => (
      <Image key={item.id} source={{uri: item.image}} style={styles.image} />
    ));
  };

  return (
    <Screen containerStyle={styles.container}>
      <TabsHeader label="Barbershop" withBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imagesContainer}>{renderImages()}</View>
        <Text style={styles.headerText}>RED Barbershop</Text>
        <Text style={styles.descriptionText}>
          Our barbershop is not only a place where you get a first class haircut
          and shave, but also a space to relax and be inspired. We pride
          ourselves on creating a cozy and professional atmosphere where every
          customer feels special.
        </Text>
      </ScrollView>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate('BookAddress')}>
        <Text style={styles.submitText}>Next</Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  imagesContainer: {
    gap: 28,
    marginTop: 16,
  },
  image: {
    width: '100%',
    height: 156,
    borderRadius: 20,
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
  headerText: {
    marginTop: 16,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
  },
  descriptionText: {
    marginTop: 16,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 32,
  },
});
