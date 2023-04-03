import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Exemplo1 from "../pages/Exemplo1/Exemplo1";
import Exemplo2 from "../pages/Exemplo2/Exemple2";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Exemplo1" component={Exemplo1} />
        <Stack.Screen name="Exemplo2" component={Exemplo2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;