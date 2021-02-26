import React from "react";
import { Text, View } from "react-native";

const Cita = ({ item }) => {
  return (
    <View>
      <View>
        <Text>Paciente: </Text>
        <Text>{item.paciente}</Text>
      </View>
      <View>
        <Text>Propietario: </Text>
        <Text>{item.propietario}</Text>
      </View>
      <View>
        <Text>Sintomas: </Text>
        <Text>{item.sintomas}</Text>
      </View>
    </View>
  );
};
export default Cita;
