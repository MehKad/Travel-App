import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </TailwindProvider>
  );
}
