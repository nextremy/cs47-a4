import { Image, StyleSheet, Text, View } from "react-native";
import { Themes } from "../assets/Themes";
import millisToMinutesAndSeconds from "../utils/millisToMinutesAndSeconds";

export default function Song(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.indexText}>{props.index + 1}</Text>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={styles.nameAndArtistContainer}>
        <Text numberOfLines={1} style={styles.nameText}>
          {props.name}
        </Text>
        <Text numberOfLines={1} style={styles.artistsText}>
          {props.artists.join(",")}
        </Text>
      </View>
      <Text numberOfLines={1} style={styles.albumText}>
        {props.album}
      </Text>
      <Text style={styles.durationText}>
        {millisToMinutesAndSeconds(props.duration)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 8,
  },
  indexText: {
    color: Themes.colors.gray,
    textAlign: "center",
    width: "10%",
  },
  image: {
    height: 64,
    width: 64,
  },
  nameAndArtistContainer: {
    marginLeft: 12,
    width: "30%",
  },
  nameText: {
    color: Themes.colors.white,
  },
  artistsText: {
    color: Themes.colors.gray,
  },
  albumText: {
    color: Themes.colors.white,
    flexGrow: 1,
    marginLeft: 8,
    maxWidth: "25%",
  },
  durationText: {
    color: Themes.colors.white,
    marginLeft: 8,
  },
});
