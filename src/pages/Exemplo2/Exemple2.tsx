import { Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Exemplo2 = () => {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const exemploDeNavegacao = () => {
    navigate("Exemplo1");
  };

  return (
    <View>
      <Text>Pagina exemplo 2</Text>
      <Button title="Navegar" onPress={() => exemploDeNavegacao()} />
    </View>
  );
};

export default Exemplo2;
