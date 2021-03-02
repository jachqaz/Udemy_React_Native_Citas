import React, { useState } from "react";
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {
  const [fecha, guardarFecha] = useState("");
  const [hora, guardarHora] = useState("");

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = { year: "numeric", month: "long", day: "2-digit" };
    guardarFecha(date.toLocaleDateString("es-ES", opciones));
    hideDatePicker();
  };

  const confirmarHora = (hour) => {
    const opciones = { hour: "numeric", minute: "2-digit" };
    guardarHora(hour.toLocaleString("en-US", opciones));
    hideTimePicker();
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.formulario}>
            <View>
              <Text style={styles.label}>Paciente:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto) => console.log(texto)}
              />
            </View>

            <View>
              <Text style={styles.label}>Dueño:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto) => console.log(texto)}
              />
            </View>

            <View>
              <Text style={styles.label}>Telefono Contacto:</Text>
              <TextInput
                style={styles.input}
                onChangeText={(texto) => console.log(texto)}
              />
            </View>

            <View>
              <Text style={styles.label}>Fecha:</Text>
              <Button title="Seleccionar Fecha" onPress={showDatePicker} />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={confirmarFecha}
                onCancel={hideDatePicker}
                locale="es_Es"
              />
              <Text>{fecha}</Text>
            </View>

            <View>
              <Text style={styles.label}>Hora:</Text>
              <Button title="Seleccionar Hora" onPress={showTimePicker} />
              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={confirmarHora}
                onCancel={hideTimePicker}
                locale="es_Es"
                is24Hour
              />
              <Text>{hora}</Text>
            </View>

            <View>
              <Text style={styles.label}>Sintomas:</Text>
              <TextInput
                multiline
                style={styles.input}
                onChangeText={(texto) => console.log(texto)}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: "2.5%",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 20,
    height: 50,
    borderColor: "#e1e1e1",
    borderWidth: 1,
    borderStyle: "solid",
  },
});
export default Formulario;
