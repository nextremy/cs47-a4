import WebView from "react-native-webview";

export default function SongDetail(props) {
  return <WebView source={{ uri: props.route.params.url.externalURL }} />;
}
