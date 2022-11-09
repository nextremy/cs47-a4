import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Themes } from "./assets/Themes";
import SongList from "./components/SongList";
import SpotifyAuthButton from "./components/SpotifyAuthButton";
import { useSpotifyAuth } from "./utils";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  return (
    <SafeAreaView style={styles.container}>
      {token ? (
        <SongList tracks={tracks} />
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
