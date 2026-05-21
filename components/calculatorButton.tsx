import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface Props {
  label: string;
  onPress: () => void;
  type?: "number" | "operator" | "function";
}

const CalcutorButton: React.FC<Props> = ({ label, onPress, type = "number" }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === "operator" && styles.operator,
        type === "function" && styles.function,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 5,
    padding: 20,
    borderRadius: 50,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  operator: {
    backgroundColor: "orange",
  },
  function: {
    backgroundColor: "gray",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default CalcutorButton;
