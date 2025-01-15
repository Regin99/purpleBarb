import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import background from '../assets/onboarding/onboarding.png';
import {TabsHeader} from '../components';
import {COLORS} from '../constants/colors';
import rocket from '../assets/rocket/rocket.png';
import camera from '../assets/camera/camera.png';
import passports from '../assets/passports/passports.png';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {useRef} from 'react';

const ONBOARDING_DATA = [
  {
    id: 1,
    title: 'Quick and convenient booking',
    description:
      'Reservation system, allows our customers to make appointments easily and conveniently.',
    image: rocket,
  },
  {
    id: 2,
    title: 'Hairstyle photos',
    description: 'Easy selection of hairstyles for every taste',
    image: camera,
  },
  {
    id: 3,
    title: 'Testimonials',
    description: 'Ability to leave feedback for wigmakers',
    image: passports,
  },
];

export const OnboardingScreen = () => {
  const progress = useSharedValue<number>(0);
  const navigation = useNavigation();
  const carouselRef = useRef<ICarouselInstance>(null);
  const {width} = useWindowDimensions();

  const handleSkip = () => {
    if (progress.value < ONBOARDING_DATA.length - 1) {
      carouselRef.current?.next();
    } else {
      navigation.navigate('Privacy');
    }
  };

  return (
    <ImageBackground source={background} style={styles.background}>
      <SafeAreaView style={styles.safeArea}>
        <TabsHeader
          rightComponent={
            <TouchableOpacity style={styles.backButton} onPress={handleSkip}>
              <Text style={styles.backButtonText}>Skip</Text>
            </TouchableOpacity>
          }
        />
        <View style={styles.carouselContainer}>
          <Carousel
            ref={carouselRef}
            width={width}
            data={ONBOARDING_DATA}
            loop={false}
            onProgressChange={progress}
            containerStyle={styles.carouselContainer}
            renderItem={({item}) => (
              <View style={styles.carouselItemContainer}>
                <Image source={item.image} style={styles.carouselImage} />
                <View style={styles.carouselTextContainer}>
                  <Text style={styles.carouselTitle}>{item.title}</Text>
                  <Text style={styles.carouselDescription}>
                    {item.description}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
        <Pagination.Basic
          progress={progress}
          data={ONBOARDING_DATA}
          dotStyle={styles.paginationDot}
          activeDotStyle={styles.activePaginationDot}
          containerStyle={styles.paginationContainer}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 16,
  },
  safeArea: {
    flex: 1,
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
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
  carouselItemContainer: {
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselImage: {
    width: 350,
    height: 350,
  },
  carouselTextContainer: {
    marginTop: 56,
    gap: 18,
  },
  carouselTitle: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  carouselDescription: {
    fontSize: 16,
    color: COLORS.white,
    fontWeight: '600',
    textAlign: 'center',
    opacity: 0.3,
  },
  paginationDot: {
    borderRadius: 50,
    backgroundColor: COLORS.foreground,
  },
  activePaginationDot: {
    backgroundColor: COLORS.white,
  },
  paginationContainer: {
    marginTop: 6,
    gap: 10,
    marginBottom: 22,
  },
});
