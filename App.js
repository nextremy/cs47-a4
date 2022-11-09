import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet } from "react-native";
import { Themes } from "./assets/Themes";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";
import SongPreview from "./components/SongPreview";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import { useSpotifyAuth } from "./utils";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SongPreview"
          component={SongPreview}
          options={{
            headerStyle: { backgroundColor: Themes.colors.background },
            headerTintColor: Themes.colors.white,
          }}
        />
        <Stack.Screen
          name="SongDetail"
          component={SongDetail}
          options={{
            headerStyle: { backgroundColor: Themes.colors.background },
            headerTintColor: Themes.colors.white,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home(props) {
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  return (
    <SafeAreaView style={styles.container}>
      {token ? (
        <SongList tracks={tracks} navigation={props.navigation} />
      ) : (
        <SpotifyAuthButton authFunction={getSpotifyAuth} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Themes.colors.background,
    flex: 1,
    justifyContent: "center",
  },
});
