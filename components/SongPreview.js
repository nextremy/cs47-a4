import WebView from "react-native-webview";

export default function SongPreview(props) {
  return <WebView source={{ uri: props.route.params.url.previewURL }} />;
}
