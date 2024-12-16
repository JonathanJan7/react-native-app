import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Text, Alert } from 'react-native'
import ImageUploader from '../../../components/ImageUploader'
import DatePicker from 'react-native-datepicker';
import { BASE_URL } from '../../../config'
import { styles } from './CreateNews.styles'
import { createNews } from '../../../api/news.api'

const CreateNews = (props) => {
    const currentDate = new Date().toISOString().split('T')[0];

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
    const POST_URL = `${BASE_URL}/news`;
    const handleSubmit = async () => {
        try {
            const response = await createNews(payload);
            
            const result = await response.json();
            const row = result.rows[0];
            if (response.ok) {
                Alert.alert(
                    'Éxito',
                    'Datos enviados correctamente',
                    [
                        {
                            text:'OK',
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
                <TextInput placeholder='Titulo' onChangeText={(value) => handleChangeText('title', value)} />
            </View>
            <View style={styles.inputGroup}>
                <Text>Descripcion:</Text>
                <TextInput placeholder='Descripcion' onChangeText={(value) => handleChangeText('description', value)} />
            </View>
            <View style={styles.inputGroup}>
                <Text>Nombre Img:</Text>
                <TextInput placeholder='Nombre Imagen' onChangeText={(value) => handleChangeText('img', value)} />
            </View>
            <View>
                <Button color="#0D2154" title='Crear Noticia' onPress={handleSubmit} />
            </View>
        </ScrollView>
    )
}

export default CreateNews