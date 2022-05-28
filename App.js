import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
import Text from './src/Components/text/text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import { SafeAreaView } from 'react-native-safe-area-context';




const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require('./assets/fonts/Antonio-Medium.ttf'),
    "Spartan-Bold": require('./assets/fonts/Spartan-Bold.ttf'),
    "Spartan-Regular": require('./assets/fonts/Spartan-Regular.ttf')
  })

  if (!loaded) {
    return (
      <Text>Font is Loading.........</Text>
    )
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
