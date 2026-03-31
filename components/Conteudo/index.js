import { Text, View, Image } from "react-native";
import styles from "./estilos";
import Filme from "../../assets/Filme.png";

export default function Conteudo() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o Ator</Text>
      <Text style={styles.subtitulo}>Sua vida</Text>

      <Text style={styles.paragrafo}>
        Nascido em Washington, DC, 21 de dezembro de 1948
      </Text>
      <Text style={styles.paragrafo}>
        Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos do
        Morehouse College.
      </Text>

      <Text style={styles.subtitulo}>Inicio de carreira</Text>
      <Text style={styles.paragrafo}>
        Seu primeiro filme se chama Together for Days que estreou em 1972.
      </Text>
      <Image source={Filme} style={styles.imagem} />
    </View>
  );
}
