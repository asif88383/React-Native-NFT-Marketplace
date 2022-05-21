import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Stack.Screen/>
        <Stack.Screen/>
      </StackNavigator>
    </NavigationContainer>
  );
}
