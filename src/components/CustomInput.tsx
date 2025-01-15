import {Text, TextInput, TextInputProps, View, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

type InputProps = {
  label?: string;
} & TextInputProps;

export const CustomInput = ({label, ...props}: InputProps) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, props.multiline && styles.multiline]}
        {...props}
        placeholderTextColor="rgba(255, 255, 255, 0.52)"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.white,
    marginLeft: 18,
    lineHeight: 32,
  },
  input: {
    height: 42,
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 6,
    backgroundColor: COLORS.foreground,
    borderRadius: 35,
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.52)',
  },
  multiline: {
    height: 145,
  },
});
