import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c3e50",
    paddingVertical: 30,
    alignItems: "center",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  box: {
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 20,
    width: "85%",
    overflow: "hidden",
  },
  fotoCapa: {
    width: "100%",
    height: 350,
  },
  nome: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 15,
    color: "#2c3e50",
  },
  paragrafo: {
    marginHorizontal: 15,
    marginTop: 5,
    marginBottom: 20,
    fontSize: 14,
    color: "#7f8c8d",
    textAlign: "center",
  },
  statsContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ecf0f1",
    paddingVertical: 15,
    width: "100%",
    justifyContent: "space-around",
  },
  statBox: {
    alignItems: "center",
    flex: 1,
  },
  statDivider: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#ecf0f1",
  },
  statLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#95a5a6",
    marginBottom: 5,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c3e50",
  },
});

export default styles;
