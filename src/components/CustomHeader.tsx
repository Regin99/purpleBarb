import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../constants/colors';

interface CustomHeaderProps {
  route: {name: string};
  options: {title?: string};
}

export const CustomHeader = ({route, options}: CustomHeaderProps) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top + bottom}]}>
      <Text style={styles.text}>{options?.title || route.name}</Text>
    </View>
  );
};

const styles = {
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  text: {
    color: COLORS.white,
  },
};
