import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Images } from "../assets/Themes";
import { colors } from "../assets/Themes/colors";
import Song from "./Song";

export default function SongList(props) {
  console.log(props.tracks[0].album.images[2].url);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={Images.spotify} style={styles.logo} />
        <Text style={styles.title}>My Top Tracks</Text>
      </View>
      <FlatList
        data={props.tracks}
        renderItem={({ index, item }) => (
          <Song
            index={index}
            image={item.album.images[0].url}
            name={item.name}
            artists={item.album.artists.map((artist) => artist.name)}
            album={item.album.name}
            duration={item.duration_ms}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 16,
  },
  logo: {
    height: 32,
    width: 32,
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 12,
  },
});
