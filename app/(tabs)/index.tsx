import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link
        href="/about"
        style={{
          fontSize: 30,
          textDecorationLine: "underline",
          marginTop: 20,
        }}
      >
        Go to About screen!
      </Link>
    </View>
  );
}
