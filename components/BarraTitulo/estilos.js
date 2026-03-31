import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 20,
    height: 100,
    justifyContent: "center",
    backgroundColor: "#2c3e50",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titulo: {
    color: "#fff",
    letterSpacing: 1.5,
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
});

export default styles;
