import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CalcutorButton from "./components/calculatorButton";

export default function App() {
  const [display, setDisplay] = useState("0");

  const handlePress = (value: string) => {
    if (display === "0" && !isNaN(Number(value))) {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const clearAll = () => setDisplay("0");
  const deleteLast = () => setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
  const toggleSign = () => setDisplay((parseFloat(display) * -1).toString());

  const calculate = () => {
    try {
      const result = eval(display.replace("x", "*").replace("÷", "/"));
      setDisplay(result.toString());
    } catch {
      setDisplay("0");
      Alert.alert("Errror", "Calculo erroneo")
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>

      <View style={styles.row}>
        <CalcutorButton label="C" onPress={clearAll} type="function" />
        <CalcutorButton label="+/-" onPress={toggleSign} type="function" />
        <CalcutorButton label="del" onPress={deleteLast} type="function" />
        <CalcutorButton label="÷" onPress={() => handlePress("÷")} type="operator" />
      </View>

      <View style={styles.row}>
        <CalcutorButton label="7" onPress={() => handlePress("7")} />
        <CalcutorButton label="8" onPress={() => handlePress("8")} />
        <CalcutorButton label="9" onPress={() => handlePress("9")} />
        <CalcutorButton label="x" onPress={() => handlePress("x")} type="operator" />
      </View>

      <View style={styles.row}>
        <CalcutorButton label="4" onPress={() => handlePress("4")} />
        <CalcutorButton label="5" onPress={() => handlePress("5")} />
        <CalcutorButton label="6" onPress={() => handlePress("6")} />
        <CalcutorButton label="-" onPress={() => handlePress("-")} type="operator" />
      </View>

      <View style={styles.row}>
        <CalcutorButton label="1" onPress={() => handlePress("1")} />
        <CalcutorButton label="2" onPress={() => handlePress("2")} />
        <CalcutorButton label="3" onPress={() => handlePress("3")} />
        <CalcutorButton label="+" onPress={() => handlePress("+")} type="operator" />
      </View>

      <View style={styles.row}>
        <CalcutorButton label="0" onPress={() => handlePress("0")} />
        <CalcutorButton label="." onPress={() => handlePress(".")} />
        <CalcutorButton label="=" onPress={calculate} type="operator" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "flex-end", 
    backgroundColor: "#000" 
  },
  display: { 
    color: "white", 
    fontSize: 40, 
    textAlign: "right", 
    padding: 20 
  },
  row: { 
    flexDirection: "row", 
    justifyContent: "space-between" 
  },
});
