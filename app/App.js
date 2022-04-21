import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import Navegation from "./src/navigations/Navigation";

export default function App() {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar style="auto" />
      <Navegation />
    </>
  );
}
