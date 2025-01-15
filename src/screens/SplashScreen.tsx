import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';

import crownImage from '../assets/crown/crown.png';

import {Screen} from '../components';

export const SplashScreen = () => (
  <Screen>
    <View style={styles.centeredContainer}>
      <Image source={crownImage} style={styles.crownImage} />
    </View>
    <ActivityIndicator size="large" color="#fff" style={styles.loader} />
  </Screen>
);

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  crownImage: {
    width: 350,
    height: 350,
  },
  loader: {
    marginBottom: 40,
  },
});
