import React from 'react'
import { Text, ScrollView } from 'react-native'
import { Card } from '@rneui/themed';
import { BASE_URL } from '../../../api'

const CourseDetail = (props) => {
    const item = props.route.params.item;

    return (
        <ScrollView >
            <Card key={item.class}>
                {/* Imagen */}
                <Card.Image source={{ uri: `${BASE_URL}/courses/img/${item.class}`}} />
                {/* Título de la Card */}
                <Card.Title>{item.translatedClass}</Card.Title>
                <Card.Divider />
                {/* Boton para mas detalles */}
                <Text style={{ marginBottom: 10 }}>
                    Edad Minima: {item.age}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Duracion: {item.duration}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Horas de Vuelo: {item.hours}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Estudios Minimos: {item.studies}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Examen Psicofisico: {item.psychophysical}
                </Text>
                <Text style={{ marginBottom: 10 }}>
                    Licencias Previas: {item.licenses}
                </Text>
            </Card>
        </ScrollView>
    )
}

export default CourseDetail