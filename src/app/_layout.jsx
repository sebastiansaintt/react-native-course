import {Stack} from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import {WishProvider} from '../context/WishContext';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return (
        <SafeAreaProvider>
          <WishProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                <Stack.Screen name='products/[id]' options={{title: 'Product'}}/>
            </Stack>
          </WishProvider>
        </SafeAreaProvider>
    )
}