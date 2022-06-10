import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import Text from './src/Components/text/text';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/home';
import Details from './src/screens/details';
import { SafeAreaProvider } from 'react-native-safe-area-context';


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
    <SafeAreaProvider style={{ backgroundColor: "black" }}>
      <NavigationContainer >
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
