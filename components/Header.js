import { StyleSheet, Text } from "react-native";

function Header({ title, color = "tomato" }) {
  return <Text style={[styles.header, { color }]}>{title}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Header;
