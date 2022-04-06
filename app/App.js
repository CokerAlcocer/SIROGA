
import 'react-native-gesture-handler';
import Navegation from './src/navigations/Navigation'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  console.disableYellowBox = true;
  return(
    <>
      <StatusBar style="auto" />
      <Navegation />
    </>
  )
}
