import { View } from "react-native";
import styles from "./estilos";
import BarraTitulo from "./components/BarraTitulo";

export default function App() {
  return (
    <View style={styles.container}>
      <BarraTitulo />
    </View>
  );
}
