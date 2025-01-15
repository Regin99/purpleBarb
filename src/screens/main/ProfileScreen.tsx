import {useEffect, useRef} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useForm, Controller, useWatch} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {COLORS} from '../../constants/colors';
import card from '../../assets/card/card.png';
import privacy from '../../assets/privacy/privacy.png';
import {changeProfileData, selectProfile} from '../../store/slices';

import {Screen, TabsHeader} from '../../components';
import {PlusIcon, ProfileIconLarge} from '../../components/icons';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {name, age, photo} = useSelector(selectProfile);

  const {control, handleSubmit, setValue} = useForm({
    defaultValues: {
      name: name || '',
      age: age ? String(age) : '',
      photo: photo || '',
    },
  });

  const formValues = useWatch({control});

  const nameInputRef = useRef<TextInput>(null);
  const ageInputRef = useRef<TextInput>(null);

  useEffect(() => {
    setValue('name', name || '');
    setValue('age', age ? String(age) : '');
    setValue('photo', photo || '');
  }, [name, age, photo, setValue]);

  const onSubmit = () => {
    dispatch(
      changeProfileData({
        name: formValues.name,
        age: Number(formValues.age),
        photo: formValues.photo,
      }),
    );
    nameInputRef.current?.blur();
    ageInputRef.current?.blur();
  };

  const hasChanges =
    formValues.name !== (name || '') ||
    formValues.age !== (age ? String(age) : '') ||
    formValues.photo !== (photo || '');

  const handlePickImage = () => {
    Alert.alert(
      'Select Option',
      'Choose an action:',
      [
        {
          text: 'Open Camera',
          onPress: () => openCamera(),
        },
        {
          text: 'Choose from Library',
          onPress: () => openImageLibrary(),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          const newPhoto = response.assets[0].uri;
          newPhoto && setValue('photo', newPhoto);
        }
      },
    );
  };

  const openImageLibrary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          const newPhoto = response.assets[0].uri;
          newPhoto && setValue('photo', newPhoto);
        }
      },
    );
  };

  return (
    <Screen containerStyle={{}}>
      <TabsHeader
        label="Profile"
        rightComponent={
          hasChanges && (
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.backButton}>
              <Text style={styles.backButtonText}>Save</Text>
            </TouchableOpacity>
          )
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Controller
          control={control}
          name="photo"
          render={({field: {value}}) => (
            <TouchableOpacity
              onPress={handlePickImage}
              style={styles.profileImageContainer}>
              {value ? (
                <Image source={{uri: value}} style={styles.profileImage} />
              ) : (
                <View>
                  <ProfileIconLarge />
                  <View style={styles.plusIconContainer}>
                    <PlusIcon />
                  </View>
                </View>
              )}
            </TouchableOpacity>
          )}
        />
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                ref={nameInputRef}
                style={styles.textInput}
                placeholderTextColor={'rgba(255, 255, 255, 0.52)'}
                placeholder="Enter name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Controller
            control={control}
            name="age"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                ref={ageInputRef}
                style={styles.textInput}
                placeholderTextColor={'rgba(255, 255, 255, 0.52)'}
                placeholder="Enter age"
                keyboardType="numeric"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionCard}>
            <Text style={styles.optionCardText}>
              Privacy policy & Terms of use
            </Text>
            <Image
              source={privacy}
              style={styles.optionCardImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionCard}
            onPress={() => navigation.navigate('Contact')}>
            <Text style={styles.optionCardText}>Contact with us</Text>
            <Image
              source={card}
              style={styles.optionCardImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
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
  profileImageContainer: {
    alignSelf: 'center',
    marginTop: 24,
    borderRadius: 100,
  },
  profileImage: {
    width: 155,
    height: 155,
    borderRadius: 100,
  },
  plusIconContainer: {
    height: 20,
    width: 20,
    borderRadius: 50,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 20,
  },
  inputContainer: {
    gap: 14,
    marginTop: 24,
  },
  textInput: {
    minWidth: 222,
    height: 42,
    textAlign: 'center',
    backgroundColor: COLORS.foreground,
    borderRadius: 35,
    fontSize: 20,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.52)',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 42,
  },
  optionCard: {
    backgroundColor: COLORS.foreground,
    width: 145,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 8,
    gap: 14,
  },
  optionCardText: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  optionCardImage: {
    height: 145,
    width: 145,
  },
});
