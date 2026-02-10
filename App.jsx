import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackPlayer, { Capability } from 'react-native-track-player';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
import PlayerScreen from './src/screens/private/PlayerScreen';
import LanguageScreen from './src/screens/private/LanguageScreen';

import './src/i18n/i18n';
import './global.css';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const setup = async () => {
      try {
        await TrackPlayer.setupPlayer();
        await TrackPlayer.updateOptions({
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
            Capability.SeekTo,
          ],
          compactCapabilities: [Capability.Play, Capability.Pause],
        });

        // Add initial test track if the queue is empty
        const queue = await TrackPlayer.getQueue();
        if (queue.length === 0) {
          await TrackPlayer.add({
            id: '1',
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            title: 'SoundHelix Song 1',
            artist: 'SoundHelix',
            artwork: 'https://picsum.photos/800/800',
          });
        }
      } catch (e) {
        // Log error but don't crash, might be already initialized
        console.log('TrackPlayer setup error:', e);
      }
    };
    setup();
  }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={DrawerNavigator} />
          <Stack.Screen
            name="PlayerMain"
            component={PlayerScreen}
            options={{
              presentation: 'modal',
              animation: 'slide_from_bottom'
            }}
          />
          <Stack.Screen
            name="LanguageSelection"
            component={LanguageScreen}
            options={{
              presentation: 'fullScreenModal',
              animation: 'slide_from_right'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
