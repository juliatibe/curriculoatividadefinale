import {Text, View, StyleSheet, Button, TouchableOpacity, TextInput, ScrollView} from "react-native";
import {useState} from "react";

export default function App() {

  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [numero3, setNumero3] = useState(0)

  function soma() {
    setNumero3(numero1 + numero2)
  }

  function subtracao() {
    setNumero3(numero1 - numero2)
  }

  function multiplicacao() {
    setNumero3(numero1 * numero2)
  }

  function divisao() {
    setNumero3(numero1 / numero2)
  }

  return (
      <View style={styles.container}>
        <Text style={styles.texto}>Calculadora</Text>
        <Text style={styles.texto}>O resultado é {numero3}</Text>

        <TextInput style={styles.input} keyboardType={"numeric"} onChangeText={numero1} placeholder={"DIGITE UM NÚMERO"} />
        <TextInput style={styles.input} keyboardType={"numeric"} onChangeText={numero2} placeholder={"DIGITE UM NÚMERO"} />

        <TouchableOpacity style={styles.botao} onPress={soma}>
          <Text style={styles.soma}>Adição</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao2} onPress={subtracao}>
          <Text style={styles.sub}>Subtração</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao3} onPress={multiplicacao}>
          <Text style={styles.mult}>Multiplicação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao4} onPress={divisao}>
          <Text style={styles.divisao}>divisão</Text>
        </TouchableOpacity>


      </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
