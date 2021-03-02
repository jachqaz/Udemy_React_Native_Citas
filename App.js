import React, { useState } from "react";
import { FlatList, Platform, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Cita from "./componentes/Cita";
import Formulario from "./componentes/Formulario";

const App = () => {
  const [mostrarForm, guardarMostrarForm] = useState(false);
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

  //Muestra u oculta el formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarForm);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de Citas</Text>
      <View>
        <TouchableHighlight
          onPress={() => mostrarFormulario()}
          style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}>Crear Nueva Cita</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.contenido}>
        {mostrarForm ? (
          <>
            <Text style={styles.titulo}>Crear Nueva Cita</Text>
            <Formulario />
          </>
        ) : (
          <>
            <Text style={styles.titulo}>
              {citas.length > 0
                ? "Administra tus citas"
                : "No hay citas, Agrega una"}
            </Text>
            <FlatList
              style={styles.listado}
              data={citas}
              renderItem={({ item }) => (
                <Cita item={item} eliminarPaciente={eliminarPaciente} />
              )}
              keyExtractor={(cita) => cita.id}
            />
          </>
        )}
      </View>
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
    marginTop: Platform.OS === "android" ? 20 : 40,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  contenido: {
    flex: 1,
    marginHorizontal: "2.5%",
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: "#7d024e",
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default App;
