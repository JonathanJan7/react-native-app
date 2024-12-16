import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';
import { BASE_URL, deleteNews } from '../../../api'
import { useNavigation } from '@react-navigation/native';
import { styles } from './NewsDetail.styles'

const NewsDetail = (props) => {
    const navigation = useNavigation();
    const item = props.route.params.item;

    handleDelete = async (item) => {        
        const response = await deleteNews(item.id);        
        if (response.status !== 200) {
            Alert.alert(
                'Error',
                'No se ha podido eliminar la noticia',
                [
                    {
                        text: 'OK',
                    },
                ],
                { cancelable: false }
            );
            return;
        } else {
            Alert.alert(
                'Éxito',
                'Noticia eliminada correctamente',
                [
                    {
                        text:'OK',
                        onPress: () => navigation.goBack(),
                    },
                ],
                {cancelable: false}
            );
        }
    }

    return (
        <ScrollView >
            <Card key={item.id}>
                <Card.Image source={{ uri: `${BASE_URL}/news/img/${item.id}` }} />
                <Card.Title style={styles.title}>{item.title}</Card.Title>
                <Card.Divider />
                <Text style={{ marginBottom: 10 }}>
                    Fecha: {item.date}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Descripcion: {item.description}
                </Text>
                <Card.Divider />
                <View>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => handleDelete(item)}
                    >
                        <Text style={styles.deleteButtonText}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </Card>
        </ScrollView>
    )
}

export default NewsDetail