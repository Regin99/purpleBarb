import {Provider} from 'react-redux';
import {RootNavigator} from './navigation/RootStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {store} from './store/store';
import {StyleSheet} from 'react-native';

export const App = () => (
  <GestureHandlerRootView style={styles.container}>
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
