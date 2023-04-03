import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Exemplo1 = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const exemploDeNavegacao = () => {
    navigate("Exemplo2");
  };
  return (
    <View>
      <Text>Pagina exemplo 1</Text>
      <Button title="Navegar" onPress={() => exemploDeNavegacao()} />
    </View>
  );
};

export default Exemplo1;
