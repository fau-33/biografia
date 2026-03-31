import { Image, Text, View } from "react-native";
import Foto from "../../assets/Foto.png";
import styles from "./estilos";

export default function Card() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={Foto} style={styles.fotoCapa} />
        <Text style={styles.nome}>Samuel L. Jackson</Text>
        <Text style={styles.paragrafo}>Ator e produtor norte-americano</Text>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>🎬 FILMS</Text>
            <Text style={styles.statValue}>150+</Text>
          </View>
          <View style={[styles.statBox, styles.statDivider]}>
            <Text style={styles.statLabel}>🏆 AWARDS</Text>
            <Text style={styles.statValue}>40+</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>🌎 BORN</Text>
            <Text style={styles.statValue}>1948</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
