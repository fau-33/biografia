import { View, ScrollView, StatusBar } from "react-native";
import styles from "./estilos";
import BarraTitulo from "./components/BarraTitulo";
import Card from "./components/Card";
import Conteudo from "./components/Conteudo";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#2c3e50" />
      <BarraTitulo />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card />
        <Conteudo />
      </ScrollView>
    </View>
  );
}
