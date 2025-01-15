import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

import {COLORS} from '../../constants/colors';

import {CustomInput, Screen, TabsHeader} from '../../components';

export const ContactScreen = () => {
  const {
    control,
    formState: {isValid},
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      number: '',
      email: '',
      description: '',
    },
  });

  const handleSubmitForm = () => {
    reset();
  };
  return (
    <Screen>
      <TabsHeader label="Contact with us" left withBack />
      <ScrollView contentContainerStyle={styles.container}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              label="First name"
              placeholder="Enter Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              label="Phone number"
              placeholder="Enter number"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="number"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              label="Email"
              placeholder="Enter email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <CustomInput
              label="Description"
              placeholder="Enter text"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
          name="description"
        />
      </ScrollView>
      <TouchableOpacity
        onPress={handleSubmitForm}
        disabled={!isValid}
        style={[styles.submitButton, !isValid && styles.disabledButton]}>
        <Text style={styles.submitText}>Send</Text>
      </TouchableOpacity>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    marginTop: 24,
  },
  submitButton: {
    alignSelf: 'center',
    marginBottom: 18,
    minWidth: 210,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    paddingVertical: 6,
  },
  disabledButton: {
    opacity: 0.5,
  },
  submitText: {
    fontSize: 21,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
