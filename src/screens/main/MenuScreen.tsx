import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Carousel, {
  ICarouselInstance,
  Pagination,
} from 'react-native-reanimated-carousel';
import {useSharedValue} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

import {COLORS} from '../../constants/colors';

import {Screen, TabsHeader} from '../../components';
import {StarIcon} from '../../components/icons';
import {useRef} from 'react';

const DATA = [
  'https://s3-alpha-sig.figma.com/img/9911/0533/89a8e7919756db3e99bb4438c6eb1e03?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fJFgl6uvKzP62L1mntkznM5Gr46nrNNh30Cv4yAc8GxIsxcBlvoqJdGlHOvfA04i~qjvQpQczXzaJ7vJEMrxKfiyZvV0-0W0vkeJdKVtg81IXBkducvi4wwhlvCAEA9SdWgIw8jAkCWOwEl3aY6QtggcmHxSSPUp91UKOrADPEhXeNqFM4ysazZKpfyBWik6QYesQrs-OQS9yrzVU~A3861CPmVrN8s0OBys7cZbhhx9IDg8FDcXZ3QXnuvlw38GhBq2H3i9Cx-hRJl7DraDhK6tVueKuNmi5EUemB93j~TmMqJ51iTPVkv7tVkEB-cSabolUPQOzvQelSRsYFSzMw__',
  'https://s3-alpha-sig.figma.com/img/8072/20c7/b1c1d7587366335addefedf2d25a945b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LX2owsx763A9upZYxYfCr1R6~gVqSjj04hAmS2GT7EACbEx8qpHhxIpBt7AG5737WSYprdnsMNMMCeixDiI6Ryroy9ubMaFxjU2gqsrJuf1cVR-ggMXyfd7zfwsxHNGZ99sVvn9aBd-ftG8uNzfh839a-AGs8MOybB2UGYmn88jOSqcAGCMeusBs~GUsnu9tx4yasW8bFzxFLAGy3eEHMzzdh-V0eXxyv9bgsoBh9tMEDmh0SUYcqvjlqmnDH9W4ID8jaihjOJtiBmhG4lwtGsyoycYUkHVgRG6x0BlFG4n0yw1iw5MYyeTwF5U9ljcfccKlHUxFxaTQKafjn1ME4Q__',
  'https://s3-alpha-sig.figma.com/img/1620/f878/97051a5c10b718ee1796b3288e19b970?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FUkl42fkv41OCZ-b-vH1xL6ea4GSx0OfILx~1oRmchZ93kgHH8E6anjVwbl5kIZiEb~9DbPY69tMMp9CwNCzdhJ1zFhMoIypUJxHvqXHhWYEtL4D7GenFWCKhtHdeiiatHiR-XHFFVZfI6Q0tvVCNQ~jzoK95QcPzkijnH~v1mrw1R-geMnwvskgC2mi0AEjRDzCZnKQF2LiuBDBmVhN7H78syplS3Qnly9IEJQm~HDQVuViPn5OWDfFcQq6UY89LPJIyKKgKJS8xBHpEDrdNDz2vCZure9oMHXVJ7ZRyMC1cGj~TJ1Scbsi0z1O8oVFHuxMAqhcVPX9W5fi-lyH7Q__',
];

export const MenuScreen = () => {
  const navigation = useNavigation();
  const scrollOffsetValue = useSharedValue<number>(0);
  const progress = useSharedValue<number>(0);
  const ref = useRef<ICarouselInstance>(null);
  const {width} = useWindowDimensions();

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <Screen containerStyle={styles.screenContainer}>
      <TabsHeader label="Menu" left />
      <View style={styles.carouselContainer}>
        <Carousel
          width={width - 20}
          height={152}
          ref={ref}
          data={DATA}
          defaultScrollOffsetValue={scrollOffsetValue}
          onProgressChange={progress}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Barbershop')}>
                <ImageBackground source={{uri: item}} style={styles.cardImage}>
                  <Text style={styles.cardTitle}>RED BARBERSHOP</Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <Pagination.Basic
        progress={progress}
        data={DATA}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.activePaginationDot}
        containerStyle={styles.paginationContainer}
        onPress={onPressPagination}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Feedback')}>
        <ImageBackground
          source={{uri: DATA[1]}}
          style={styles.feedbackImageBackground}>
          <StarIcon />
          <Text style={styles.feedbackText}>Feedback window</Text>
        </ImageBackground>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    paddingHorizontal: 15,
  },
  carouselContainer: {
    height: 152,
    marginTop: 16,
  },
  cardContainer: {
    marginRight: 10,
  },
  cardImage: {
    height: 152,
    borderWidth: 1,
    borderColor: COLORS.white,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 10,
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.white,
    textShadowColor: COLORS.black,
    textShadowRadius: 1,
    textShadowOffset: {width: 1, height: 1},
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
  feedbackImageBackground: {
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  feedbackText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 34,
  },
});
