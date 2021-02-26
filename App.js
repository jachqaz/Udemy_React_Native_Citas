import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const App = () => {

  const [citas, setCitas] = useState([
    { id: "1", paciente: "Paciente1", propietario: "propiestario1", sintomas: "sintomas1" },
    { id: "2", paciente: "Paciente2", propietario: "propiestario2", sintomas: "sintomas2" },
    { id: "3", paciente: "Paciente3", propietario: "propiestario3", sintomas: "sintomas3" },
  ]);

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <FlatList data={citas} renderItem={(cita) => (
        <View>
          <Text>{cita.paciente}</Text>
        </View>
      )} keyExtractor={cita => cita.id} />
      {/*{citas.map(cita => (*/}
      {/*  <View>*/}
      {/*    <Text>{cita.paciente}</Text>*/}
      {/*  </View>*/}
      {/*))}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#AA076B",
    flex: 1,
  },
  titulo: {
    color: "#FFF",
    marginTop: 40,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
