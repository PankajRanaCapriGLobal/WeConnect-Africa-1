import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/About" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/BalanceTransfer" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/CreditBalance" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/Profile" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/Report" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/Setting" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/Support" options={{ headerShown: false }} />
        <Stack.Screen name="(profile)/TransferHistory" options={{ headerShown: false }} />
        <Stack.Screen name="(login)/Login" options={{ headerShown: false }} />
        <Stack.Screen name="(login)/OtpVerify" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
