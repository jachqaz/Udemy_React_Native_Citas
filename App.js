import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Cita from "./componentes/Cita";
import Formulario from "./componentes/Formulario";

const App = () => {
  const [citas, setCitas] = useState([
    {
      id: "1",
      paciente: "Paciente1",
      propietario: "propiestario1",
      sintomas: "sintomas1",
    },
    {
      id: "2",
      paciente: "Paciente2",
      propietario: "propiestario2",
      sintomas: "sintomas2",
    },
    {
      id: "3",
      paciente: "Paciente3",
      propietario: "propiestario3",
      sintomas: "sintomas3",
    },
  ]);

  //Elimina los pacientes del state
  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <View style={styles.contenedor}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.titulo}>Administrador de Citas</Text>
          <Formulario />
          <Text style={styles.titulo}>
            {citas.length > 0 ? "Administra tus citas" : "No hay citas, Agrega una"}
          </Text>
          <FlatList
            data={citas}
            renderItem={({ item }) => (
              <Cita item={item} eliminarPaciente={eliminarPaciente} />
            )}
            keyExtractor={(cita) => cita.id}
          />
          {/*{citas.map(cita => (*/}
          {/*  <View>*/}
          {/*    <Text>{cita.paciente}</Text>*/}
          {/*  </View>*/}
          {/*))}*/}

        </ScrollView>
      </SafeAreaView>
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
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
