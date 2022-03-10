import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import Login from './src/screens/Login';

export default function App() {
  console.disableYellowBox = true;
  return(
    <>
      <StatusBar style='auto' />
      <Login />
    </>
  )
}
