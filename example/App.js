import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    console.log(data)
  }, [data])
  
  return (
    <View style={styles.container}>
      <Button title='Probar Servicio' onPress={() => test()} />
      <Button title='Guardar objeto' onPress={() => save()} />
      <Button title='Actualizar objeto' onPress={() => update(1)} /> 
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );

  function test() {
    return fetch('http://localhost:4000/measure/')
      .then(res => res.json())
      .then(json => setData(json))
      .catch(e => console.log(e))
  }

  function save() {
    let measure = {
      broker: "expample",
      humAir: 999,
      humEarth: 999,
      id: 999,
      sistem: {
        id: 1
      },
      tempAir: 999,
      tempEarth: 999,
    }

    return fetch('http://localhost:8080/siroga/api/mh/', {
        method: 'POST',
        body: JSON.stringify(measure),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => 
        response.json()
      )
      .then((json)=>{
        console.log(json)
      })
      .catch(e => console.log(e))
  }

  function update(id) {
    let user = {
      email: "coker@gmail.com",
      id: id,
      lastname: 'Duran',
      name: 'Angel',
      password: 'coker2923',
      surname: 'Alcocer',
      username: 'coker'
    }

    setTimeout(() => {
      return fetch('http://:8080/siroga/api/user/', {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        console.log('Actualizado');
      })
      .catch(e => console.log(e))
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
