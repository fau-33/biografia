import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 20,
    padding: 20,
    borderRadius: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#34495e",
    marginTop: 20,
    borderLeftWidth: 4,
    borderLeftColor: "#3498db",
    paddingLeft: 10,
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 24,
    color: "#535c68",
    marginTop: 10,
  },
  imagem: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    marginTop: 20,
    backgroundColor: "#ecf0f1",
  },
});

export default styles;
