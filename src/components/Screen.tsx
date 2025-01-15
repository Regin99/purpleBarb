import {ReactNode} from 'react';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

type ScreenProps = {
  children: ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
};

export const Screen = ({children, containerStyle}: ScreenProps) => {
  return (
    <LinearGradient
      colors={['#322D8E', '#8B029D']}
      style={[styles.gradientContainer]}>
      <SafeAreaView style={[styles.container, containerStyle]}>
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 22,
    flex: 1,
  },
});
