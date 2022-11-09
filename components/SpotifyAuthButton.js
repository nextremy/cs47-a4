import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Images } from "../assets/Themes";
import { colors } from "../assets/Themes/colors";

export default function SpotifyAuthButton(props) {
  return (
    <Pressable onPressOut={props.authFunction} style={styles.button}>
      <Image source={Images.spotify} style={styles.image} />
      <Text style={styles.text}>Connect with Spotify</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.spotify,
    borderRadius: 9999,
    flexDirection: "row",
    padding: 12,
  },
  image: {
    height: 20,
    width: 20,
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
    textTransform: "uppercase",
  },
});
