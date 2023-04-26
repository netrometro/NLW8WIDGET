import 'react-native-gesture-handler';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_900Black,
} from '@expo-google-fonts/inter';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { theme } from './src/theme';

import Widget from './src/components/Widget';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}
    >
      <StatusBar
        style="auto"
        backgroundColor='transparent'
        translucent
      />
      <SafeAreaProvider>
        <Widget />
      </SafeAreaProvider>
    </View>
  );
}
