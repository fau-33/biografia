import { View } from "react-native";
import styles from "./estilos";
import BarraTitulo from "./components/BarraTitulo";
import Card from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <BarraTitulo />
      <Card />
    </View>
  );
}
