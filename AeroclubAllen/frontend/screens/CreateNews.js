import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Text, Alert } from 'react-native'
import ImageUploader from '../components/ImageUploader'
import DatePicker from 'react-native-datepicker';



const CreateNews = (props) => {

    // Obtener la fecha actual
    const currentDate = new Date().toISOString().split('T')[0]; // Fecha en formato YYYY-MM-DD

    const [state, setState] = useState({
        date: currentDate,
        title: '',
        description: '',
        img:'',
    })

    //Capture data from form
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const payload = {
        data: {
            date: state.date,
            title: state.title,
            description: state.description,
            imgName: state.img
        }
    };

    // URL endpoint
    const POST_URL = 'http://192.168.0.43:3000/api/news';
    const handleSubmit = async () => {
        try {
            //Petición POST al backend
            const response = await fetch(POST_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload), 
            });
            
            const result = await response.json();
            const row = result.rows[0];
            if (response.ok) {
                Alert.alert(
                    'Éxito',
                    'Datos enviados correctamente',
                    [
                        {
                            text:'OK',
                            //onPress: () => {console.log(result.rows)},
                            onPress: () => props.navigation.navigate('NewsList', {row}),
                        },
                    ],
                    {cancelable: false}
                );
            } else {
                Alert.alert('Error', `Ocurrió un error: ${result.message}`);
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            Alert.alert('Error', 'Ocurrió un error al enviar los datos.');
        }
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <Text>Fecha:</Text>
                <TextInput
                    value={currentDate}
                    editable={false} // Hacer que el campo no sea editable
                    selectTextOnFocus={false} // Evitar que se seleccione el texto
                />
            </View>
            <View style={styles.inputGroup}>
                <Text>Titulo:</Text>
                <TextInput placeholder='Insert Title' onChangeText={(value) => handleChangeText('title', value)} />
            </View>
            <View style={styles.inputGroup}>
                <Text>Descripcion:</Text>
                <TextInput placeholder='Insert Description' onChangeText={(value) => handleChangeText('description', value)} />
            </View>
            <View style={styles.inputGroup}>
                <Text>Nombre Img:</Text>
                <TextInput placeholder='Insert Img name' onChangeText={(value) => handleChangeText('img', value)} />
            </View>
            <View>
                <Button title='Save News' onPress={handleSubmit} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default CreateNews